import React from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { FaSun, FaMoon } from "react-icons/fa";

function Example({ darkMode, toggleDarkMode }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky-top">
      <Nav className={`align-middle d-flex justify-content-between align-items-center ${darkMode ? 'bg-black' : 'bg-light'}`} style={{ padding: "20px" }}>
        <NavItem>
          <h4 style={{ paddingRight: "20px", color: darkMode ? "white" : "black" }}>premosh</h4>
        </NavItem>
        <div className="d-flex">
          <NavItem>
            <NavLink onClick={() => scrollToSection("home")} style={{ color: darkMode ? "white" : "black", cursor: 'pointer'}}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("About")} style={{ color: darkMode ? "white" : "black", cursor: "pointer"}}>About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("ContactInfo")} style={{ color: darkMode ? "white" : "black", cursor: "pointer"}}>Contact Info</NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={toggleDarkMode} style={{ marginLeft: "20px", backgroundColor: "transparent", border: "none" }}>
              {darkMode ? <FaSun size={24} color="white" /> : <FaMoon size={24} color="black" />}
            </Button>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}

export default Example;
