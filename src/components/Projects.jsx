import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  Card,
  CardMedia,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ProjectsData from "../projects/ProjectsData";
import { themeStyles } from "../assets/styles/Theme";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Projects = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const contentRef = useRef(null);

  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject((prev) =>
      prev === 0 ? ProjectsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProject((prev) =>
      prev === ProjectsData.length - 1 ? 0 : prev + 1
    );
  };

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
        // ...styles.sectionContainerSecondary,
        overflow: "hidden",
        // pb: 2,
      }}
    >
      {/* Section Title */}
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
            Works
          </Typography>
        </motion.h1>

        <Box
          sx={{
            ...styles.contentScrollContainer,
            right: "22%",
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
        </Box>
      </Box>

      <Box
        ref={contentRef}
        sx={{
          ...styles.sectionBoxContainer,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Project Image */}
        <CardMedia
          component="img"
          image={ProjectsData[currentProject].image}
          alt={ProjectsData[currentProject].title}
          sx={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            borderRadius: 1,
            boxShadow: 3,
            // mt: 4,
          }}
        />

        {/* Project Details */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "30%",
            transform: "translateX(-50%)",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            p: 4,

            width: "40%",
            zIndex: 10000,
          }}
        >
          <Typography variant="worksTitle" sx={{ color: "white" }}>
            {ProjectsData[currentProject].title}
          </Typography>
          <Typography variant="worksDesc" sx={{ mt: 2, color: "white" }}>
            {ProjectsData[currentProject].description}
          </Typography>
          {/* <Button
          variant="contained"
          href={ProjectsData[currentProject].link}
          target="_blank"
          sx={{
            mt: 4,
            px: 4,
            py: 2,

            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "gray.200",
            },
          }}
        >
          See More
        </Button> */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,

              justifyContent: "center",
            }}
          >
            {ProjectsData[currentProject].tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                variant="outlined"
                size="small"
                sx={{ p: 1, borderColor: "white" }}
              />
            ))}
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
            zIndex: 10000,
          }}
        >
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={handlePrev}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={handleNext}
          >
            <ArrowForward />
          </IconButton>
        </Box>

        {/* Project Thumbnails */}
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            // transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
          }}
        >
          {ProjectsData.map((project, index) => (
            <Card
              key={project.id}
              onClick={() => setCurrentProject(index)}
              sx={{
                width: 240,
                height: 240,
                borderRadius: 1,
                boxShadow: 3,
                overflow: "hidden",
                cursor: "pointer",
                border:
                  currentProject === index
                    ? `4px solid ${theme.palette.primary.main}`
                    : "none",
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
