import React, { useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const About = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150); // Adjust as needed

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ y }}>
        <Box textAlign="center">
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary }}
          >
            This is the about section where you can introduce yourself.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
