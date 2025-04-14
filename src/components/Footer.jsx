import React from "react";
import { Box, Typography, useTheme, Link } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";
import { motion, useScroll, useTransform } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Typography
            variant="subTitle_md"
            sx={{ color: theme.palette.text.secondary }}
          >
            Thanks for stopping by, let's chat!
          </Typography>
        </motion.div>
      </Box>

      <Box sx={styles.footerCardContainer}>
        <Box sx={styles.footerCard}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Typography sx={styles.footerCardTitle}>
              Contact Me {/* <span role="img" aria-label="envelope"> */}
              {/* <ContactsTwoToneIcon /> */}
              {/* </span> */}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, x: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Typography sx={styles.footerCardText}>
              <EmailTwoToneIcon />
              blahblah@gmail.com
            </Typography>
          </motion.div>
        </Box>

        <Box sx={styles.footerCard}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Typography sx={styles.footerCardTitle}>
              Let's Connect{" "}
              {/* <span role="img" aria-label="handshake">
              🤝
            </span> */}
            </Typography>
          </motion.div>
          <Typography sx={styles.footerCardText}>
            <motion.div
              initial={{ opacity: 0, y: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Link href="#" underline="hover" sx={styles.footerSocialLinkText}>
                <LinkedInIcon />
                LinkedIn
              </Link>{" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              |{" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Link href="#" underline="hover" sx={styles.footerSocialLinkText}>
                <GitHubIcon />
                Github
              </Link>{" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              |{" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0, x: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Link href="#" underline="hover" sx={styles.footerSocialLinkText}>
                <FacebookIcon /> Facebook
              </Link>
            </motion.div>
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
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 0, x: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Typography sx={{ ...styles.footerCardTitle, mb: 0 }}>
              ©2025 BALROG
            </Typography>{" "}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
