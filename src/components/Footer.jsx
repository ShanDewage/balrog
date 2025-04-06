import React from "react";
import { Box, Typography, useTheme, Link } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactsTwoToneIcon from "@mui/icons-material/ContactsTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
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
            Contact Me {/* <span role="img" aria-label="envelope"> */}
            {/* <ContactsTwoToneIcon /> */}
            {/* </span> */}
          </Typography>
          <Typography sx={styles.footerCardText}>
            <EmailTwoToneIcon />
            blahblah@gmail.com
          </Typography>
        </Box>

        <Box sx={styles.footerCard}>
          <Typography sx={styles.footerCardTitle}>
            Let's Connect{" "}
            {/* <span role="img" aria-label="handshake">
              🤝
            </span> */}
          </Typography>
          <Typography sx={styles.footerCardText}>
            <Link href="#" underline="hover" sx={styles.footerSocialLinkText}>
              <LinkedInIcon />
              LinkedIn
            </Link>{" "}
            |{" "}
            <Link href="#" underline="hover" sx={styles.footerSocialLinkText}>
              <GitHubIcon />
              Github
            </Link>{" "}
            |{" "}
            <Link href="#" underline="hover" sx={styles.footerSocialLinkText}>
              <FacebookIcon /> Facebook
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
