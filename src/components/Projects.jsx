import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";
import ProjectsData from "../projects/ProjectsData";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const [hoveredProject, setHoveredProject] = useState(ProjectsData[0]);

  return (
    <Box
      id="works"
      sx={{
        ...styles.sectionContainerSecondary,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        {/* <Typography sx={{ ...styles.sectionTitleSpan1 }}>{"</h1>"}</Typography> */}
        <Typography
          variant="sectionTitle"
          sx={{
            ...styles.sectionTitle,
          }}
        >
          Works
        </Typography>
        {/* <Typography sx={{ ...styles.sectionTitleSpan2 }}>{"</h1>"}</Typography> */}
      </Box>

      {/* Grid Layout: Image (Left) | Project List (Right) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          flex: 1,
          overflow: "hidden",
          py: 6,
        }}
      >
        {/* Left Side: Display Current Project Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={hoveredProject.image}
            alt={hoveredProject.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        {/* Right Side: Project List */}
        <Box
          sx={{
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            // py: 2,
            pr: 1,
          }}
        >
          {ProjectsData.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project)}
              whileHover={{ scale: 1, x: 0, transition: { duration: 0.3 } }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              initial={{ opacity: 0, x: 20 }}
            >
              <CardContent
                sx={{
                  p: 2,
                  // borderRadius: 2,
                  // bgcolor: "background.paper",
                  cursor: "pointer",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",

                  alignItems: "flex-start",
                  "&:hover": {
                    bgcolor: theme.palette.background.fade1,
                    boxShadow: 2,
                    borderRadius: 1,
                    borderRight: `4px solid ${theme.palette.text.titleMain}`,
                  },
                }}
              >
                <Typography variant="worksTitle">{project.title}</Typography>
                <Typography variant="worksDesc" color="text.secondary">
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {project.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{ p: 2 }}
                    />
                  ))}
                </Box>
                <Button href={project.link} target="_blank" sx={{ mt: 1 }}>
                  View Project
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default Projects;
