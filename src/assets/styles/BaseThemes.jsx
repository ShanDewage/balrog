import { alpha, createTheme } from "@mui/material/styles";

// Define typography for light and dark themes
const baseTypography = {
  fontFamily: "'Anton SC',serif",
  h2: { fontSize: "2.2rem", fontWeight: 500 },
  h3: {
    fontSize: "64px",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: 1.2,
  },

  body1: { fontSize: "1rem", lineHeight: 1.6 },
  sectionTitle: {
    fontSize: { xs: "4rem", sm: "4rem", md: "20rem" },
    // fontFamily: "'Nosifer', serif",
    fontFamily: "'Anton SC',serif",
    // fontFamily: "'Major Mono Display',serif",
    lineHeight: 1.6,
    // fontWeight: 800,
  },
  sectionSpan: {
    fontSize: "0.75rem",
    lineHeight: 1.6,
    // fontFamily: "'Major Mono Display',serif",
    fontFamily: "'Economica', serif",
  },

  contentPara: {
    // fontSize: "1.25rem",
    fontSize: "1rem",
    lineHeight: 1.6,
    fontFamily: "'Roboto', serif",

    // fontFamily: "'Major Mono Display',serif",
    // fontFamily: "'Economica', serif",
  },

  worksTitle: {
    // fontSize: "4rem",
    fontSize: "64px",

    lineHeight: 1.6,
    fontWeight: 500,
    fontFamily: "'Anton SC', serif",
    textTransform: "uppercase",
  },

  worksDesc: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
    fontWeight: 300,
    fontFamily: "'Roboto', serif",
  },

  body_xs: {
    fontSize: "0.75rem",
    lineHeight: 1.6,
    fontWeight: 400,
    fontFamily: "'Roboto', serif",
  },

  body_sm: {
    // fontSize: "0.875rem",
    fontSize: "1rem",
    lineHeight: 1.6,
    fontWeight: 300,
    fontFamily: "'Roboto', serif",
  },

  body_md: {
    fontSize: "1rem",
    lineHeight: 1.6,
    fontWeight: 400,
    fontFamily: "'Roboto', serif",
  },

  subTitle_xs: {
    fontSize: "0.75rem",
    lineHeight: 1.6,
    fontWeight: 800,
    fontFamily: "'Roboto', serif",
  },

  subTitle_sm: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
    fontWeight: 500,
    fontFamily: "'Roboto', serif",
  },

  subTitle_md: {
    fontSize: "1rem",
    lineHeight: 1.6,
    fontWeight: 800,
    fontFamily: "'Roboto', serif",
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
      label: "#FFFEFD",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
      titleMain: "#1A1E23",
      titleSecondary: "#FD8127",
    },
  },
  typography: baseTypography,
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#AFAFAF" },
    background: {
      // default: "#0F172A",
      // paper: "#151B2B",
      default: "#0F0F0F",
      paper: "#0C0C0C",
      fade1: alpha("#FFFFFF", 0.1),
      label: "#060606",

      //  #030f0f
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#BDBDBD",
      titleMain: "#FD8127",
      titleSecondary: "#FD8127",
    },
    // FD8127  fire color
  },
  typography: baseTypography,
});
