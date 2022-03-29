import logo from "./../../assets/GPT-3.png";
import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      {/* Navlinks container */}
      <div className="gpt3__navbar-links">
        {/* img logo container */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
