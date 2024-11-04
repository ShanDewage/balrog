import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const { mode, subMode, toggleMode, toggleSubMode } = useContext(ThemeContext);

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
          sx={{ position: "fixed", top: 20, right: 20, zIndex: 1100 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer anchor="right" open={isOpen} onClose={toggleNavbar}>
        <List sx={{ width: 250 }}>
          {["hero", "about", "projects", "contact"].map((item, index) => (
            <ListItem
              button
              key={item}
              onClick={toggleNavbar}
              sx={{
                opacity: menuItems.includes(index) ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
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
                />
              </Link>
            </ListItem>
          ))}
        </List>
        {/* Theme Mode Radio Buttons */}
        <List sx={{ width: 250 }}>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                value={mode}
                onChange={(event) => {
                  const selectedMode = event.target.value;
                  toggleMode(selectedMode);
                  toggleSubMode("classic"); // Default to classic sub-mode
                }}
              >
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light Mode"
                />
                <Collapse in={mode === "light"}>
                  <RadioGroup
                    value={subMode}
                    onChange={(event) => toggleSubMode(event.target.value)}
                    sx={{ pl: 3 }}
                  >
                    <FormControlLabel
                      value="classic"
                      control={<Radio />}
                      label="Classic"
                    />
                    <FormControlLabel
                      value="future3D"
                      control={<Radio />}
                      label="Future 3D"
                    />
                  </RadioGroup>
                </Collapse>
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark Mode"
                />
                <Collapse in={mode === "dark"}>
                  <RadioGroup
                    value={subMode}
                    onChange={(event) => toggleSubMode(event.target.value)}
                    sx={{ pl: 3 }}
                  >
                    <FormControlLabel
                      value="classic"
                      control={<Radio />}
                      label="Classic"
                    />
                    <FormControlLabel
                      value="future3D"
                      control={<Radio />}
                      label="Future 3D"
                    />
                  </RadioGroup>
                </Collapse>
              </RadioGroup>
            </FormControl>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
