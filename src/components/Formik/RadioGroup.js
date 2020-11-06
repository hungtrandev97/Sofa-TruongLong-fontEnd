/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import { Field, ErrorMessage } from "formik";

const StyledRadioInput = styled.input`
  :checked,
  :not(:checked) {
    position: absolute;
    left: -9999px;
  }
  :checked + label,
  :not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  :checked + label:before,
  :not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 21px;
    height: 21px;
    border: 2px solid #c9d2e0;
    border-radius: 100%;
    background: #fff;
  }
  :checked + label:before {
    border: 2px solid #009fe3;
  }
  :checked + label:after,
  :not(:checked) + label:after {
    content: "";
    width: 13px;
    height: 13px;
    background: #009fe3;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  :not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: all;
    transform: all;
  }
  :checked + label:after {
    opacity: 1;
    -webkit-transform: all;
    transform: all;
  }

  /* Disabled state label. */
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  /* Disabled box. */
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }
`;

const RadioGroup = ({
  labelStyles,
  label,
  isLabelBold,
  description,
  name,
  options,
  ...rest
}) => {
  return (
    <FormGroup>
      {label && (
        <Label
          for={name}
          className={`${
            isLabelBold ? "font-ob-bold" : "font-weight-normal"
          } w-100`}
          style={{ ...labelStyles }}
        >
          {label}
        </Label>
      )}
      {description && <div>{description}</div>}
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <StyledRadioInput
                  className="mr-2"
                  type="radio"
                  id={`${name}-${option.value}`}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={`${name}-${option.value}`} className="mr-5">
                  {option.name}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage
        component="div"
        className="invalid-feedback d-block"
        name={name}
      />
    </FormGroup>
  );
};

RadioGroup.propTypes = {
  labelStyles: PropTypes.shape({}),
  isLabelBold: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
RadioGroup.defaultProps = {
  isLabelBold: true,
  labelStyles: {},
  label: "",
  description: "",
};

export default RadioGroup;
