import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        backgroundColor: "lightgoldenrodyellow",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">Contact Me</Typography>
      <Typography variant="body1">
        Your contact information goes here.
      </Typography>
    </Box>
  );
};

export default Contact;
