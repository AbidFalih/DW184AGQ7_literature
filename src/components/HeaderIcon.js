import React from "react";
import logo from "../assets/header-logo.png";
import { Link } from "react-router-dom";

const HeaderIcon = () => {
  return (
    <Link to="/home" className="link-noDec">
      <img src={logo} alt="header-logo" className="img-header" />
    </Link>
  );
};

export default HeaderIcon;
