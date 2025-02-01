import React, { useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { themeStyles } from "../assets/styles/Theme";
import aboutme from "../assets/images/aboutme.jpg";
import Grid from "@mui/material/Grid2";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const About = () => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150); // Adjust as needed

  return (
    <Box
      id="about me"
      ref={ref}
      sx={{
        ...styles.sectionContainerSecondary,
      }}
    >
      <Box
        sx={{
          ...styles.sectionTitleBox,
        }}
      >
        <Typography sx={{ ...styles.sectionTitleSpan1 }}>{"</h1>"}</Typography>
        <Typography
          variant="sectionTitle"
          sx={{
            ...styles.sectionTitle,
          }}
        >
          About Me
        </Typography>
        <Typography sx={{ ...styles.sectionTitleSpan2 }}>{"</h1>"}</Typography>
      </Box>

      <Grid container spacing={2} sx={styles.amGridContainer}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
          sx={styles.amGridColLeft}
        >
          <Box
            component={motion.img}
            src={aboutme} // Adjust the path accordingly
            alt="Profile Image"
            sx={styles.amProfileImg}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
          sx={styles.amGridColRight}
        >
          <Typography sx={{ ...styles.sectionTitleSpan1 }}>
            {"</h1>"}
          </Typography>{" "}
          <Box pr={2}>
            <Typography variant="contentPara" paragraph>
              Hello, I’m [Your Name], also known as [Preferred Nickname]. I’m a
              UI/UX Designer and Front-End Developer passionate about creating
              user-friendly and visually appealing designs. My approach combines
              empathy for users with technical expertise to deliver functional
              and beautiful interfaces.
            </Typography>
            <Typography variant="contentPara" paragraph>
              With 1 year of industry experience and 1-2 years of freelancing,
              I’ve learned that great design isn’t just about looks—it’s about
              usability and meeting both user and stakeholder needs. I focus on
              blending design and development to ensure aesthetics and
              functionality work seamlessly together.
            </Typography>
            <Typography variant="contentPara">
              I’m 27, based in [City/Country], and hold a [Degree] in [Field].
              My journey into design and development is driven by curiosity and
              a desire to improve experiences, one pixel at a time.
            </Typography>
          </Box>
          <Typography sx={{ ...styles.sectionTitleSpan1 }}>
            {"</h1>"}
          </Typography>
        </Grid>
      </Grid>
      {/* <motion.div style={{ y }}>
        <Box textAlign="center">
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.primary }}
          >
            This is the about section where you can introduce yourself.
          </Typography>
        </Box>
      </motion.div> */}
    </Box>
  );
};

export default About;
