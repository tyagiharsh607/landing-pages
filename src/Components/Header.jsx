import React from "react";
import logo from "../Images/logo.jpeg";

const Header = ({ heading, para }) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <h2>{heading}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Header;
