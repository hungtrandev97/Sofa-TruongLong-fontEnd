import React from "react";
import PropTypes from "prop-types";
import "./Introduce.css";

const IntroduceContent = ({ Icon, Title, Descript }) => {
  return (
    <div
      className="Introduce__content__product"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="Introduce__content__icon">{Icon}</div>
      <div className="Introduce__content__span">
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>{Title}</span>
        <span style={{ fontSize: "14px", color: "#3a3f51db" }}>{Descript}</span>
      </div>
    </div>
  );
};

IntroduceContent.propTypes = {
  Title: PropTypes.string,
  Descript: PropTypes.string,
};

IntroduceContent.defaultProps = {
  Title: "",
  Descript: "",
};

export default IntroduceContent;
