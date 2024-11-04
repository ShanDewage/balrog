// src/components/Branding.js

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Branding = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h6">Your Name</Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <TwitterIcon />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Branding;
