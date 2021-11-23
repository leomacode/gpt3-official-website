import React, { useState } from "react";
import Menu from "./Menu";
import Sign from "./Sign";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu menu_className="gpt3__navbar-links_container" />
      </div>

      <Sign sign_className="gpt3__navbar-sign" />
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <Menu menu_className="gpt3__navbar-menu_container-links" />
            <Sign sign_className="gpt3__navbar-menu_container-links-sign" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
