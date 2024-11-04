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
function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Branding />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
