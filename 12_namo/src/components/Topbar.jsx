import React from "react";
import logo from "./../images/logo.jpg";
import "./Topbar.css";

const Topbar = () => {
  return (
    <topbar>
      <img className="logo" src={logo} alt="" />;
    </topbar>
  );
};

export default Topbar;
