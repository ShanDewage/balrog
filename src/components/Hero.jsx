import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default, // Use theme background
        color: theme.palette.text.primary, // Use theme text color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" sx={{ typography: theme.typography.h2 }}>
        Welcome to My Portfolio
      </Typography>
    </Box>
  );
};

export default Hero;
