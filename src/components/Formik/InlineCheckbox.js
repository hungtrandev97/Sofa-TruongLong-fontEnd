/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

// https://codepen.io/Vestride/pen/dABHx
const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }
  /* Box. */
  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: sub;
    width: 21px;
    height: 21px;
    border-radius: 3px;
    border: solid 2px #c9d2e0;
    background-color: #ffffff;
  }

  /* Box hover */
  /* &:hover + label:before {
    background: #f35429;
  } */

  /* Box focus */
  &:focus + label:before {
    /* box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12); */
  }

  /* Box checked */
  &:checked + label:before {
    border-radius: 3px;
    border: solid 2px #009fe3;
    background-color: #009fe3;
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

  /* Checkmark. Could be replaced with an image */
  &:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 12px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

function InlineCheckbox({ name, id, ...rest }) {
  return (
    <>
      <Field name={id}>
        {({ field }) => {
          return (
            <>
              <StyledCheckbox type="checkbox" id={id} {...field} {...rest} />
              <label htmlFor={id}>{name}</label>
            </>
          );
        }}
      </Field>

      <ErrorMessage
        component="div"
        className="invalid-feedback d-block"
        name={id}
      />
    </>
  );
}

InlineCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InlineCheckbox;
