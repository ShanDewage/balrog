import React, { useRef } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { themeStyles } from "../assets/styles/Theme";
import aboutme from "../assets/images/me.jpg";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const About = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150); // Adjust as needed

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="about me"
      ref={ref}
      sx={
        {
          // ...styles.sectionContainerSecondary,
        }
      }
    >
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Typography
            variant="sectionTitle"
            sx={{
              ...styles.sectionTitle,
            }}
          >
            About Me
          </Typography>
        </motion.h1>
        <Box
          sx={{
            ...styles.contentScrollContainer,
            right: "9%",
          }}
        >
          <IconButton
            onClick={scrollToContent}
            aria-label="Scroll down to content"
            sx={{ ...styles.btnContentScroll }}
          >
            <KeyboardDoubleArrowDownOutlinedIcon
              sx={{ ...styles.iconContentScroll }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        ref={contentRef}
        sx={{
          ...styles.sectionBoxContainer,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={styles.amGridContainer}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={styles.amGridColLeft}
          >
            <Box
              component={motion.img}
              src={aboutme} // Adjust the path accordingly
              alt="Profile Image"
              sx={styles.amProfileImg}
              initial={{
                opacity: 0,
                scale: 0.8,
                //  rotate: -90
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={styles.amGridColRight}
          >
            <Box>
              <Typography variant="h5">Shan DewaGE</Typography>{" "}
              <Typography variant="subTitle_md" sx={{ color: "#FD8127" }}>
                UI/UX Designer
              </Typography>
            </Box>
            <Box pr={10} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="body_sm" textAlign={"justify"} paragraph>
                Hello, I’m [Your Name], also known as [Preferred Nickname]. I’m
                a UI/UX Designer and Front-End Developer passionate about
                creating user-friendly and visually appealing designs. My
                approach combines empathy for users with technical expertise to
                deliver functional and beautiful interfaces.
              </Typography>
              <Typography variant="body_sm" textAlign={"justify"} paragraph>
                With 1 year of industry experience and 1-2 years of freelancing,
                I’ve learned that great design isn’t just about looks—it’s about
                usability and meeting both user and stakeholder needs. I focus
                on blending design and development to ensure aesthetics and
                functionality work seamlessly together.
              </Typography>
              <Typography variant="body_sm" textAlign={"justify"} paragraph>
                I’m 27, based in [City/Country], and hold a [Degree] in [Field].
                My journey into design and development is driven by curiosity
                and a desire to improve experiences, one pixel at a time.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                // marginTop: theme.spacing(4),
                "& a": {
                  color: "#333",
                  fontSize: "2rem",
                  // spacing: 4,
                  margin: theme.spacing(0, 1),
                },
              }}
            >
              <a href="#">
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
              </a>{" "}
              <a href="#">
                <IconButton aria-label="delete">
                  <GitHubIcon />
                </IconButton>
              </a>{" "}
              <a href="#">
                <IconButton aria-label="delete">
                  <LinkedInIcon />
                </IconButton>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
