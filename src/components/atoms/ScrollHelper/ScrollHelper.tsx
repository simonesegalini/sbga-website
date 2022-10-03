import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useScrollHelperStyle } from "./styles";
import { motion, useScroll } from "framer-motion";

const D = "M23.25,6.36,12,17.22.75,6.36";

const ScrollHelper: React.FC = () => {
  const theme = useTheme();
  const styles = useScrollHelperStyle(theme);
  const [show, setShow] = useState(true);

  const hide = () => setShow(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((scroll) => {
      hide();
      setTimeout(() => {
        if (scroll < 0.95) {
          if (show) return;
          setShow(true);
          return;
        }
      }, 4000);
    });
  }, [show, scrollYProgress]);

  return (
    <>
      {show && (
        <motion.div
          style={styles.lineContainer}
          animate={{ opacity: 0.3 }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
          }}
        >
          <svg
            style={styles.svg}
            viewBox="0 0 24 24"
            preserveAspectRatio="none"
          >
            <path d={D} style={styles.path} />
          </svg>
        </motion.div>
      )}
    </>
  );
};

export default ScrollHelper;
