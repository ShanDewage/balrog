// src/themes/baseThemes.js
import { createTheme } from "@mui/material/styles";

// Define common typography for classic and future 3D
const classicTypography = {
  fontFamily: "'Merriweather', 'Playfair Display', serif",
  h2: { fontSize: "2.2rem", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
};

const future3DTypography = {
  fontFamily: "'Space Grotesk', 'Orbitron', sans-serif",
  h2: { fontSize: "2.5rem", fontWeight: 700, textShadow: "2px 2px #000" },
  body1: { fontSize: "1.1rem", lineHeight: 1.8 },
};

// Define light theme variations
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c0c0c0" }, // Silver for a subtle, classic look
    background: { default: "#ffffff", paper: "#f5f5f5" },
  },
  typography: classicTypography,
});

export const lightClassic = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    primary: { main: "#F6F2E3" }, // SaddleBrown for vintage warmth
    secondary: { main: "#D2B48C" }, // Tan accent color
    background: {
      default: "#F6F2E3", // Beige for a classic vintage background
      paper: "#FFF8E1", // Light cream background for paper
    },
    text: { primary: "#333333", secondary: "#555555" },
  },
  typography: classicTypography,
});

export const lightFuture3D = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    primary: { main: "#6B8E23" }, // Olive green for a vintage modern look
    secondary: { main: "#FFDE00" }, // Bright gold accent
    background: { default: "#FFF3E0", paper: "#FFEBB4" }, // Soft pastel for light
    text: { primary: "#000000", secondary: "#3E3E3E" },
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
    primary: { main: "#AFAFAF" }, // Light gray for classic contrast
    background: { default: "#0F172A", paper: "#1E1E1E" },
  },
  typography: classicTypography,
});

export const darkClassic = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    primary: { main: "#3E2723" }, // Dark brown for a rich vintage feel
    secondary: { main: "#D7CCC8" }, // Light beige accent
    background: { default: "#0F172A", paper: "#3C3C3C" },
    text: { primary: "#E0E0E0", secondary: "#BDBDBD" },
  },
  typography: classicTypography,
});

export const darkFuture3D = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    primary: { main: "#BB86FC" }, // Vintage lavender
    secondary: { main: "#03DAC6" }, // Soft teal accent
    background: { default: "#121212", paper: "#212121" },
    text: { primary: "#FFFFFF", secondary: "#B0BEC5" },
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
