import { Box } from "@mui/material";
import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { useMenuItemStyle } from "./styles";
import { useDimensions } from "../../../hooks/useDimensions";
import { motion } from "framer-motion";
import CustomTypography from "../CustomTypography/customTypography";

export interface MenuItemsProps {
  title: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemsProps> = ({ title, onClick }) => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const styles = useMenuItemStyle(theme, screenSize);
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const MobileButton = memo(() => {
    return (
      <Box
        style={{
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={onClick}
        key={title}
      >
        <CustomTypography style={styles.typography}>{title}</CustomTypography>
      </Box>
    );
  });

  const Button = memo(() => {
    return (
      <Box
        style={{
          textAlign: "right",
          margin: 2,
        }}
        onClick={onClick}
        key={title}
      >
        <motion.div
          style={styles.cursor}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <CustomTypography style={styles.typography}>{title}</CustomTypography>
        </motion.div>
      </Box>
    );
  });

  return isSmall ? <MobileButton /> : <Button />;
};

export default MenuItem;
