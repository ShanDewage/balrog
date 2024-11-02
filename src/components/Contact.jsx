import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

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
    </Box>
  );
};

export default Contact;
