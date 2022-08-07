import React, { useEffect, useState } from "react";
import logo from "../../asset/logo.png";
import avatar from "../../asset/Netflix-avatar.png";
import "./NavBar.css";
const NavBar = () => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="logo" />
      <img className="nav__avatar" src={avatar} alt="logo" />
    </div>
  );
};

export default NavBar;
