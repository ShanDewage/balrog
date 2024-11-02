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
function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ThemeContextProvider>
  );
}

export default App;
