import { useGlobal } from "../../../state/global/useGlobal";
import { useCallback, useEffect, useMemo } from "react";

export const NUM_FRAMES = 130;

export const useLandingPageDataLoader = () => {
  const { setLandingPageImages } = useGlobal();

  const showed = localStorage.getItem("animation_view_sbga");

  const getCurrentFrame = useCallback((index: number) => {
    return `https://valerioberruti.com/img_home/${index
      .toString()
      .padStart(4, "0")}.jpg`;
  }, []);

  const preloadImages = useMemo(() => {
    const images: HTMLImageElement[] = [];
    if (showed) {
      return images;
    }
    for (let i = 1; i <= NUM_FRAMES; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      images.push(img);
    }
    return images;
  }, [getCurrentFrame, showed]);

  useEffect(() => {
    if (preloadImages.length) {
      setLandingPageImages({ landingPageImages: preloadImages });
    }
  }, [preloadImages, setLandingPageImages]);
};
