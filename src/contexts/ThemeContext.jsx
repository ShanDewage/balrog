import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  lightClassic,
  darkClassic,
  lightFuture3D,
  darkFuture3D,
} from "../assets/styles/BaseThemes";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [subMode, setSubMode] = useState("classic");

  const toggleMode = (newMode) => {
    setMode(newMode);
    setSubMode("classic"); // Reset to classic whenever the mode is toggled
  };

  const toggleSubMode = (newSubMode) => {
    setSubMode(newSubMode);
  };

  const currentTheme = useMemo(() => {
    if (mode === "light") {
      return subMode === "classic" ? lightClassic : lightFuture3D;
    } else {
      return subMode === "classic" ? darkClassic : darkFuture3D;
    }
  }, [mode, subMode]);

  return (
    <ThemeContext.Provider value={{ mode, subMode, toggleMode, toggleSubMode }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
