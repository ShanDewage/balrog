import React from "react";
import { Box, Typography, useTheme, IconButton, Grid2 } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { style } from "framer-motion/client";
import { themeStyles } from "../assets/styles/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);

  return (
    <Box
      id="contact me"
      sx={{
        ...styles.sectionContainerPrimary,
      }}
    >
      {/* This is section title start */}
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        {/* <Typography sx={{ ...styles.sectionTitleSpan1 }}>{"</h1>"}</Typography> */}
        <Typography
          variant="sectionTitle"
          sx={{
            ...styles.sectionTitle,
          }}
        >
          Contact Me
        </Typography>
        {/* <Typography sx={{ ...styles.sectionTitleSpan2 }}>{"</h1>"}</Typography> */}
      </Box>
      {/* This is section title end */}

      <Grid
        container
        spacing={2}
        sx={{
          height: "75%",
          py: 4,
        }}
      >
        {" "}
        <Grid
          item
          size={6}
          sx={{
            ...styles.contactGrid,
          }}
        >
          <IconButton>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid
          item
          size={6}
          sx={{
            ...styles.contactGrid,
          }}
        >
          {" "}
          <IconButton>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
