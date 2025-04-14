import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-scroll";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ThemeContextProvider from "./contexts/ThemeContext";
import Branding from "./components/Branding";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import Experience from "./components/Experience";
import { ThemeContext } from "./contexts/ThemeContext";
import ListIcon from "@mui/icons-material/List";
import { themeStyles } from "./assets/styles/Theme";
import { useTheme, useScrollTrigger } from "@mui/material";
import UsePageProtection from "./hooks/UsePageProtection";
import CursorShadow from "./components/CursorShadow";

function App() {
  // UsePageProtection();
  const theme = useTheme();
  const styles = themeStyles(theme);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <ThemeContextProvider>
      <CursorShadow />
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: "fixed",
          // top: trigger ? 0 : "10vh",
          bottom: 0,

          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#a0aec0",
          // backgroundColor:  theme.palette.text.primary ,
          transformOrigin: "0%",
          zIndex: 10000,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
