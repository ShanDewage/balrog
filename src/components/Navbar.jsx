import React, { useState, useEffect, useContext, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  useTheme,
  Box,
} from "@mui/material";
import { Link } from "react-scroll";
import { ThemeContext } from "../contexts/ThemeContext";
import { themeStyles } from "../assets/styles/Theme";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CodeIcon from "@mui/icons-material/Code";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PersonSearchTwoToneIcon from "@mui/icons-material/PersonSearchTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import TextType from "../functions/TextType";
import LayersTwoToneIcon from "@mui/icons-material/LayersTwoTone";
const menuData = [
  { label: "home", icon: <HomeTwoToneIcon /> },
  { label: "about me", icon: <PersonOutlineTwoToneIcon /> },
  { label: "experience", icon: <SchoolTwoToneIcon /> },
  { label: "works", icon: <WorkTwoToneIcon /> },
  { label: "tech stack", icon: <LayersTwoToneIcon /> },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

const Navbar = (props) => {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);
  const menuRef = useRef(null);

  // Toggle the visibility of the Navbar based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMenuItems([]);
      const itemTimeouts = [0, 300, 600, 900, 1200]; // Delay for each menu item
      itemTimeouts.forEach((timeout, index) => {
        setTimeout(() => {
          setMenuItems((prev) => [...prev, index]);
        }, timeout);
      });
    } else {
      setMenuItems([]);
    }
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on mouse hover outside
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isOpen && menuRef.current) {
        const { left, right, top, bottom } =
          menuRef.current.getBoundingClientRect();
        if (
          event.clientX < left - 20 ||
          event.clientX > right + 20 ||
          event.clientY < top - 200 ||
          event.clientY > bottom + 20
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            // backgroundColor: theme.palette.background.default,
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: 0,
            height: "10vh",
          }}
        >
          <Toolbar sx={{ ...styles.appbarContainer }}>
            <Typography
              sx={{
                ...styles.nameTitle,
                fontFamily: "'Anton SC',serif",
                fontSize: "20px",
              }}
            >
              {/* {"SHAN DEWAGE"} */}
              <TextType
                text={["SHAN", "DEWAGE"]}
                typingSpeed={175}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="</>"
                textColors
                loop={true}
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Theme Mode Radio Buttons */}

      <IconButton
        sx={{
          ...styles.colorModeIcon,
        }}
        onClick={() => toggleMode(mode === "light" ? "dark" : "light")}
      >
        {mode === "light" ? (
          <WbSunnyIcon sx={styles.hamburgerButtonIcon} />
        ) : (
          <NightlightRoundIcon sx={styles.hamburgerButtonIcon} />
        )}
      </IconButton>

      <IconButton sx={styles.hamburgerIcon} onClick={toggleNavbar}>
        {isOpen ? (
          <CodeOffIcon sx={styles.hamburgerButtonIcon} />
        ) : (
          <CodeIcon sx={styles.hamburgerButtonIcon} />
        )}
      </IconButton>

      {/* Transparent Sidebar */}

      {isOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 9,
          }}
          onClick={toggleNavbar}
        />
      )}
      <Box
        ref={menuRef}
        sx={{
          ...styles.sidebarContainer,
          width: isOpen ? "auto" : "0",
          height: isOpen ? "85vh" : 0,
        }}
      >
        <List sx={{ padding: 0 }}>
          {menuData.map((item, index) => (
            <ListItem
              button
              key={item.label}
              onClick={toggleNavbar}
              sx={{
                opacity: menuItems.includes(index) ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
                padding: "15px",
              }}
            >
              <Link
                to={item.label}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "32px", sm: "64px", md: "96px" },

                    fontWeight: 800, // Optional
                    color: theme.palette.text.primary,
                    // fontFamily: "'Major Mono Display',serif",
                    textTransform: "capitalize",
                    fontFamily: "'Anton SC',serif",
                  }}
                >
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </Typography>
                {React.cloneElement(item.icon, {
                  sx: {
                    fontSize: { xs: "32px", sm: "64px", md: "96px" },
                    fontWeight: "bold", // Optional
                    marginLeft: "10px",
                    color: theme.palette.text.primary,
                  },
                })}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Navbar;
