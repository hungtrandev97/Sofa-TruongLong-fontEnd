/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import _ from "lodash";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
import AgreementModal from "../Modal/AgreementModal";

import history from "../../history";

import LabelLine from "../Labels/LabelLine";
import LabelLink from "../Labels/LabelLink";

import { authRegisterSuccess } from "../../store/actions/auth.actions";
import { authConsumerChangeView } from "../../store/actions/authtoggle.actions";
import { apiRegister } from "../../services/auth";

import { AUTH_CONSUMER_VIEWS } from "../../constants/DefaultValues";
import { USER_EMAIL_EXIST } from "../../constants/ErrorCode";

import "./FormRegisterUser.css";

const registerSchema = Yup.object()
  .shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6).max(128),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password don't match")
      .required("Password confirm is required"),
    firstName: Yup.string().required("Given name is required"),
    lastName: Yup.string().required("Surname is required"),
    isAgree: Yup.bool().oneOf(
      [true],
      "You must check the box to agree to our Terms of Use and Privacy Policy before continuing to sign up."
    ),
  })
  .defined();

class FormRegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorRegister: {},
      agreementModal: false,
      agreementModalType: "term",
    };
  }

  onFinalSubmit = async (values, resetForm) => {
    const { authRegisterSuccess } = this.props;
    this.setState({ isLoading: true });
    const user = values;
    const response = await apiRegister(user);

    if (response.status) {
      this.setState({ isLoading: false, errorRegister: {} });
      resetForm({});
      authRegisterSuccess({
        user: response.data.user,
        token: response.data.token,
      });
      history.push("/consumer");
    } else {
      let msg = "Register new user has error";
      if (
        response &&
        response.data &&
        response.data.body &&
        response.data.body.code
      ) {
        const errorCode = response.data.body.code;
        if (errorCode === USER_EMAIL_EXIST) {
          msg = "An account with this email already exists.";
        }
      }
      this.setState({ isLoading: false, errorRegister: { msg } });
    }
  };

  onAgreementToggle = ({ type }) => {
    this.setState((prevState) => ({
      agreementModal: !prevState.agreementModal,
      agreementModalType: type,
    }));
  };

  render() {
    const {
      isLoading,
      errorRegister,
      agreementModal,
      agreementModalType,
    } = this.state;
    return (
      <div className="FormRegisterUser__Container">
        <AgreementModal
          modal={agreementModal}
          toggle={this.onAgreementToggle}
          type={agreementModalType}
        />
        <LabelLine
          title="Create a New Account"
          styles={{
            marginBottom: "13px",
          }}
        />
        {!_.isEmpty(errorRegister) && (
          <Alert color="danger" text={errorRegister.msg} />
        )}
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            firstName: "",
            lastName: "",
            isAgree: false,
          }}
          validationSchema={registerSchema}
          onSubmit={(values, { resetForm }) => {
            this.onFinalSubmit(values, resetForm);
          }}
        >
          {({ errors, touched }) => (
            <Form
              className="FormRegisterUser__form"
              style={{ marginTop: `${errorRegister ? "24px" : "36px"}` }}
              noValidate
              errorregister={errorRegister.toString()}
            >
              <div className="d-flex">
                {/* Given Name */}
                <FormGroup style={{ flex: 1, marginRight: "6px" }}>
                  <Label for="firstName" className="font-ob-bold">
                    Given Name
                  </Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="invalid-feedback d-block">
                      {errors.firstName}
                    </div>
                  ) : null}
                </FormGroup>
                {/* Sure Name */}
                <FormGroup style={{ flex: 1, marginLeft: "6px" }}>
                  <Label for="lastName" className="font-ob-bold">
                    Surname
                  </Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="invalid-feedback d-block">
                      {errors.lastName}
                    </div>
                  ) : null}
                </FormGroup>
              </div>
              {/* Email */}
              <FormGroup>
                <Label for="email" className="font-ob-bold">
                  Email Address
                </Label>
                <Field
                  className="form-control"
                  type="text"
                  name="email"
                  autoComplete="email"
                  placeholder="e.g. john@abc.com"
                />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                ) : null}
              </FormGroup>
              {/* Password */}
              <FormGroup>
                <Label for="password" className="font-ob-bold">
                  Password
                </Label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="**********"
                />
                {errors.password && touched.password ? (
                  <div className="invalid-feedback d-block">
                    {errors.password}
                  </div>
                ) : null}
              </FormGroup>
              {/* Confirm Password */}
              <FormGroup>
                <Label for="passwordConfirmation" className="font-ob-bold">
                  Confirm Password
                </Label>
                <Field
                  className="form-control"
                  type="password"
                  name="passwordConfirmation"
                  autoComplete="confirm-password"
                  placeholder="**********"
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <div className="invalid-feedback d-block">
                    {errors.passwordConfirmation}
                  </div>
                ) : null}
              </FormGroup>
              {/* Agree */}
              <FormGroup>
                <Field name="isAgree">
                  {({ field }) => {
                    return (
                      <div className="d-flex">
                        <input
                          className="FormRegisterUser__StyledCheckbox"
                          {...field}
                          type="checkbox"
                          id="isAgree"
                          name="isAgree"
                        />
                        <Label htmlFor="isAgree" />
                        <div>
                          You agree with our&nbsp;
                          <span
                            role="link"
                            tabIndex="0"
                            onKeyPress={() => {}}
                            className="FormRegisterUser__StyledAgree"
                            onClick={() => {
                              this.onAgreementToggle({ type: "term" });
                            }}
                          >
                            Terms of use
                          </span>
                          &nbsp;and&nbsp;
                          <span
                            className="FormRegisterUser__StyledAgree"
                            role="link"
                            tabIndex="0"
                            onKeyPress={() => {}}
                            onClick={() => {
                              this.onAgreementToggle({ type: "policy" });
                            }}
                          >
                            Privacy Policy
                          </span>
                          .
                        </div>
                      </div>
                    );
                  }}
                </Field>
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="isAgree"
                />
              </FormGroup>

              <div className="FormRegisterUser__ButtonsContainer">
                <Link to="/home" className="p-0">
                  <Button
                    type="button"
                    outline
                    color="primary"
                    className="mr-2"
                  >
                    Cancel
                  </Button>
                </Link>

                <Button type="submit" color="primary" disabled={isLoading}>
                  {isLoading && (
                    <Spinner color="white" size="sm" className="mr-2" />
                  )}
                  <span className="ml-50">Create Account</span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <LabelLink
          normalSentence="Already have an account?"
          linkSentence="Sign in."
          onLinkClick={() => {
            // eslint-disable-next-line react/destructuring-assignment
            this.props.authConsumerChangeView(AUTH_CONSUMER_VIEWS.LOGIN);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapActionsToProps = { authConsumerChangeView, authRegisterSuccess };
export default connect(mapStateToProps, mapActionsToProps)(FormRegisterUser);
