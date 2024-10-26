import React from "react";
import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        height: "100vh",
        backgroundColor: "lightcoral",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">My Projects</Typography>
      <Typography variant="body1">
        Details about your projects go here.
      </Typography>
    </Box>
  );
};

export default Projects;
