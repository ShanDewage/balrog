import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const toggleNavbar = () => {
    if (!isOpen) {
      // If opening, reset and set timeout for each menu item
      setMenuItems([]);
      setIsOpen(true);
      const itemTimeouts = [0, 300, 600, 900]; // Delay for each menu item
      itemTimeouts.forEach((timeout, index) => {
        setTimeout(() => {
          setMenuItems((prev) => [...prev, index]);
        }, timeout);
      });
    } else {
      // If closing, clear menu items
      setIsOpen(false);
      setMenuItems([]);
    }
  };

  const navbarStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "250px",
    backgroundColor: "white",
    boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.2)",
    // transform: isOpen ? "translateX(0)" : "translateX(100%)",
    // transition: "transform 0.3s ease-in-out",
    zIndex: 1000,
  };

  const hamburgerStyles = {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1001,
  };

  const navLinksStyles = {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
  };

  const linkStyles = {
    margin: "20px 0",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <div style={navbarStyles}>
      <button style={hamburgerStyles} onClick={toggleNavbar}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav style={navLinksStyles}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {["hero", "about", "projects", "contact"].map((item, index) => (
            <li
              key={item}
              style={{
                ...linkStyles,
                opacity: menuItems.includes(index) ? 1 : 0,
              }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={toggleNavbar}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
