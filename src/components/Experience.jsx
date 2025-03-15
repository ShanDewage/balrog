import React, { useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import mapImage from "../assets/images/04.jpg"; // Replace with your actual image path
import { themeStyles } from "../assets/styles/Theme";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Experience = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Parallax effect for background
  const y = useParallax(scrollYProgress, 0); // Adjust distance as needed
  const opacity = useParallax(scrollYProgress, 1); // Adjust opacity effect

  return (
    <Box
      id="experience"
      ref={ref}
      sx={{
        ...styles.sectionContainerPrimary,
      }}
    >
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        {/* <Typography sx={{ ...styles.sectionTitleSpan1 }}>{"</h1>"}</Typography> */}
        <Typography
          variant="sectionTitle"
          sx={{
            ...styles.sectionTitle,
          }}
        >
          Experience
        </Typography>
        {/* <Typography sx={{ ...styles.sectionTitleSpan2 }}>{"</h1>"}</Typography> */}
      </Box>

      {/* Parallax animated background image */}
      {/* <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          // backgroundImage: `url(${mapImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y, // Apply parallax effect to background
        }}
      /> */}

      {/* <motion.h1
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          transform: "translate(-50%, -50%)",
          fontSize: "2rem",
          color: theme.palette.text.primary,
          zIndex: 2,
        }}
      >
        Welcome to My Portfolio
      </motion.h1> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          fontSize: "1.5rem",
          color: theme.palette.text.primary,
          zIndex: 2,
        }}
      >
        Greetings, I'm [Your Name]
      </motion.div> */}
    </Box>
  );
};

export default Experience;
