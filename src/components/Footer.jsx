import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";
const Footer = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        textAlign: "center",
        backgroundColor: theme.palette.background.paper,
        color: "white", // Adjust for readability
      }}
    >
      <Typography
        variant="sectionSpan"
        sx={{ fontSize: 10, color: theme.palette.text.primary }}
      >
        © {new Date().getFullYear()} Your Website Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
