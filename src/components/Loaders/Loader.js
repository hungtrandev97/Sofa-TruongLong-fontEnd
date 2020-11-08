import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// CSS Loaders
import "loaders.css/loaders.css";

function Loader(props) {
  const { styles, color, className } = props;

  const Line = () => <div style={{ backgroundColor: color }} />;

  return (
    <div
      className={classnames("line-scale", className)}
      style={{
        ...styles,
      }}
    >
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
  );
}

Loader.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.shape({}),
  className: PropTypes.string,
};

Loader.defaultProps = {
  color: "#23b7e5",
  styles: {},
  className: "",
};

export default Loader;
