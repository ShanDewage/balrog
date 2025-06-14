import React, { useRef } from "react";
import {
  Box,
  Divider,
  Typography,
  useTheme,
  alpha,
  Button,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { themeStyles } from "../assets/styles/Theme";
import bgImage from "../assets/images/bg.png";

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
        // flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "center",
        pl: { xs: 0, md: 50 },

        // backgroundImage: `url(${bgImage})`,
        // backgroundSize: "cover",
        // backgroundSize: "auto 100%",
        // backgroundPosition: "right center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: -1100,
          height: "100%",
          width: { xs: "150px", md: "120%" },
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          // backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          // ...styles.heroContainer,
          // py: 4,
          pt: 4,
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              ...styles.heroTitle,
              textShadow: `0px 2px 4px ${alpha(
                theme.palette.text.titleMain,
                0.4
              )}`,
            }}
          >
            {"SHaN"}
            <br />
            {"DeWAGE"}
          </Typography>
        </motion.h1>
        {/* <Divider /> */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Typography variant="h5" sx={styles.heroTagLine}>
            UI/UX Designer & Full Stack Designer.
          </Typography>{" "}
        </motion.div> */}
      </Box>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignContent: "left",
            alignItems: "flex-start",
            textAlign: "left",
            // justifyContent: "left",
          }}
        >
          <Typography
            variant="worksDesc"
            textAlign={"justify"}
            paragraph
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "600px",
            }}
          >
            I’m a full-stack designer crafting seamless UIs and clean code. This
            space is where design meets development — with a sprinkle of
            obsession for detail.
            <br />
            <br />
            Lately, I’ve been exploring new tools, refining ideas, and building
            things that (hopefully) don't break.
          </Typography>

          <Button
            // id="about me"
            // ref={ref}
            onClick={() => {
              const aboutSection = document.getElementById("about me");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            sx={{
              // textDecoration: "none",
              fontWeight: 400,
              px: 2,
              // py: 1,
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "999px",
              textTransform: "capitalize",
              color: theme.palette.primary.main,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: theme.palette.text.primary,
                color: theme.palette.background.default,
              },
            }}
          >
            Read More »
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
