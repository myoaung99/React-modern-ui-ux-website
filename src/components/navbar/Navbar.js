import logo from "./../../assets/GPT-3.png";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Study</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  // show mobile navbar meun state
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      {/* Navlinks container */}
      <div className="gpt3__navbar-links">
        {/* img logo container */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Navbar links */}
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      {/* Sign In Button */}
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>

      {/* Mobile Menu Container */}
      <div className="gpt3__navbar-menu">
        {/* Show open or close toggler */}
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu((prev) => !prev);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu((prev) => !prev);
            }}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_contaienr-links">
              <Menu />
              <div className="gpt3__navbar-menu__container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
