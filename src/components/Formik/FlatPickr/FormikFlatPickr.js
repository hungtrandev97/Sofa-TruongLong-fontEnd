import React, { useRef } from "react";
import { array, string, oneOfType, func, instanceOf } from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import "./FlatPickr.css";

function FormikFlatPickr({
  name,
  value,
  onChange,
  minDate,
  maxDate,
  disable,
  placeholder,
}) {
  const inputEl = useRef(null);
  if (inputEl && inputEl.current && inputEl.current.flatpickr) {
    inputEl.current.flatpickr.currentYearElement.addEventListener(
      "keydown",
      (e) => {
        if (e.keyCode === 9) e.preventDefault(); // disable tab key
      }
    );
  }

  return (
    <Flatpickr
      ref={inputEl}
      className="form-control"
      name={name}
      id={name}
      value={value}
      onChange={(selectedDates) => {
        onChange(
          selectedDates && selectedDates.length > 0 ? selectedDates[0] : ""
        );
      }}
      options={{
        dateFormat: "d/m/Y",
        minDate,
        maxDate,
        disable,
        mode: "single",
        locale: {
          firstDayOfWeek: 1,
        },
        static: true,
        prevArrow: "<div class='prev-icon'></div>",
        nextArrow: "<div class='next-icon'></div>",
        disableMobile: "true",
      }}
      placeholder={placeholder}
    />
  );
}

FormikFlatPickr.propTypes = {
  name: string,
  value: oneOfType([string, instanceOf(Date)]),
  onChange: func,
  minDate: oneOfType([string, instanceOf(Date)]),
  maxDate: oneOfType([string, instanceOf(Date)]),
  disable: oneOfType([array]),
  placeholder: string,
};
FormikFlatPickr.defaultProps = {
  name: "",
  value: "",
  onChange: () => {},
  minDate: null,
  maxDate: null,
  disable: [],
  placeholder: "",
};

export default FormikFlatPickr;
