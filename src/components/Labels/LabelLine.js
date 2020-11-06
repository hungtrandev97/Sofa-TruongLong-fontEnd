import React from "react";
import PropTypes from "prop-types";
import "./LabelLine.css";

function LabelLine({ title, styles, hideLine }) {
  return (
    <div style={styles}>
      <div className="font-ob-bold LabelLine__Title">{title}</div>
      {!hideLine && <div className="LabelLine_Bottom" />}
    </div>
  );
}

LabelLine.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  hideLine: PropTypes.bool,
};
LabelLine.defaultProps = {
  title: "",
  styles: {},
  hideLine: false,
};

export default LabelLine;
