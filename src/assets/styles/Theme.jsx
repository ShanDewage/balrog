import { Height, Padding } from "@mui/icons-material";
import { px } from "framer-motion";

// Theme.js
export const themeStyles = (theme) => ({
  hamburgerIcon: {
    // backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    // height: "32px",
    // width: "32px",
    borderRadius: 1,
    zIndex: 9999,
  },

  appbarContainer: {
    zIndex: 1000,
    // position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "transparent",
    // backgroundColor: theme.palette.background.default,
    mx: 6,
    my: 2,
    height: "100%",
  },

  heroContainer: {
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "relative",
    overflow: "hidden",
    px: 8,
    // py: 4,
    alignContent: "flex-end",
  },

  nameTitle: { color: theme.palette.text.primary, fontSize: "32px" },

  sidebarContainer: {
    position: "fixed",
    top: "15%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    right: "4%",
    // height: "100vh",
    overflowX: "hidden",
    transition: "height 0.5s ease, width 0.5s ease",
    zIndex: 1200,
  },

  sectionTitleBox: {
    pt: 4,
    borderBottom: `1px solid ${theme.palette.text.titleMain}`,
  },

  sectionTitle: {
    ...theme.typography.sectionTitle,
    textAlign: "center",
    color: theme.palette.text.titleMain,
  },

  sectionTitleSpan1: {
    typography: theme.typography.sectionSpan,
    fontStyle: "italic",
  },
  sectionTitleSpan2: {
    typography: theme.typography.sectionSpan,
    pb: 2,
    fontStyle: "italic",
  },

  sectionContainerPrimary: {
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "relative",
    px: 8,
  },

  sectionContainerSecondary: {
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    position: "relative",
    px: 8,
  },

  sgCenter: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  contactGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.fade1,
    boxShadow: 2,
  },

  amGridContainer: {
    mt: 2,
    borderRight: `4px solid ${theme.palette.text.titleMain}`,
  },
  amGridColLeft: {
    maxHeight: "100%",
    minHeight: "70vh",
    borderBottom: `1px solid ${theme.palette.text.titleMain}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  amGridColRight: {
    maxHeight: "100%",
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
  },
  amProfileImg: {
    width: "100%",
    height: "60vh",
    maxWidth: "400px",
    borderRadius: 1,
    // boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    boxShadow: 2,
    objectFit: "cover",
  },
});
