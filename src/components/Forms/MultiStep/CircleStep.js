import React from "react";
import PropTypes from "prop-types";
import "./CircleStep.css";

function CircleStep({ currentStep, totalStep, styles }) {
  return (
    <div className="CircleStep" style={{ ...styles }}>
      <div className="font-weight-bold CircleStep__Number">
        {`${currentStep}/${totalStep}`}
      </div>
    </div>
  );
}

CircleStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalStep: PropTypes.number.isRequired,
  styles: PropTypes.shape({}),
};

CircleStep.defaultProps = {
  styles: {},
};

export default CircleStep;
