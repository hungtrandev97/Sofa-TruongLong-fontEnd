import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import ConsumerHeaderAcount from "./ComsumerHeaderAcount";
import "./ConsumerHeader.css";

function ConsumerHeader() {
  return (
    <div className="consumerHeader">
      {/* Logo */}
      <Link to="/consumer/profiles">
        <img
          className="consumerHeader__LogoImage"
          src="/img/logo_white_horizontal.png"
          alt="Logo"
        />
      </Link>

      {/* User */}
      <Navbar expand>
        {/* 
          colorTextAndImage = white or colorTextAndImage = "blue"
        */}
        <ConsumerHeaderAcount colorTextAndImage="white" />
      </Navbar>
    </div>
  );
}

export default ConsumerHeader;
