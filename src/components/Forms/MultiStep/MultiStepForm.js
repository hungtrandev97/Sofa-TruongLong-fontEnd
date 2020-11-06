/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Form, Button, NavLink, Spinner } from "reactstrap";
import Stepper from "./Stepper";
import Alert from "../../Alert/Alert";

function validStep(propValue, key, componentName, location, propFullName) {
  if (
    !Object.getOwnPropertyNames(propValue[key]).includes("validationSchema")
  ) {
    return new Error(
      `${propFullName} does not have a validateSchema function.
      All form steps must contain both validateSchema and submitHandler functions`
    );
  }

  if (!Object.getOwnPropertyNames(propValue[key]).includes("submitHandler")) {
    return new Error(
      `${propFullName} does not have a submitHandler function.
      All form steps must contain both validateSchema and submitHandler functions`
    );
  }
  return null;
}

function MultiStepForm({
  initialValues,
  onFinalSubmit,
  steps,
  onEachStepSubmit,
  titleBtnSubmit,
  hrefCancel,
}) {
  const [stepNumber, setStepNumber] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const CurrentStep = steps[stepNumber];
  const isFirstStep = stepNumber === 0;
  const isLastStep = stepNumber === steps.length - 1;

  const nextStep = () => {
    setStepNumber(stepNumber + 1);
  };

  const previousStep = (index) => {
    if (index === stepNumber) {
      return;
    }
    setStepNumber(index);
  };
  const handleSubmit = async (values) => {
    try {
      // call at define MultiStepForm
      await onEachStepSubmit(values);
      // call at each child form
      const currentStepSubmitHandler = steps[stepNumber].submitHandler;
      await currentStepSubmitHandler(values);

      if (isLastStep) {
        // final submit
        // call at define MultiStepForm
        setIsSubmit(true);
        await onFinalSubmit(values);
      } else {
        nextStep();
      }
    } catch (err) {
      setIsSubmit(false);
      setIsSubmitError(true);
    }
  };

  return (
    <>
      {/* Progress */}
      <Stepper totalSteps={steps.length} indexActive={stepNumber} />
      {/* Forms */}
      {isSubmitError && (
        <Alert
          color="danger"
          text="Create Profile Has Error"
          styles={{ margin: "20px 0" }}
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={CurrentStep.validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikBag) => (
          <Form
            noValidate
            onSubmit={formikBag.handleSubmit}
            style={{
              marginTop: isSubmitError ? "25px" : "55px",
            }}
          >
            <CurrentStep {...formikBag} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              {/* First Button */}
              {!isFirstStep ? (
                <Button
                  tag="div"
                  outline
                  color="primary"
                  className="mr-4"
                  onClick={() => previousStep(stepNumber - 1)}
                  disabled={isSubmit}
                >
                  Back
                </Button>
              ) : (
                <NavLink href={hrefCancel} className="p-0" disabled={isSubmit}>
                  <Button tag="div" outline color="primary" className="mr-4">
                    Cancel
                  </Button>
                </NavLink>
              )}
              {/* Last Button */}
              {isLastStep ? (
                <Button type="submit" color="primary" disabled={isSubmit}>
                  {isSubmit && (
                    <Spinner color="white" size="sm" className="mr-2" />
                  )}
                  <span className="ml-50">{titleBtnSubmit}</span>
                </Button>
              ) : (
                <Button type="submit" color="primary">
                  Next Step
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

MultiStepForm.propTypes = {
  initialValues: PropTypes.shape({}).isRequired,
  onFinalSubmit: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(validStep).isRequired,
  onEachStepSubmit: PropTypes.func,
  titleBtnSubmit: PropTypes.string,
  hrefCancel: PropTypes.string,
};

MultiStepForm.defaultProps = {
  onEachStepSubmit: () => {},
  titleBtnSubmit: "Submit",
  hrefCancel: "/",
};

export default MultiStepForm;
