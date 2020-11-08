import React from "react";
import { shape, string } from "prop-types";
import classnames from "classnames";
// CSS Loaders
import "loaders.css/loaders.css";

function LoaderWithText(props) {
  const { styles, color, className, text } = props;

  const Line = () => <div style={{ backgroundColor: color }} />;

  return (
    <div
      className={classnames(
        "d-flex flex-column align-items-center justify-content-center",
        className
      )}
      style={{
        ...styles,
      }}
    >
      <div className={classnames("line-scale")}>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
      <div>{text}</div>
    </div>
  );
}

LoaderWithText.propTypes = {
  color: string,
  styles: shape({}),
  className: string,
  text: string,
};

LoaderWithText.defaultProps = {
  color: "#23b7e5",
  styles: {},
  className: "",
  text: "",
};

export default LoaderWithText;
