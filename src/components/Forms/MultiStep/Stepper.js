/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

function Stepper({ totalSteps, indexActive }) {
  const newArr = Array.from(Array(totalSteps));
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {newArr.map((v, i) => {
        return (
          <div
            style={{
              width: "18px",
              height: "1px",
              borderRadius: "10px",
              marginRight: "10px",
              border: `solid 3px ${indexActive === i ? "#009fe3" : "#c9d2e0"}`,
            }}
            key={i}
          />
        );
      })}
    </div>
  );
}

Stepper.propTypes = {
  totalSteps: PropTypes.number,
  indexActive: PropTypes.number,
};
Stepper.defaultProps = {
  totalSteps: 0,
  indexActive: 0,
};
export default Stepper;
