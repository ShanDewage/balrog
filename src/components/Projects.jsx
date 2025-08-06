import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  CardMedia,
  IconButton,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import ProjectsData from "../projects/ProjectsData";
import { themeStyles } from "../assets/styles/Theme";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import Grid from "@mui/material/Grid2";

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

  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
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
            right: { xs: "19%", sm: "20%", md: "20%" },
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
          // ...styles.sectionBoxContainer,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          // position: "relative",
          justifyContent: "center",
          px: { xs: 1, sm: 1, md: 8 },
          gap: 14,
          // py: 8,
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
                // md: index % 2 === 0 ? "row" : "row-reverse",
              },
              alignItems: "center",
              // alignContent: "center",
              justifyContent: "center",
              width: "100%",
              height: { xs: "auto", md: "100vh" },
              // mb: 4,
            }}
          >
            {/* Background Image */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <CardMedia
                component="img"
                image={project.images[0]}
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
                  pointerEvents: "none",
                }}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div> */}

            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                {/* Project Image 1 */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    // height: "100%",
                    zIndex: 2,

                    // width: { xs: "100%", sm: "100%", md: "100%" },

                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.images[0]}
                    alt={project.title}
                    sx={{
                      // p: { xs: 0, sm: 0, md: 4 },
                      width: { xs: "100%", sm: "100%", md: "75%" }, // Width adjustments for different screen sizes
                      height: { xs: "auto", sm: "auto", md: "320px" },
                      objectFit: "cover",
                      borderRadius: 1,
                      zIndex: 2,
                      pointerEvents: "none",
                      display: { xs: "none", sm: "none", md: "flex" },
                    }}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </motion.div>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                {/* Project Details */}
                <Box
                  sx={{
                    // position: "relative",
                    width: { xs: "100%", md: "100%" },
                    // p: 4,
                    textAlign: {
                      xs: "center",
                      // md: index % 2 === 0 ? "left" : "left",
                    },
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <Typography
                      variant="worksTitle"
                      sx={{
                        color: theme.palette.text.primary,
                        fontSize: { xs: "32px", sm: "32px", md: "36px" },
                      }}
                    >
                      {project.title}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Typography
                      variant="worksDesc"
                      textAlign={"justify"}
                      paragraph
                      sx={{
                        // mt: 2,
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
                        // md: index % 2 === 0 ? "flex-start" : "flex-start",
                      },
                    }}
                  >
                    {project.tags.map((tag, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
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
                          sx={{
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
                  <Button
                    onClick={() => handleOpenModal(project)}
                    sx={{
                      fontWeight: 400,
                      px: 2,
                      border: `1px solid ${theme.palette.primary.main}`,
                      // borderRadius: "999px",
                      textTransform: "capitalize",
                      color: theme.palette.primary.main,
                      // width: "50%",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: theme.palette.text.primary,
                        color: theme.palette.background.default,
                      },
                    }}
                  >
                    Project Details
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                {/* Project Image 2 */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    // height: "100%",
                    zIndex: 2,

                    // width: { xs: "100%", sm: "100%", md: "100%" },

                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project?.images[1]}
                    alt={project.title}
                    sx={{
                      // p: { xs: 0, sm: 0, md: 4 },
                      width: { xs: "100%", sm: "100%", md: "75%" }, // Width adjustments for different screen sizes
                      height: { xs: "auto", sm: "auto", md: "320px" },
                      objectFit: "cover",
                      borderRadius: 1,
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>{selectedProject.title}</DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Typography
                    variant="subTitle_sm"
                    textAlign={"justify"}
                    paragraph
                    sx={{
                      color: theme.palette.text.secondary,
                      width: { xs: "100%", sm: "100%", md: "70%" },
                      fontWeight: 400,
                      letterSpacing: 1,
                    }}
                  >
                    {selectedProject?.description}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    <Typography
                      variant="body_xs"
                      sx={{
                        color: theme.palette.text.secondary,
                      }}
                    >
                      Technologies I Use
                    </Typography>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      {selectedProject.tags.map((tag, index) => (
                        <li key={index}>
                          <Typography variant="subTitle_sm">{tag}</Typography>
                        </li>
                      ))}
                    </ul>

                    {/* Year */}
                    {selectedProject.year && (
                      <>
                        <Typography
                          variant="body_xs"
                          sx={{ mt: 3, color: theme.palette.text.secondary }}
                        >
                          YEAR
                        </Typography>
                        <Typography variant="subTitle_sm">
                          {selectedProject.year}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      justifyContent: "center",
                      marginBottom: 2,
                    }}
                  >
                    {selectedProject.images.map((imgSrc, idx) => (
                      <Box
                        key={idx}
                        component="img"
                        src={imgSrc}
                        alt={`${selectedProject.title} ${idx + 1}`}
                        // sx={{
                        //   width: { xs: "100%", sm: "48%", md: "32%" },
                        //   borderRadius: 2,
                        //   boxShadow: 3,
                        // }}
                        sx={{
                          // p: { xs: 0, sm: 0, md: 4 },
                          width: { xs: "100%", sm: "100%", md: "180px" },
                          height: { xs: "auto", sm: "auto", md: "180px" },
                          objectFit: "cover",
                          borderRadius: 1,
                          pointerEvents: "none",
                          boxShadow: 3,
                        }}
                        draggable="false"
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
