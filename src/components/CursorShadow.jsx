import { alpha, Box, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const CursorShadow = () => {
  const theme = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // const cursorStyles = {
  //   top: position.y - 0,
  //   left: position.x - 0,

  //   position: "fixed",
  //   borderRadius: "50%",
  //   opacity: "0.5",

  //   background: alpha(theme.palette.text.primary, 0.05),
  //   boxShadow: `
  //   0 0 200px 100px ${alpha(theme.palette.text.primary, 0.1)},
  //   0 0 300px 150px ${alpha(theme.palette.text.primary, 0.05)}
  // `,

  //   pointerEvents: "none",
  //   zIndex: 9999,
  //   transition: "transform 300ms ease",
  // };

  const cursorStyles = {
    top: position.y - 0,
    left: position.x - 0,

    // width: 20,
    // height: 20,
    position: "fixed",
    borderRadius: "50%",
    opacity: "0.5",

    background: alpha(theme.palette.text.primary, 0.05), // bright white center
    boxShadow: `
    0 0 200px 100px ${alpha("#87CEFA", 0.6)},  /* light blue aura */
    0 0 60px 20px ${alpha("#00FFFF", 0.3)},   /* soft cyan glow */
    0 0 120px 40px ${alpha("#ffffff", 0.2)}   /* outer white haze */
  `,

    pointerEvents: "none",
    zIndex: 9999,
    mixBlendMode: "screen", // makes it blend beautifully on dark backgrounds
    transition: "transform 100ms linear",
  };

  return (
    <Box
      sx={{
        top: position.y - 0,
        left: position.x - 0,

        // width: 20,
        // height: 20,
        position: "fixed",
        borderRadius: "50%",
        opacity: "0.5",

        background: alpha(theme.palette.text.primary, 0.05), // bright white center
        boxShadow: `
    0 0 200px 100px ${alpha("#87CEFA", 0.6)},  /* light blue aura */
    0 0 60px 20px ${alpha("#00FFFF", 0.3)},   /* soft cyan glow */
    0 0 120px 40px ${alpha("#ffffff", 0.2)}   /* outer white haze */
  `,

        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen", // makes it blend beautifully on dark backgrounds
        transition: "transform 100ms linear",
        display: {
          xs: "none", // hide on extra-small
          sm: "none", // hide on small
          md: "block", // show from medium and up (i.e. tablets in landscape, laptops, desktops)
        },
      }}
    />
  );
};

export default CursorShadow;
