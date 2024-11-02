import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Projects = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.paper, // Use theme paper background
        color: theme.palette.text.primary, // Use theme text color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" sx={{ typography: theme.typography.h2 }}>
        My Projects
      </Typography>
      <Typography variant="body1" sx={{ typography: theme.typography.body1 }}>
        Details about your projects go here.
      </Typography>
    </Box>
  );
};

export default Projects;
