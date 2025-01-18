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
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <ThemeContextProvider>
      <Navbar />
      <Branding />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <About />
      <Projects />
      <Contact />
      <Footer />

      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: "fixed",
          top: 60,
          left: 0,
          right: 0,
          height: "5px",
          backgroundColor: "black",
          transformOrigin: "0%",
          zIndex: 10,
          backgroundColor: "#fff" /* Adjust to your theme color */,
          height: "5px",
        }}
      />
    </ThemeContextProvider>
  );
}

export default App;
