// src/themes/baseThemes.js
import { createTheme } from "@mui/material/styles";

// Define common typography for classic and future 3D
const classicTypography = {
  fontFamily: "Georgia, serif",
  h2: { fontSize: "2.2rem", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
};

const future3DTypography = {
  fontFamily: "'Roboto', sans-serif",
  h2: { fontSize: "2.5rem", fontWeight: 700, textShadow: "2px 2px #000" },
  body1: { fontSize: "1.1rem", lineHeight: 1.8 },
};

// Define light theme variations
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#ffffff", paper: "#f4f4f4" },
  },
  typography: classicTypography,
});

export const lightClassic = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    primary: { main: "#6b8e23" }, // Olive green classic tone
    secondary: { main: "#d2b48c" }, // Tan accent color
    background: { default: "#fffaf0", paper: "#f5f5dc" }, // Ivory background
    text: { primary: "#333", secondary: "#555" },
  },
  typography: classicTypography,
});

export const lightFuture3D = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    primary: { main: "#0d47a1" }, // Deep blue for modern look
    secondary: { main: "#ff6f00" }, // Vivid orange accent
    background: { default: "#e3f2fd", paper: "#f3e5f5" }, // Light blue & purple
    text: { primary: "#000", secondary: "#3e3e3e" },
  },
  typography: future3DTypography,
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
          transform: "translateZ(0)",
        },
      },
    },
  },
});

// Define dark theme variations
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212", paper: "#1d1d1d" },
  },
  typography: classicTypography,
});

export const darkClassic = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    primary: { main: "#8b4513" }, // SaddleBrown classic tone
    secondary: { main: "#deb887" }, // BurlyWood accent color
    background: { default: "#2e2e2e", paper: "#3e3e3e" },
    text: { primary: "#e0e0e0", secondary: "#a9a9a9" },
  },
  typography: classicTypography,
});

export const darkFuture3D = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    primary: { main: "#bb86fc" }, // Neon purple
    secondary: { main: "#03dac6" }, // Aquamarine accent
    background: { default: "#121212", paper: "#212121" },
    text: { primary: "#ffffff", secondary: "#b0bec5" },
  },
  typography: future3DTypography,
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.1)",
          transform: "translateZ(0) scale(1.02)",
        },
      },
    },
  },
});
