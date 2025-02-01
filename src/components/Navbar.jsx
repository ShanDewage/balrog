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
const menuData = [
  { label: "home", icon: <HomeTwoToneIcon /> },
  { label: "about me", icon: <PersonOutlineTwoToneIcon /> },
  { label: "experience", icon: <SchoolTwoToneIcon /> },
  { label: "works", icon: <WorkTwoToneIcon /> },
  { label: "contact me", icon: <PersonSearchTwoToneIcon /> },
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
            backgroundColor: theme.palette.background.default,
            // backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: 0,
            height: "15vh",
          }}
        >
          <Toolbar sx={{ ...styles.appbarContainer }}>
            <Typography
              sx={{
                ...styles.nameTitle,
                fontFamily: "'Major Mono Display',serif",
              }}
            >
              {"<SHAN DEWAGE/>"}
            </Typography>
            <IconButton sx={{ ...styles.hamburgerIcon }} onClick={toggleNavbar}>
              {isOpen ? <CodeOffIcon /> : <CodeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* Transparent Sidebar */}
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
                    fontSize: "96px", // Your desired font size
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
                    fontSize: "64px", // Your desired font size
                    fontWeight: "bold", // Optional
                    marginLeft: "10px",
                    color: theme.palette.text.primary,
                  },
                })}
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Theme Mode Radio Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            gap: "20px",
          }}
        >
          <IconButton
            onClick={() => toggleMode("light")}
            sx={{
              background:
                mode === "light"
                  ? "linear-gradient(135deg, #ffcc33, #ff9900)"
                  : "transparent",
              color: mode === "light" ? "#fff" : "#ffcc33",
              boxShadow:
                mode === "light"
                  ? "0px 4px 10px rgba(255, 204, 51, 0.5)"
                  : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #ffcc33, #ff9900)",
                boxShadow: "0px 4px 15px rgba(255, 204, 51, 0.8)",
              },
            }}
          >
            <WbSunnyIcon sx={{ fontSize: "36px" }} />
          </IconButton>
          <IconButton
            onClick={() => toggleMode("dark")}
            sx={{
              background:
                mode === "dark"
                  ? "linear-gradient(135deg, #3333ff, #6600cc)"
                  : "transparent",
              color: mode === "dark" ? "#fff" : "#3333ff",
              boxShadow:
                mode === "dark"
                  ? "0px 4px 10px rgba(51, 51, 255, 0.5)"
                  : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #3333ff, #6600cc)",
                boxShadow: "0px 4px 15px rgba(51, 51, 255, 0.8)",
              },
            }}
          >
            <NightlightRoundIcon sx={{ fontSize: "36px" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
