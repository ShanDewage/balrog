import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        height: "100vh",
        backgroundColor: "lightgreen",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1">
          This is the about section where you can introduce yourself.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
