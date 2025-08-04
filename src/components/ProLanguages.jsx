import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";

const languages = [
  //   { name: "HTML", logo: require("../assets/logos/html.png") },
  //   { name: "CSS", logo: require("../assets/logos/css.png") },
  //   { name: "JavaScript", logo: require("../assets/logos/javascript.png") },
  //   { name: "TypeScript", logo: require("../assets/logos/typescript.png") },
  //   { name: "Python", logo: require("../assets/logos/python.png") },

  { name: "HTML", logo: require("../assets/logos/React.png") },
  { name: "CSS", logo: require("../assets/logos/React.png") },
  { name: "JavaScript", logo: require("../assets/logos/React.png") },
  { name: "TypeScript", logo: require("../assets/logos/React.png") },
  { name: "Python", logo: require("../assets/logos/React.png") },
];

function ProLanguages() {
  const theme = useTheme();
  const styles = themeStyles(theme);
  return (
    <Box
      //   sx={{
      //     py: 6,
      //     px: 3,
      //     display: "flex",
      //     flexWrap: "wrap",
      //     justifyContent: "center",
      //     gap: 4,
      //   }}

      sx={{
        ...styles.sectionTitleBox,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {languages.map((lang, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 100,
            textAlign: "center",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <img
            src={lang.logo}
            alt={lang.name}
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
          <Typography variant="subtitle2" sx={{ mt: 1 }}>
            {lang.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ProLanguages;
