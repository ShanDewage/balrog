import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        textAlign: "center",
        backgroundColor: "primary.main", // Adjust based on your theme or color preference
        color: "white", // Adjust for readability
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Website Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
