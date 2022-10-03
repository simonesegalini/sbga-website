import { Box } from "@mui/material";
import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { useMenuItemStyle } from "./styles";
import { useDimensions } from "../../../hooks/useDimensions";
import { motion } from "framer-motion";

export interface MenuItemsProps {
  title: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemsProps> = ({ title, onClick }) => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const styles = useMenuItemStyle(theme, screenSize);

  const MobileButton = memo(() => {
    return (
      <Box
        style={{
          textAlign: "center",
          ...styles.btnContainer,
        }}
        onClick={onClick}
        key={title}
      >
        {title}
      </Box>
    );
  });

  const Button = memo(() => {
    return (
      <Box
        style={{
          textAlign: "right",
          margin: 8,
          ...styles.btnContainer,
        }}
        onClick={onClick}
        key={title}
      >
        <motion.div
          style={styles.cursor}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {title}
        </motion.div>
      </Box>
    );
  });

  return screenSize === "sm" ? <MobileButton /> : <Button />;
};

export default MenuItem;
