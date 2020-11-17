/* eslint-disable import/prefer-default-export */
// npm i react-select
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { Label } from "reactstrap";
// import "./Select.css";

const customStyles = {
  control: (provided, { isDisabled }) => ({
    ...provided,
    height: 50,
    borderRadius: "0.25rem",
    backgroundColor: isDisabled ? "#edf1f2" : "#fff",
    border: "1px solid #c9d2e0",
    cursor: isDisabled ? "not-allowed" : "default",
  }),
  placeholder: (styles) => ({
    ...styles,
    padding: "0 6.75px",
    color: "#b4b9c7",
  }),
};

export const ReactSelect = ({
  options,
  optionsPlaceholder,
  label,
  isLabelBold,
  selectedValue,
  onHandleChange,
  nameSelect,
  isClearable,
  isDisabled,
}) => {
  const labelStyles = isLabelBold
    ? { color: "black", fontFamily: "Bariol_bold" }
    : {};
  return (
    <div>
      {label && (
        <Label style={labelStyles} className="font-ob-bold">
          {label}
        </Label>
      )}
      <Select
        defaultValue={options.filter(
          (option) => option.value === selectedValue
        )}
        value={options.filter((option) => option.value === selectedValue)}
        name={nameSelect}
        placeholder={optionsPlaceholder}
        onChange={onHandleChange}
        options={options}
        isClearable={isClearable}
        isDisabled={isDisabled}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            borderRadius: "2px",
            primary: "#66afe9",
          },
        })}
      />
    </div>
  );
};

ReactSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  optionsPlaceholder: PropTypes.string,
  nameSelect: PropTypes.string,
  label: PropTypes.string,
  isLabelBold: PropTypes.bool,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onHandleChange: PropTypes.func,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

ReactSelect.defaultProps = {
  options: [],
  optionsPlaceholder: "Select...",
  label: "",
  isLabelBold: true,
  selectedValue: "",
  nameSelect: "",
  onHandleChange: () => {},
  isClearable: true,
  isDisabled: false,
};
