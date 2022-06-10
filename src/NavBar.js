import React from "react";
import {Link} from "react-router-dom";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-home">
        John Nguyen
      </Link>
      <Link to="/about-me" className="navbar-tabs">
        About Me
      </Link>
      <Link to="/designs" className="navbar-tabs">
        Designs
      </Link>
      <Link to="/projects" className="navbar-tabs">
        Projects
      </Link>
      <Link to="/contact" className="navbar-tabs">
        Contact
      </Link>
      {/* <Link to="/projects/yumyum"></Link>
        <Link to="/projects/nonprofit"></Link>
        <Link to="/projects/joblify"></Link>
        <Link to="/projects/montana"></Link> */}
    </div>
  );
};

export default NavBar;
