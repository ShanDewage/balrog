import React from "react";
import { Box, Typography, useTheme, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default, // Use theme background
        color: theme.palette.text.primary, // Use theme text color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" sx={{ typography: theme.typography.h2 }}>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ typography: theme.typography.body1 }}>
        Your contact information goes here.
      </Typography>
      {/* Grid layout for the two-column section */}
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Left Column: Social Media Icons */}
          <IconButton sx={{ mb: 2 }}>
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton sx={{ mb: 2 }}>
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton sx={{ mb: 2 }}>
            <Instagram fontSize="large" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Right Column: Contact Information */}
          <Typography variant="h6" sx={{ typography: theme.typography.h6 }}>
            John Doe
          </Typography>
          <Typography
            variant="body1"
            sx={{ typography: theme.typography.body1 }}
          >
            Email: johndoe@example.com
          </Typography>
          <Typography
            variant="body1"
            sx={{ typography: theme.typography.body1 }}
          >
            Phone: +123456789
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
