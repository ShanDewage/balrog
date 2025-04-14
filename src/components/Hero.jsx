import React, { useRef } from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { themeStyles } from "../assets/styles/Theme";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Hero = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Parallax effect for background
  const y = useParallax(scrollYProgress, 0); // Adjust distance as needed
  const opacity = useParallax(scrollYProgress, 1); // Adjust opacity effect

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        ...styles.heroContainer,
      }}
    >
      {" "}
      <Box
        sx={{
          // ...styles.heroContainer,
          py: 4,
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <Typography variant="h1" sx={styles.heroTitle}>
            {"SHaN"}
            <br />
            {"DeWAGE"}
          </Typography>
        </motion.h1>
        {/* <Divider /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Typography variant="h5" sx={styles.heroTagLine}>
            Front-End Developer & UI Designer.
          </Typography>{" "}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
