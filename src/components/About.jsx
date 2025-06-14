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
            // right: "9%",
            right: { xs: "8%", sm: "9%", md: "7.5%" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
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
          </motion.div>
        </Box>
      </Box>
      <Box
        ref={contentRef}
        sx={{
          ...styles.sectionBoxContainer,
        }}
      >
        <Grid container spacing={2} sx={styles.amGridContainer}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={styles.amGridColLeft}
          >
            <motion.div
              initial={{ opacity: 0 }}
              // animate={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 4, ease: "easeOut" }}
            >
              <Box
                component={motion.img}
                src={aboutme} // Adjust the path accordingly
                alt="Profile Image"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                sx={{
                  ...styles.amProfileImg,
                  pointerEvents: "none", // Add this to prevent drag & interaction
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  //  rotate: -90
                }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={styles.amGridColRight}
          >
            <Box
              sx={{
                px: { xs: 2, sm: 4, md: 0 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "56px", sm: "64px", md: "64px" },

                    // textAlign: { xs: "center", sm: "left", md: "left" },
                  }}
                >
                  Shan DewaGE
                </Typography>{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.text.titleMain,

                    fontSize: { xs: "24px", sm: "32px", md: "32px" },

                    // textAlign: { xs: "center", sm: "left", md: "left" },
                  }}
                >
                  UI/UX Designer / Full Stack Designer
                </Typography>{" "}
              </motion.div>
            </Box>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box sx={styles.amGridDesc}>
                <Typography variant="worksDesc" textAlign={"justify"} paragraph>
                  I’m a designer-turned-developer who thrives at the crossroads
                  of clean design and functional code. With a background rooted
                  in UI/UX and a growing focus on front-end engineering, I craft
                  digital experiences that are intuitive, scalable, and visually
                  refined — whether it’s a mobile app interface or a fully
                  responsive web layout.
                </Typography>
                <Typography variant="worksDesc" textAlign={"justify"} paragraph>
                  Currently, I’m a Full Stack Designer at Secvision (Pvt) Ltd,
                  where I lead end-to-end workflows — from wireframes and
                  e-flyers to React components and pixel-perfect
                  implementations. My day-to-day blends Figma artboards with
                  component libraries, always keeping performance and user
                  experience at the center.
                </Typography>
                <Typography variant="worksDesc" textAlign={"justify"} paragraph>
                  Previously, I worked as a freelance web developer,
                  collaborating on everything from news platforms to custom
                  inventory tools. That hands-on foundation gave me a deep
                  appreciation for both visual storytelling and technical
                  problem-solving.
                </Typography>{" "}
                <Typography variant="worksDesc" textAlign={"justify"} paragraph>
                  {/* When I’m not pushing pixels or writing code, you’ll probably
                  find me exploring design trends, tweaking UI interactions for
                  fun, or wandering down a rabbit hole of new frameworks and
                  creative ideas. */}
                  When I’m not designing or coding, I’m exploring new tools,
                  diving into design challenges, or getting inspired by the
                  latest trends in the tech world.
                </Typography>
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box
                sx={{
                  ...styles.amGridIcons,
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
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
