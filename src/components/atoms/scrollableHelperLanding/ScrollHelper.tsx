import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { ScrollHelperProps } from "./types";
import useScrollHelper, { animate, transition } from "./useScrollHelper";
import "./style.css";

const ScrollHelper: React.FC<ScrollHelperProps> = (props) => {
  const { className, showIcon, styles, t } = useScrollHelper(props);

  return (
    <div style={styles.lineContainer}>
      {showIcon ? (
        <>
          <motion.div animate={animate} transition={transition} style={styles.tapMotionDiv}>
            <Typography style={styles.text}>{t("label.tapToContinue")}</Typography>
          </motion.div>
        </>
      ) : (
        <div className={className}></div>
      )}
    </div>
  );
};

export default ScrollHelper;
