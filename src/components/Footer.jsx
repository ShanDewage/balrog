import React from "react";
import { Box, Typography, useTheme, Link } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";

const Footer = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);

  return (
    <Box component="footer" sx={styles.footerContainer}>
      <Box
        sx={{
          mb: 4,
          textAlign: "left",
        }}
      >
        <Typography
          variant="subTitle_md"
          sx={{ color: theme.palette.text.secondary }}
        >
          Thanks for stopping by, let's chat!
        </Typography>
      </Box>

      <Box sx={styles.footerCardContainer}>
        <Box sx={styles.footerCard}>
          <Typography sx={styles.footerCardTitle}>
            Contact Me{" "}
            <span role="img" aria-label="envelope">
              💌
            </span>
          </Typography>
          <Typography sx={styles.footerCardText}>blahblah@gmail.com</Typography>
        </Box>

        <Box sx={styles.footerCard}>
          <Typography sx={styles.footerCardTitle}>
            Let's Connect{" "}
            <span role="img" aria-label="handshake">
              🤝
            </span>
          </Typography>
          <Typography sx={styles.footerCardText}>
            <Link
              href="#"
              underline="hover"
              sx={{ color: theme.palette.text.primary }}
            >
              LinkedIn
            </Link>{" "}
            |{" "}
            <Link
              href="#"
              underline="hover"
              sx={{ color: theme.palette.text.primary }}
            >
              Resume
            </Link>{" "}
            |{" "}
            <Link
              href="#"
              underline="hover"
              sx={{ color: theme.palette.text.primary }}
            >
              Work
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            ...styles.footerCard,

            alignItems: "flex-start",
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Typography sx={{ ...styles.footerCardTitle, mb: 0 }}>
            ©2025 BALROG
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
