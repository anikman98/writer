import React from "react";
import "../resource/css/header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="left navbar-item">
        <h3 className="title">Writer</h3>
      </div>
      <div className="center navbar-item"></div>
      <div className="right navbar-item user">
          <div className="user-logo">
            <div className="user-logo-top"></div>
            <div className="user-logo-center"></div>
            <div className="user-logo-bottom"></div>
          </div>
        <p className="user-name">
          Hello Anik!
        </p>
      </div>
    </nav>
  );
};

export default Header;
