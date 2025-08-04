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
import ImageTrail from "../functions/ImageTrail";
import TextPressure from "../functions/TextPressure";
import tumbleweedImage from "../assets/images/tumbleweed.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const tumbleweedRef = useRef(null);

  const NUM_TUMBLEWEEDS = 3;
  const tumbleweedRefs = useRef([]);
  tumbleweedRefs.current = Array.from(
    { length: NUM_TUMBLEWEEDS },
    (_, i) => tumbleweedRefs.current[i] || React.createRef()
  );

  useEffect(() => {
    tumbleweedRefs.current.forEach((ref, index) => {
      if (!ref.current) return;
      const el = ref.current;

      gsap.set(el, { opacity: 1 });

      const delay = Math.random() * 5 + index * 1;
      const duration = 10 + Math.random() * 4;
      const xTarget = `${60 + Math.random() * 20}vw`;
      const rotationTarget = 360 + Math.random() * 720;

      // Create a main timeline for the drift
      const tl = gsap.timeline({ delay, repeat: -1 });

      tl.to(
        el,
        {
          x: xTarget,
          rotation: rotationTarget,
          duration,
          ease: "sine.inOut",
        },
        0
      )
        .to(
          el,
          {
            // bump gently like wind (sinusoidal y motion)
            y: "-=20", // move up
            duration: duration / 4,
            repeat: Math.floor(duration / (duration / 4)),
            yoyo: true,
            ease: "sine.inOut",
          },
          0
        )
        .to(el, {
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          onComplete: () => {
            gsap.set(el, {
              x: 0,
              y: 0,
              rotation: 0,
              opacity: 1,
            });
          },
        });
    });
  }, []);

  return (
    <>
      {tumbleweedRefs.current.map((ref, index) => (
        <img
          key={index}
          ref={ref}
          src={tumbleweedImage}
          alt={`Tumbleweed ${index}`}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "80px",
            zIndex: 3,
            pointerEvents: "none",
            opacity: 0,
          }}
        />
      ))}

      <div
        style={{
          height: "100vh",
          position: "absolute",
          width: "100%",
        }}
      >
        <ImageTrail key={1} items={TrailImages} variant={3} />
      </div>

      <Box
        id="home"
        ref={ref}
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
            // top: 0,
            bottom: -80,
            right: { xs: -100, sm: 0, md: -300, lg: -300, xl: -400 },

            // height: "75%",
            height: { xs: "50%", sm: "50%", md: "75%" },

            width: { xs: "400px", sm: "50%", md: "50%" },
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            // backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

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
              {/* {"SHaN"}
              <br />
              {"DeWAGE"}{" "} */}
              <TextPressure
                text={"SHaN DeWAGE"}
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#000"
                strokeColor="#ff0000"
                minFontSize={36}
              />
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
              I’m a full-stack designer crafting seamless UIs and clean code.
              This space is where design meets development — with a sprinkle of
              obsession for detail.
              <br />
              <br />
              Lately, I’ve been exploring new tools, refining ideas, and
              building things that (hopefully) don't break.
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
    </>
  );
};

export default Hero;
