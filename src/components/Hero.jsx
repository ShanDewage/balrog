import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        height: "100vh",
        backgroundColor: "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">Welcome to My Portfolio</Typography>
    </Box>
  );
};

export default Hero;
