import React, { useRef, useEffect, useState } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrailImages from "../projects/Images";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);

  const trailRef = useRef([]);
  const heroRef = useRef(null);
  const IMAGE_COUNT = TrailImages.length;
  const IMG_SIZE = 140; // Match the width and height of your image boxes

  useEffect(() => {
    const container = heroRef.current;
    const trailElements = trailRef.current;
    let zIndexCounter = 1;

    // Track individual hide timers per image
    const hideTimers = new Array(IMAGE_COUNT).fill(null);

    const moveHandler = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const { left, width } = container.getBoundingClientRect();
      const relX = mouseX - left;

      let idx = Math.floor((relX / width) * IMAGE_COUNT);
      idx = Math.max(0, Math.min(idx, IMAGE_COUNT - 1));

      const imageEl = trailElements[idx];
      zIndexCounter += 1;
      imageEl.style.zIndex = zIndexCounter;

      // Clear old hide timer for this image
      clearTimeout(hideTimers[idx]);

      // Show current image at cursor position
      gsap.to(imageEl, {
        left: mouseX,
        top: mouseY,
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      // Set timer to fade out this image slowly
      hideTimers[idx] = setTimeout(() => {
        gsap.to(imageEl, {
          opacity: 0,
          scale: 0.8,
          duration: 1.5, // Longer for smooth fade
          ease: "power3.out",
        });
      }, 800); // Delay before fading out
    };

    const leaveHandler = () => {
      // Clear all timers and fade out all
      hideTimers.forEach((timer, i) => clearTimeout(timer));
      trailElements.forEach((imgEl) => {
        gsap.to(imgEl, {
          opacity: 0,
          scale: 0.8,
          duration: 1.5,
          ease: "power3.out",
        });
      });
    };

    container.addEventListener("mousemove", moveHandler);
    container.addEventListener("mouseleave", leaveHandler);

    return () => {
      container.removeEventListener("mousemove", moveHandler);
      container.removeEventListener("mouseleave", leaveHandler);
      hideTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);
  return (
    <Box
      id="home"
      ref={heroRef}
      // ref={ref}
      sx={{
        ...styles.heroContainer,
      }}
    >
      <Box
        sx={{
          position: {
            xs: "absolute",
            sm: "absolute",
            md: "fixed",
            lg: "fixed",
            xl: "fixed",
          },
          top: 0,
          bottom: 100,
          right: { xs: 100, sm: 0, md: -1000, lg: -1000, xl: -1000 },

          height: "100%",
          width: { xs: "300px", md: "110%" },
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          // backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {TrailImages.map((img, index) => (
        <Box
          key={index}
          ref={(el) => (trailRef.current[index] = el)}
          sx={{
            width: IMG_SIZE,
            height: IMG_SIZE,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            opacity: 0,
            scale: 0.8,
            pointerEvents: "none",
            // zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        />
      ))}

      <Box
        sx={{
          // ...styles.heroContainer,
          // py: 4,
          pt: { xs: 0, sm: 0, md: 4, lg: 4, xl: 4 },
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
            {"DeWAGE"}{" "}
          </Typography>
        </motion.h1>
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
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
          }}
        >
          <Typography
            variant="worksDesc"
            paragraph
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "600px",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "justify",
                lg: "justify",
                xl: "justify",
              },
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
              fontWeight: 400,
              px: 2,
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
