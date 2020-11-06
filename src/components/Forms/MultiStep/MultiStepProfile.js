/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Form, Button, Spinner } from "reactstrap";
import Alert from "../../Alert/Alert";
import DisabledButton from "../../Buttons/DisabledButton";

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

function MultiStepProfile({
  initialValues,
  onFinalSubmit,
  steps,
  onEachStepSubmit,
  buttons,
  onNextBack,
}) {
  const [stepNumber, setStepNumber] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const CurrentStep = steps[stepNumber];
  const isFirstStep = stepNumber === 0;
  const isLastStep = stepNumber === steps.length - 1;

  const nextStep = () => {
    setStepNumber(stepNumber + 1);
    onNextBack(stepNumber + 1 + 1);
  };

  const previousStep = (index) => {
    if (index === stepNumber) {
      return;
    }
    setStepNumber(index);
    onNextBack(index + 1);
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
      {/* Forms */}
      {isSubmitError && (
        <Alert
          color="danger"
          text="Create Profile Has Error"
          styles={{ margin: "0 0 20px" }}
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={CurrentStep.validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikBag) => (
          <Form noValidate onSubmit={formikBag.handleSubmit}>
            <CurrentStep {...formikBag} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "80px",
              }}
            >
              {/* First Button */}
              {isFirstStep ? (
                <DisabledButton
                  title={buttons.titleBtnBack}
                  className="mr-3"
                  styles={{ width: "96px" }}
                />
              ) : (
                <Button
                  style={{ minWidth: "96px" }}
                  tag="div"
                  outline
                  color="primary"
                  className="mr-3"
                  onClick={() => previousStep(stepNumber - 1)}
                >
                  {buttons.titleBtnBack}
                </Button>
              )}
              {/* Last Button */}
              {isLastStep ? (
                <Button
                  style={{ minWidth: "96px" }}
                  type="submit"
                  color="primary"
                  disabled={isSubmit}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {isSubmit && (
                    <Spinner color="white" size="sm" className="mr-2" />
                  )}
                  <span className="ml-50">{buttons.titleBtnSubmit}</span>
                </Button>
              ) : (
                <Button
                  style={{ minWidth: "96px" }}
                  type="submit"
                  color="primary"
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {buttons.titleBtnNext}
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

MultiStepProfile.propTypes = {
  initialValues: PropTypes.shape({}).isRequired,
  onFinalSubmit: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(validStep).isRequired,
  onEachStepSubmit: PropTypes.func,
  buttons: PropTypes.shape({
    titleBtnSubmit: PropTypes.string,
    titleBtnBack: PropTypes.string,
    titleBtnNext: PropTypes.string,
  }),
  onNextBack: PropTypes.func,
};

MultiStepProfile.defaultProps = {
  onEachStepSubmit: () => {},
  buttons: {
    titleBtnSubmit: "Submit",
    titleBtnBack: "Cancel",
    titleBtnNext: "Next Step",
  },
  onNextBack: () => {},
};

export default MultiStepProfile;
