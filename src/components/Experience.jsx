import React, { useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  alpha,
  Chip,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import mapImage from "../assets/images/04.jpg"; // Replace with your actual image path
import { themeStyles } from "../assets/styles/Theme";
import { ArrowDownward } from "@mui/icons-material";
import ExperienceData from "../projects/ExperienceData";
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
            right: { xs: "3%", sm: "2%", md: "1%" },
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
          // ...styles.sectionBoxContainer,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          position: "relative",
          px: { xs: 1, sm: 1, md: 8 },
          py: { xs: 6, sm: 8 },
          // width: "100%",
        }}
      >
        {/* This is Content */}
        <Box
          id="content"
          sx={{
            // padding: "2rem",
            padding: { xs: 0, sm: 0, md: 4 },

            borderRadius: "8px",
            gap: 4,
            flexDirection: "column",
            display: "flex",
          }}
        >
          {ExperienceData.map((experience) => (
            <Box
              key={experience.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem",
                // padding: { xs: 2, sm: 2, md: 2 },
                gap: 1,

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",

                  boxShadow: `
               
                      0px 1px 8px ${alpha(theme.palette.text.secondary, 0.2)}  
                    `,
                  backgroundColor: theme.palette.background.paper, // Optional: subtle bg on hover
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#a0aec0",
                    fontSize: { xs: "16px", sm: "16px", md: "16px" },
                  }}
                >
                  {experience.period}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Typography
                  variant="worksTitle"
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: { xs: "24px", sm: "24px", md: "24px" },
                  }}
                >
                  {experience.title}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Typography
                  variant="worksDesc"
                  textAlign={"justify"}
                  sx={{ mb: 2, color: theme.palette.text.primary }}
                  paragraph
                >
                  {experience.description}
                </Typography>
              </motion.div>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",

                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
              >
                {experience.tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 0 }}
                    // animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      sx={{
                        // backgroundColor: theme.palette.text.titleSecondary,
                        // padding: "0.5rem 1rem",
                        // borderRadius: "9999px",
                        // color: "#fff",
                        // boxShadow: 1,

                        backgroundColor: theme.palette.text.titleSecondary,
                        padding: 1,
                        color: "#fff",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                        fontFamily: "'Roboto', serif",

                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
