import React, { useRef } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import mapImage from "../assets/images/04.jpg"; // Replace with your actual image path
import { themeStyles } from "../assets/styles/Theme";
import { ArrowDownward } from "@mui/icons-material";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Experience = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Parallax effect for background
  const y = useParallax(scrollYProgress, 0); // Adjust distance as needed
  const opacity = useParallax(scrollYProgress, 1); // Adjust opacity effect
  // Scroll to content function
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      id="experience"
      ref={ref}
      sx={
        {
          // ...styles.sectionContainerPrimary,
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
            Experience
          </Typography>
        </motion.h1>{" "}
        <Box
          sx={{
            ...styles.contentScrollContainer,
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
        }}
      >
        {/* This is Content */}
      </Box>
    </Box>
  );
};

export default Experience;
