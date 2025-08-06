// Theme.js
export const themeStyles = (theme) => ({
  hamburgerIcon: {
    color: theme.palette.text.primary,
    zIndex: 9999,
    position: "fixed",
    top: "16px",
    right: { xs: "8px", sm: "8px", md: "64px" },
  },
  colorModeIcon: {
    color: theme.palette.text.secondary,
    position: "fixed",
    top: "16px",
    right: { xs: "50px", sm: "64px", md: "120px" },
    display: "flex",
    alignItems: "center",
    // gap: "10px",
    zIndex: 9999,
  },

  hamburgerButtonIcon: { fontSize: "24px" },

  appbarContainer: {
    zIndex: 1000,
    // position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "transparent",
    // backgroundColor: theme.palette.background.default,
    mx: { xs: 2, sm: 2, md: 6 },

    // my: 2,
    height: "100%",
  },

  heroContainer: {
    height: { xs: "100vh", sm: "100vh", md: "100vh" },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "relative",
    overflow: "hidden",
    // px: 2,
    px: { xs: 2, sm: 2, md: 6 },

    // px: { xs: 2, sm: 4, md: 8, lg: 8, xl: 8 },

    display: "flex",
    flexDirection: "column",
    // py: 4,
    // pl: { xs: "auto", sm: 4, md: 50, lg: 50, xl: 50 },

    alignContent: "center",
    alignItems: {
      xs: "center",
      sm: "center",
      md: "flex-start",
      // lg: "flex-start",
      // xl: "flex-start",
    },
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "flex-start",
      // lg: "flex-start",
      // xl: "flex-start",
    },

    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
      xl: "left",
    },
  },

  heroTitle: {
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      // lg: "left",
      // xl: "left",
    },

    fontSize: { xs: "56px", sm: "96px", md: "128px" },
    // fontFamily: "'Permanent Marker', cursive",
    color: theme.palette.text.titleMain,
    fontFamily: "'Anton SC',serif",
    fontWeight: 800,
    fontStyle: "normal",
    letterSpacing: { xs: "12px", sm: "24px", md: "24px" },
    // textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
    // transform: "rotate(-2deg)",
    // color: "transparent",

    // Add text stroke
    // WebkitTextStroke: `2px ${theme.palette.text.titleMain}`,
    // textStroke: `2px ${theme.palette.text.titleMain}`,
  },

  heroTagLine: {
    textAlign: "left",
    // color: theme.palette.text.titleMain,
    fontSize: "16px",
    fontFamily: "'Economica', serif",

    mt: 0,
    textTransform: "capitalize",
    letterSpacing: "2px",
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
    // height: "100vh",
    height: { xs: "auto", sm: "100vh", md: "100vh" },
    alignContent: "center",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    // height: "100vh",
    height: { xs: "auto", sm: "100vh", md: "100vh" },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: "relative",
    px: { xs: 1, sm: 1, md: 8 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
    borderRight: {
      xs: "none",
      sm: "none",
      md: `4px solid ${theme.palette.text.titleMain}`,
    },
    // borderRight: `4px solid ${theme.palette.text.titleMain}`,
  },
  amGridColLeft: {
    maxHeight: "100%",
    minHeight: {
      xs: "40vh",
      sm: "40vh",
      md: "70vh",
      lg: "70vh",
      xl: "70vh",
    },
    // borderBottom: `1px solid ${theme.palette.text.titleMain}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  amGridColRight: {
    maxHeight: "100%",
    minHeight: {
      xs: "40vh",
      sm: "40vh",
      md: "70vh",
      lg: "70vh",
      xl: "70vh",
    },
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: {
      xs: "flex-start",
      sm: "flex-start",
      md: "center",
      lg: "center",
      xl: "center",
    },
    gap: 2,
  },

  amGridDesc: {
    color: theme.palette.text.secondary,
    pr: { xs: 2, sm: 4, md: 10 },
    // px: { xs: 2, sm: 4, md: 0 },
    pl: { xs: 2, sm: 4, md: 0 },
  },

  amGridIcons: {
    display: "flex",
    justifyContent: { xs: "center", sm: "center", md: "left" },
    "& a": {
      color: "#333",
      fontSize: "2rem",
      // spacing: 4,
      margin: theme.spacing(0, 1),
    },
    mb: { xs: 2, sm: 2, md: 0 },
  },
  amProfileImg: {
    // width: "100%",
    height: {
      xs: "50vh",
      sm: "50vh",
      md: "60vh",
      lg: "60vh",
      xl: "60vh",
    },
    maxWidth: { xs: "100%", sm: "100%", md: "580px" },
    // maxWidth: "580px",
    borderRadius: 1,
    // boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    boxShadow: { xs: 0, sm: 0, md: 2, lg: 2, xl: 2 },

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
    px: { xs: 2, sm: 8, md: 8 },
  },

  footerCardContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row" },
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
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  footerCardText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.subTitle_sm,
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  footerSocialLinkText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.subTitle_sm,
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  contentScrollContainer: {
    display: { xs: "none", sm: "none", md: "flex" },

    justifyContent: "flex-end",
    position: "absolute",
    right: "5%",
    marginTop: { xs: -8, sm: -14, md: -20 },
  },

  btnContentScroll: {},

  iconContentScroll: {
    width: 56,
    height: 56,
  },

  // footer styles end
});
