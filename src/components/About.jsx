// src/components/About.js
import React, { useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme(); // Access the current MUI theme

  return (
    <Box
      id="about"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
          This is the about section where you can introduce yourself.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
