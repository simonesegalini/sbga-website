export const CONTAINER_STYLES = {
  position: "relative",
  overflow: "hidden",
};

export const ABSOLUTE_STYLES = {
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
};

export const INITIAL_STYLES = {
  position: "initial",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
};

export interface Focus {
  x: number;
  y: number;
}

export interface FocusedImageOptions {
  /**
   * Time in MS before debounceApplyShift fires
   *
   * Defaults to `17`
   */
  debounceTime?: number;
  /**
   * Should window resize events fire debounceApplyShift?
   *
   * Defaults to `true`
   */
  updateOnWindowResize?: boolean;
  /**
   * Should container resize (even from CSS) fire debounceApplyShift?
   *
   * Defaults to `false`
   */
  updateOnContainerResize?: boolean;
  /**
   * Focus coordinates to initialize with
   *
   * Default value is `undefined`
   */
  focus?: Focus;
  /**
   * Container position
   *
   * Default value is "relative"
   */
  containerPosition?: "fixed" | "relative" | "absolute" | "sticky";
  imagePosition?: "absolute" | "initial";
}

function debounce(func: Function, debounceTime: number) {
  let timeout: any;
  return function debouncedFunction(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), debounceTime);
  };
}

function assign(target: any, ...sources: any) {
  sources.forEach((source: { [x: string]: any }) =>
    Object.keys(source).forEach((key) => (target[key] = source[key]))
  );
  return target;
}

const IMG_STYLES = {
  // Set these styles in case the image dimensions
  // are smaller than the container's
  minHeight: "100%",
  minWidth: "100%",
  position: "relative",
};

const IMG_STYLES_RESIZE = {
  // Set these styles in case the image dimensions
  // are smaller than the container's
  minHeight: "100%",
  minWidth: "100%",
  position: "relative",
};

const RESIZE_LISTENER_OBJECT_STYLES = {
  height: "100%",
  width: "100%",
  border: "none",

  // set these styles to emulate "visibility: hidden"
  // can't use visibility because it breaks the object
  // events in Firefox
  opacity: 0,
  zIndex: -1,
  pointerEvents: "none",
};

const DEFAULT_OPTIONS: FocusedImageOptions = {
  debounceTime: 17,
  updateOnWindowResize: true,
  updateOnContainerResize: false,
  containerPosition: "relative",
};

export class FocusedImage {
  focus: Focus;
  options: FocusedImageOptions;
  container: HTMLElement;
  img: HTMLImageElement;
  resizeListenerObject: HTMLObjectElement | undefined;
  listening = false;
  debounceApplyShift: () => void;
  imagePosition: "absolute" | "initial" | undefined = "absolute";

  constructor(
    private imageNode: HTMLImageElement,
    options: FocusedImageOptions = {}
  ) {
    // Merge in options
    this.options = assign(DEFAULT_OPTIONS, options);

    // Set up element references
    this.img = imageNode;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.container = imageNode.parentElement;

    this.imagePosition = options.imagePosition;

    // Set up instance
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this.img["__focused_image_instance__"]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.img["__focused_image_instance__"].stopListening();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.img.removeEventListener("load", this.applyShift);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.img["__focused_image_instance__"] = this;

    // Add image load event listener
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.img.addEventListener("load", this.applyShift);

    // Set up styles
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assign(this.container.style, CONTAINER_STYLES);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.container.style.position = this.options.containerPosition;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const imageStyle =
      this.imagePosition === "initial" ? INITIAL_STYLES : ABSOLUTE_STYLES;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assign(
      this.img.style,
      this.options.focus ? IMG_STYLES_RESIZE : IMG_STYLES,
      imageStyle
    );

    // Create debouncedShift function
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.debounceApplyShift = debounce(
      this.applyShift,
      this.options.debounceTime ? this.options.debounceTime : 0
    );

    // Initialize focus
    this.focus = this.options.focus
      ? this.options.focus
      : {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          x: parseFloat(this.img.getAttribute("data-focus-x")) || 0,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          y: parseFloat(this.img.getAttribute("data-focus-y")) || 0,
        };

    // Start listening for resize events
    this.startListening();

    // Set focus
    this.setFocus(this.focus);
  }

  public setFocus = (focus: Focus) => {
    this.focus = focus;
    this.img.setAttribute("data-focus-x", focus.x.toString());
    this.img.setAttribute("data-focus-y", focus.y.toString());
    this.applyShift();
  };

  public applyShift = () => {
    const { naturalWidth: imageW, naturalHeight: imageH } = this.img;
    const { width: containerW, height: containerH } =
      this.container.getBoundingClientRect();

    // Amount position will be shifted
    let hShift = "0";
    let vShift = "0";

    if (!(containerW > 0 && containerH > 0 && imageW > 0 && imageH > 0)) {
      return false; // Need dimensions to proceed
    }

    // Which is over by more?
    const wR = imageW / containerW;
    const hR = imageH / containerH;

    // Reset max-width and -height
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.img.style.maxHeight = null;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.img.style.maxWidth = null;

    // Minimize image while still filling space
    if (imageW > containerW && imageH > containerH) {
      this.img.style[wR > hR ? "maxHeight" : "maxWidth"] = "100%";
    }

    if (wR > hR) {
      hShift = `${this.calcShift(hR, containerW, imageW, this.focus.x)}%`;
    } else if (wR < hR) {
      vShift = `${this.calcShift(wR, containerH, imageH, this.focus.y, true)}%`;
    }

    if (!this.focus) {
      return;
    }

    if (this.focus.y) {
      this.img.style.top = vShift;
    }
    if (this.focus.x) {
      this.img.style.left = hShift;
    }
  };

  public startListening() {
    if (this.listening) {
      return;
    }
    this.listening = true;
    if (this.options.updateOnWindowResize) {
      window.addEventListener("resize", this.debounceApplyShift);
    }
    if (this.options.updateOnContainerResize) {
      const object = document.createElement("object");
      const imageStyle =
        this.imagePosition === "initial" ? INITIAL_STYLES : ABSOLUTE_STYLES;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      assign(object.style, RESIZE_LISTENER_OBJECT_STYLES, imageStyle);
      // Use load event callback because contentDocument doesn't exist
      // until this fires in Firefox
      object.addEventListener("load", () =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        object.contentDocument.defaultView.addEventListener("resize", () =>
          this.debounceApplyShift()
        )
      );
      object.type = "text/html";
      object.setAttribute("aria-hidden", "true");
      object.tabIndex = -1;
      this.container.appendChild(object);
      object.data = "about:blank";
      this.resizeListenerObject = object;
    }
  }

  public stopListening() {
    if (!this.listening) {
      return;
    }
    this.listening = false;
    window.removeEventListener("resize", this.debounceApplyShift);
    if (
      this.resizeListenerObject &&
      this.resizeListenerObject.contentDocument
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.resizeListenerObject.contentDocument.defaultView.removeEventListener(
        "resize",
        this.debounceApplyShift
      );
      this.container.removeChild(this.resizeListenerObject);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.resizeListenerObject = null;
    }
  }

  // Calculate the new left/top percentage shift of an image
  private calcShift(
    conToImageRatio: number,
    containerSize: number,
    imageSize: number,
    focusSize: number,
    toMinus?: boolean
  ) {
    const containerCenter = Math.floor(containerSize / 2); // Container center in px
    const focusFactor = (focusSize + 1) / 2; // Focus point of resize image in px
    const scaledImage = Math.floor(imageSize / conToImageRatio); // Can't use width() as images may be display:none
    let focus = Math.floor(focusFactor * scaledImage);
    if (toMinus) focus = scaledImage - focus;
    let focusOffset = focus - containerCenter; // Calculate difference between focus point and center
    const remainder = scaledImage - focus; // Reduce offset if necessary so image remains filled
    const containerRemainder = containerSize - containerCenter;
    if (remainder < containerRemainder)
      focusOffset -= containerRemainder - remainder;
    if (focusOffset < 0) focusOffset = 0;

    return (focusOffset * -100) / containerSize;
  }
}
