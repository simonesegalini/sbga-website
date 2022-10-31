import { motion } from "framer-motion";
import React, { ReactElement, UIEventHandler } from "react";

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
