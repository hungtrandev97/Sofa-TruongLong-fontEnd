import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BackToHome.css";

function BackToHome({ text }) {
  return (
    <Link to="/" className="BackToHome__Link">
      <div className="BackToHome">
        <img
          width={34}
          height={34}
          src="/img/auth/back-to-home.svg"
          alt="back to home"
          className="mr-2"
        />
        <div className="font-ob-bold BackToHome__styledText">{text}</div>
      </div>
    </Link>
  );
}

BackToHome.propTypes = {
  text: PropTypes.string,
};
BackToHome.defaultProps = {
  text: "",
};

export default BackToHome;
