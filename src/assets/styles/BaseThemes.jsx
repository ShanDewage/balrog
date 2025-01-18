import { createTheme } from "@mui/material/styles";

// Define typography for light and dark themes
const lightTypography = {
  fontFamily: "'Merriweather', 'Playfair Display', serif",
  h2: { fontSize: "2.2rem", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
};

const darkTypography = {
  fontFamily: "'Space Grotesk', 'Orbitron', sans-serif",
  h2: { fontSize: "2.5rem", fontWeight: 700, textShadow: "2px 2px #000" },
  body1: { fontSize: "1.1rem", lineHeight: 1.8 },
};

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c0c0c0" }, // Silver for subtle light theme
    background: { default: "#ffffff", paper: "#f5f5f5" },
    text: { primary: "#333333", secondary: "#555555" },
  },
  typography: lightTypography,
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#AFAFAF" }, 
    background: { default: "#0F172A", paper: "#1E1E1E" },
    text: { primary: "#E0E0E0", secondary: "#BDBDBD" },
  },
  typography: darkTypography,
});
