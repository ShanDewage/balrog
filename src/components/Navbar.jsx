import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const { mode, subMode, toggleMode, toggleSubMode } = useContext(ThemeContext);
  const toggleNavbar = () => {
    if (!isOpen) {
      setMenuItems([]);
      setIsOpen(true);
      const itemTimeouts = [0, 300, 600, 900]; // Delay for each menu item
      itemTimeouts.forEach((timeout, index) => {
        setTimeout(() => {
          setMenuItems((prev) => [...prev, index]);
        }, timeout);
      });
    } else {
      setIsOpen(false);
      setMenuItems([]);
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 1000 }}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleNavbar}
          sx={{ position: "absolute", top: 20, right: 20 }}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
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
        <List sx={{ width: 250 }}>
          {/* Theme Mode Radio Buttons */}
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
