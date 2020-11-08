/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

function FFQStepper({ totalSteps, indexActive }) {
  const newArr = Array.from(Array(totalSteps));
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {newArr.map((v, i) => {
        return (
          <div
            style={{
              width: `${1000 / totalSteps}%`,
              height: "1px",
              border: `solid 3px${indexActive >= i ? "#009fe3" : "#c9d2e0"}`,
              borderRadius: "10px",
              marginRight: "10px",
            }}
            key={i}
          />
        );
      })}
    </div>
  );
}

FFQStepper.propTypes = {
  totalSteps: PropTypes.number,
  indexActive: PropTypes.number,
};
FFQStepper.defaultProps = {
  totalSteps: 0,
  indexActive: 0,
};
export default FFQStepper;
