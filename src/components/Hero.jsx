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
import DecryptedText from "../functions/DecryptedText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const tumbleweedRef = useRef(null);
  const gunRef = useRef(null);
  const bulletRef = useRef(null);

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

  useEffect(() => {
    const gun = gunRef.current;
    const bullet = bulletRef.current;

    if (!gun || !bullet) return;

    const tl = gsap.timeline({ repeat: -1, delay: 2, repeatDelay: 4 });

    // Gun recoil effect
    tl.to(gun, {
      rotate: -10,
      duration: 0.1,
      ease: "power1.inOut",
    })
      .to(gun, {
        rotate: 0,
        duration: 0.1,
        ease: "power1.out",
      })

      // Bullet appears and shoots right
      .set(bullet, { opacity: 1, x: 0 })
      .to(bullet, {
        x: "100vw",
        duration: 5,
        ease: "power2.inOut",
      })
      .set(bullet, { opacity: 0, x: 0 }); // reset bullet
  }, []);

  return (
    <>
      {/* {tumbleweedRefs.current.map((ref, index) => (
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
      ))} */}

      <div
        style={{
          height: "100vh",
          position: "absolute",
          width: "100%",
          // zIndex: -1,
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
        {/* <Box
          sx={{
            position: {
              xs: "absolute",
              sm: "absolute",
              md: "absolute",
              // lg: "fixed",
              // xl: "fixed",
            },
            top: "40%",
            // bottom: "50vh",
            right: { xs: -100, sm: 0, md: -300, lg: -300, xl: -400 },
            display: { xs: "none", sm: "none", md: "flex" },

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
        /> */}

        <Box
          sx={{
            // ...styles.heroContainer,
            // py: 4,
            position: "absolute",

            // bottom: 0,
            pt: { xs: 0, sm: 0, md: 16, lg: 16, xl: 16 },
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
                // 212224
                textShadow: `0px 2px 4px ${alpha(
                  theme.palette.text.titleMain,
                  0.4
                )}`,
                transform: "scaleY(1.5)",
              }}
            >
              {/* {"SHaN DeWAGE"} */}
              {/* <br /> */}
              {/* {"DeWAGE"}{" "} */}
              {"HI! I'M SHaNNNNN"}
              <Box
                component="span"
                sx={{
                  display: { xs: "none", sm: "none", md: "inline-block" },
                  fontSize: 13,
                  fontWeight: 300,
                  fontFamily: "'Roboto', serif",
                  letterSpacing: 2,
                  width: "200px",
                }}
              >
                <DecryptedText
                  text="I’m a full-stack designer crafting seamless UIs and clean code.
                This space is where design meets development — with a sprinkle
                of obsession for detail."
                  animateOn="view"
                  revealDirection="center"
                  speed={200}
                  maxIterations={10}
                />
                {/* I’m a full-stack designer crafting seamless UIs and clean code.
                This space is where design meets development — with a sprinkle
                of obsession for detail. */}
              </Box>{" "}
              <br />
              <Box
                component="span"
                sx={{
                  display: { xs: "none", sm: "none", md: "inline-block" },
                  fontSize: 13,
                  fontWeight: 300,
                  fontFamily: "'Roboto', serif",
                  letterSpacing: 2,
                  width: "150px",
                }}
              >
                <DecryptedText
                  text="Lately, I’ve been exploring new tools, refining ideas, and
                building things that (hopefully) don't break."
                  animateOn="view"
                  revealDirection="center"
                  speed={200}
                  maxIterations={10}
                />
                {/* Lately, I’ve been exploring new tools, refining ideas, and
                building things that (hopefully) don't break. */}
              </Box>{" "}
              {"UI/UX EnGINEER"}
            </Typography>
          </motion.h1>
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
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Typography sx={{ ...styles.footerCardTitle, mb: 2 }}>
              ©2025 BALROG
            </Typography>{" "}
          </motion.div>
        </Box>
        {/* <motion.div
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
        </motion.div> */}
      </Box>
    </>
  );
};

export default Hero;
