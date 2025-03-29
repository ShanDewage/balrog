import { Height, Padding } from "@mui/icons-material";
import { px } from "framer-motion";

// Theme.js
export const themeStyles = (theme) => ({
  hamburgerIcon: {
    // backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    // height: "32px",
    // width: "32px",
    // borderRadius: 1,
    zIndex: 9999,
  },
  colorModeIcon: {
    // backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    // height: "32px",
    // width: "32px",
    // borderRadius: 1,
    zIndex: 9999,
  },

  hamburgerButtonIcon: { fontSize: "32px" },

  appbarContainer: {
    zIndex: 1000,
    // position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "transparent",
    // backgroundColor: theme.palette.background.default,
    mx: 6,
    // my: 2,
    height: "100%",
  },

  heroContainer: {
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "relative",
    overflow: "hidden",
    px: 8,
    display: "flex",
    flexDirection: "column",
    // py: 4,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  nameTitle: {
    // color: theme.palette.text.primary,
    fontSize: "32px",
    textAlign: "center",
  },

  sidebarContainer: {
    position: "fixed",
    top: "10%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // backgroundColor: theme.palette.background.default,
    right: "4%",
    // height: "100vh",
    overflowX: "hidden",
    transition: "height 0.5s ease, width 0.5s ease",
    zIndex: 1200,
  },

  sectionTitleBox: {
    // pt: 4,
    textAlign: "center",
    height: "100vh",
    alignContent: "center",
    backgroundColor: theme.palette.background.paper,
    // borderBottom: `1px solid ${theme.palette.text.titleMain}`,
  },

  sectionTitle: {
    ...theme.typography.sectionTitle,
    textAlign: "center",
    color: theme.palette.text.primary,
    // position: "absolute",
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
    // height: "100%",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "relative",
    px: 8,
  },

  sectionContainerSecondary: {
    // height: "100vh",
    // backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    position: "relative",
    // px: 8,
  },
  sectionBoxContainer: {
    height: "100vh",
    backgroundColor: theme.palette.background.default,
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
    // mt: 2,
    borderRight: `4px solid ${theme.palette.text.titleMain}`,
  },
  amGridColLeft: {
    maxHeight: "100%",
    minHeight: "70vh",
    // borderBottom: `1px solid ${theme.palette.text.titleMain}`,
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
    gap: 2,
  },
  amProfileImg: {
    // width: "100%",
    height: "60vh",
    maxWidth: "580px",
    borderRadius: 1,
    // boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    boxShadow: 2,
    objectFit: "contain",
  },

  magicFire: {
    position: "absolute",
    width: "20px",
    height: "20px",
    background: "orange", // Adjust color to look like fire
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    animation: "fireEffect 1s infinite",
  },

  // footer styles start
  footerContainer: {
    // width: "100%",
    py: 4, // Adjust padding for smaller screens
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    px: { xs: 2, sm: 8 },
  },

  footerCardContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    textTransform: "uppercase",
  },
  footerCard: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },

  footerCardTitle: {
    color: theme.palette.text.secondary,
    mb: 2,
    fontSize: theme.typography.body_xs,
  },

  footerCardText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.subTitle_sm,
  },

  contentScrollContainer: {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    right: "3%",
    marginTop: -14,
  },

  btnContentScroll: {},

  iconContentScroll: {},

  // footer styles end
});
