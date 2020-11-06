import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function getColor(color) {
  let result = {};
  switch (color) {
    case "danger":
      result = {
        bgColor: "#ffeeee",
        textColor: "#cd3e5b",
      };
      break;

    default:
      result = {
        bgColor: "#ffeeee",
        textColor: "#cd3e5b",
      };
      break;
  }
  return result;
}

function Alert({ color, text, styles, className }) {
  const { bgColor, textColor } = getColor(color);
  return (
    <div
      style={{
        ...styles,
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        minHeight: "71px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
      }}
      className={classnames(className)}
    >
      {text}
    </div>
  );
}

Alert.propTypes = {
  color: PropTypes.string, // default: 'danger'
  text: PropTypes.string,
  styles: PropTypes.shape({}),
  className: PropTypes.string,
};
Alert.defaultProps = {
  color: "danger",
  text: "",
  styles: {},
  className: "",
};

export default Alert;
