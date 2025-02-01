import { alpha, createTheme } from "@mui/material/styles";

// Define typography for light and dark themes
const baseTypography = {
  fontFamily: "'Anton SC',serif",
  h2: { fontSize: "2.2rem", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
  sectionTitle: {
    fontSize: "3rem",
    // fontFamily: "'Nosifer', serif",
    fontFamily: "'Anton SC',serif",
    // fontFamily: "'Major Mono Display',serif",
    lineHeight: 1.6,
    // fontWeight: 800,
  },
  sectionSpan: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
    // fontFamily: "'Major Mono Display',serif",
    fontFamily: "'Economica', serif",
  },

  contentPara: {
    fontSize: "1.25rem",
    lineHeight: 1.6,
    // fontFamily: "'Major Mono Display',serif",
    fontFamily: "'Economica', serif",
  },
};

// const darkTypography = {
//   fontFamily: "'Anton SC',serif",
//   h2: { fontSize: "2.5rem", fontWeight: 700, textShadow: "2px 2px #000" },
//   body1: { fontSize: "1.1rem", lineHeight: 1.8 },
//   sectionTitle: { fontSize: "4rem", lineHeight: 1.6 },
// };

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c0c0c0" }, // Silver for subtle light theme
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
      fade1: alpha("#0A0A0A", 0.1),
    },
    text: { primary: "#333333", secondary: "#555555", titleMain: "#1A1E23" },
  },
  typography: baseTypography,
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#AFAFAF" },
    background: {
      default: "#0F172A",
      paper: "#1A1E23",
      fade1: alpha("#FFFFFF", 0.1),
    },
    text: { primary: "#E0E0E0", secondary: "#BDBDBD", titleMain: "#FEBC00" },
    // FD8127  fire color
  },
  typography: baseTypography,
});
