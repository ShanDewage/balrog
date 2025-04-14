import React, { useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  CardMedia,
  IconButton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import ProjectsData from "../projects/ProjectsData";
import { themeStyles } from "../assets/styles/Theme";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

const Projects = () => {
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
      id="works"
      ref={ref}
      sx={{
        overflow: "hidden",
      }}
    >
      {/* Section Title */}
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
            Works
          </Typography>{" "}
        </motion.h1>
        <Box
          sx={{
            ...styles.contentScrollContainer,
            right: { xs: "18%", sm: "20%", md: "20%" },
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
          // height: "100vh",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          position: "relative",

          px: { xs: 1, sm: 1, md: 8 },

          py: 8,
          // overflow: "auto",
        }}
      >
        {ProjectsData.map((project, index) => (
          <Box
            key={project.id}
            sx={{
              position: "relative",
              display: "flex",

              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: { xs: "auto", md: "80vh" },
              mb: 4,
            }}
          >
            {/* Background Image */}
            <motion.div
              initial={{ opacity: 0 }}
              // animate={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.1,
                  zIndex: 1,
                }}
              />
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              // animate={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                // width: "50%",
                height: "100%",
                zIndex: 2,

                width: { xs: "100%", sm: "100%", md: "50%" },
                // height: "auto",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  // width: { xs: "100%", md: "50%" },
                  // height: { xs: "auto", md: "50%" },
                  p: { xs: 0, sm: 0, md: 4 },

                  width: { xs: "100%", sm: "100%", md: "100%" }, // Width adjustments for different screen sizes
                  height: { xs: "auto", sm: "auto", md: "50%" },
                  objectFit: "contain",
                  borderRadius: 1,
                  // boxShadow: 3,
                  zIndex: 2,
                }}
              />
            </motion.div>

            {/* Project Details */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "50%" },
                p: 4,
                textAlign: {
                  xs: "center",
                  md: index % 2 === 0 ? "left" : "left",
                },
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Typography
                  variant="worksTitle"
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: { xs: "32px", sm: "64px", md: "64px" },
                  }}
                >
                  {project.title}
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
                  paragraph
                  sx={{
                    mt: 2,
                    color: theme.palette.text.primary,
                    px: { xs: 2, sm: 4, md: 0 },
                  }}
                >
                  {project.description}
                </Typography>
              </motion.div>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: {
                    xs: "center",
                    md: index % 2 === 0 ? "flex-start" : "flex-start",
                  },
                }}
              >
                {project.tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                      // size="small"
                      sx={{
                        // p: 1,
                        // borderColor: theme.palette.background.label,
                        // color: theme.palette.text.titleSecondary,
                        // background: theme.palette.background.label,

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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
