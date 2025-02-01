import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";

const Projects = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);

  return (
    <Box
      id="works"
      sx={{
        ...styles.sectionContainerSecondary,
      }}
    >
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        <Typography sx={{ ...styles.sectionTitleSpan1 }}>{"</h1>"}</Typography>
        <Typography
          variant="sectionTitle"
          sx={{
            ...styles.sectionTitle,
          }}
        >
          Works
        </Typography>
        <Typography sx={{ ...styles.sectionTitleSpan2 }}>{"</h1>"}</Typography>
      </Box>
    </Box>
  );
};

export default Projects;
