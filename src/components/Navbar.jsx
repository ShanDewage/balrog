import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

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
      </Drawer>
    </>
  );
};

export default Navbar;
