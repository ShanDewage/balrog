import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);

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
      const itemTimeouts = [0, 300, 600, 900]; // Delay for each menu item
      itemTimeouts.forEach((timeout, index) => {
        setTimeout(() => {
          setMenuItems((prev) => [...prev, index]);
        }, timeout);
      });
    } else {
      setMenuItems([]);
    }
  };

  return (
    <>
      {showNavbar && (
        <AppBar position="fixed" sx={{ zIndex: 1000 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Your Website Name
            </Typography>
            <IconButton edge="end" color="inherit" onClick={toggleNavbar}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      {/* Always show the MenuIcon */}
      {!showNavbar && (
        <IconButton
          color="inherit"
          onClick={toggleNavbar}
          sx={{ position: "fixed", top: 20, right: 20, zIndex: 2000 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Transparent Sidebar */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          right: 0,
          width: isOpen ? "250px" : "0",
          height: "90vh",
          // backgroundColor: "rgba(0, 0, 0, 0.7)",
          overflowX: "hidden",
          transition: "width 0.3s ease",
          zIndex: 1200,
        }}
      >
        <List sx={{ padding: 0 }}>
          {["hero", "about", "projects", "contact"].map((item, index) => (
            <ListItem
              button
              key={item}
              onClick={toggleNavbar}
              sx={{
                opacity: menuItems.includes(index) ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
                padding: "15px",
              }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItemText
                  primary={item.charAt(0).toUpperCase() + item.slice(1)}
                  sx={{ color: "#fff" }}
                />
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Theme Mode Radio Buttons */}
        <List sx={{ position: "absolute", bottom: 20, width: "100%" }}>
          <ListItem sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <FormControl component="fieldset">
              <RadioGroup
                value={mode}
                onChange={(event) => toggleMode(event.target.value)}
              >
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light Mode"
                  sx={{ color: "#fff" }}
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark Mode"
                  sx={{ color: "#fff" }}
                />
              </RadioGroup>
            </FormControl>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Navbar;
