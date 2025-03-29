import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../assets/styles/BaseThemes";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // Initialize mode from localStorage or default to system preference
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      return savedMode;
    }
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  };

  const [mode, setMode] = useState(getInitialMode);

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  // Memoize the current theme based on the mode
  const currentTheme = useMemo(() => {
    return mode === "light" ? lightTheme : darkTheme;
  }, [mode]);

  // Update localStorage when mode changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
