import React, { useRef, useState } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

const languages = [
  { name: "CSS", logo: require("../assets/logos/AdobeXD.png") },
  { name: "Python", logo: require("../assets/logos/Css.png") },
  { name: "Python", logo: require("../assets/logos/Figma.png") },
  { name: "JavaScript", logo: require("../assets/logos/Firebase.png") },
  { name: "TypeScript", logo: require("../assets/logos/Html.png") },
  { name: "JavaScript", logo: require("../assets/logos/Javascript.png") },
  { name: "TypeScript", logo: require("../assets/logos/MUI.png") },
  { name: "HTML", logo: require("../assets/logos/Node.png") },
  { name: "HTML", logo: require("../assets/logos/React.png") },
  { name: "JavaScript", logo: require("../assets/logos/Tailwind.png") },
  { name: "JavaScript", logo: require("../assets/logos/Typescript.png") },
  { name: "CSS", logo: require("../assets/logos/Vue.png") },
];

function ProLanguages() {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const contentRef = useRef(null);

  // Scroll to content function
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      id="tech stack"
      ref={ref}
      sx={{
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        {" "}
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
            Tech Stack
          </Typography>{" "}
        </motion.h1>
        <Box
          sx={{
            ...styles.contentScrollContainer,
            right: { xs: "3%", sm: "2%", md: "1%" },
          }}
        >
          <motion.div
            animate={{
              y: [0, 200, 0],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
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
          </motion.div>
        </Box>
      </Box>
      <Box
        ref={contentRef}
        sx={{
          // ...styles.sectionTitleBox,

          textAlign: "center",
          height: { xs: "auto", sm: "100vh", md: "100vh" },
          alignContent: "center",
          backgroundColor: theme.palette.background.default,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)", // Max 4 in a row
          },
          rowGap: 12, // ✅ Adds vertical space between rows
          columnGap: 4,
          justifyItems: "center",
          alignItems: "center",
          px: 6,
            py: { xs: 4, sm: 4, md: 0, lg: 0, xl: 0 },

        }}
      >
        {languages.map((lang, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 120,
                textAlign: "center",
                transition: "transform 0.3s",

                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={lang.logo}
                alt={lang.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              {/* <Typography variant="subtitle2" sx={{ mt: 1 }}>
            {lang.name}
          </Typography> */}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default ProLanguages;
