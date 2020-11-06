/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import { connect } from "react-redux";
import * as Yup from "yup";
import LabelLine from "../Labels/LabelLine";
import LabelLink from "../Labels/LabelLink";
import Alert from "../Alert/Alert";
import {
  loginUser,
  authResetStatusLogin,
} from "../../store/actions/auth.actions";
import { authConsumerChangeView } from "../../store/actions/authtoggle.actions";
import { AUTH_CONSUMER_VIEWS, ROLE } from "../../constants/DefaultValues";
import "./FormLogin.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6).max(20),
});

class FormLogin extends Component {
  componentDidMount() {
    this.props.authResetStatusLogin();
  }

  onFinalSubmit = async (values) => {
    const { loginUser } = this.props;
    loginUser({ ...values, role: ROLE.PATIENT });
  };

  render() {
    const { loadingLogin, errorLogin, authConsumerChangeView } = this.props;
    return (
      <div className="FormLogin">
        <LabelLine
          title="Sign In to OneBiome"
          styles={{
            marginBottom: "13px",
          }}
        />
        {errorLogin && (
          <Alert
            color="danger"
            text="Your Email Address or password is incorrect. Please try again."
          />
        )}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            this.onFinalSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              className="FormLogin__Form"
              style={{ marginTop: `${errorLogin ? "24px" : "53px"}` }}
              noValidate
              errorlogin={errorLogin.toString()}
            >
              <FormGroup>
                <Label for="email" className="font-ob-bold">
                  Email Address
                </Label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="e.g. john@abc.com"
                  autoComplete="email"
                />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <div className="d-flex align-items-center justify-content-between">
                  <Label for="password" className="font-ob-bold">
                    Enter Password
                  </Label>
                  <div className="forgot-pwd">Forgot Password?</div>
                </div>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="**********"
                  autoComplete="current-password"
                />
                {errors.password && touched.password ? (
                  <div className="invalid-feedback d-block">
                    {errors.password}
                  </div>
                ) : null}
              </FormGroup>
              <Button type="submit" color="primary" disabled={loadingLogin}>
                {loadingLogin && (
                  <Spinner color="white" size="sm" className="mr-2" />
                )}
                <span className="ml-50 font-ob-bold">Sign in</span>
              </Button>
            </Form>
          )}
        </Formik>
        <LabelLink
          normalSentence="No account yet?"
          linkSentence="Create a new account now."
          onLinkClick={() => {
            authConsumerChangeView(AUTH_CONSUMER_VIEWS.REGISTER);
          }}
        />
      </div>
    );
  }
}

FormLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loadingLogin: PropTypes.bool,
  errorLogin: PropTypes.bool,
  authResetStatusLogin: PropTypes.func,
  authConsumerChangeView: PropTypes.func,
};
FormLogin.defaultProps = {
  loadingLogin: false,
  errorLogin: false,
  authResetStatusLogin: () => {},
  authConsumerChangeView: () => {},
};

const mapStateToProps = ({ authRedux }) => {
  const { loadingLogin, errorLogin } = authRedux;
  return { loadingLogin, errorLogin };
};

const mapActionsToProps = {
  loginUser,
  authResetStatusLogin,
  authConsumerChangeView,
};
export default connect(mapStateToProps, mapActionsToProps)(FormLogin);
