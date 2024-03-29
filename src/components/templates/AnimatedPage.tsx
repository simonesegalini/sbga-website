import { motion } from "framer-motion";
import React, {
  ReactElement,
  UIEventHandler,
  useEffect,
  useLayoutEffect,
} from "react";
import { useDimensions } from "../../hooks/useDimensions";

interface IAnimatedPageProps {
  children: ReactElement;
  style?: React.CSSProperties;
  onScroll?: UIEventHandler | undefined;
}

const animations = {
  initial: { opacity: 0, x: 90 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -90 },
};

const AnimatedPage: React.FC<IAnimatedPageProps> = ({
  children,
  style,
  onScroll,
}) => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isSmall) {
    return (
      <div
        style={style}
        id="noAnimatedPage"
        onScroll={onScroll}
        key={children.key}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
      key={children.key}
      id="animatedPage"
      style={style}
      onScroll={onScroll}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
