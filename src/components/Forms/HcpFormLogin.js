/* eslint-disable react/destructuring-assignment */
import React from "react";
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
import {
  authToggleHcpConsumer,
  authConsumerChangeView,
} from "../../store/actions/authtoggle.actions";
import {
  AUTH_CONSUMER_VIEWS,
  AUTH_VIEWS,
  ROLE,
} from "../../constants/DefaultValues";
import "./HcpFormLogin.css";

const loginSchema = Yup.object().shape({
  userName: Yup.string().required(),
  password: Yup.string().required().min(6).max(20),
});

class HcpFormLogin extends React.Component {
  componentDidMount() {
    this.props.authResetStatusLogin();
  }

  onFinalSubmit = async (values) => {
    this.props.loginUser({ ...values, role: ROLE.HCP });
  };

  render() {
    const { loadingLogin, errorLogin } = this.props;
    return (
      <div className="HcpFormLogin">
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
              className="HcpFormLogin__form"
              style={{ marginTop: `${this.errorlogin ? "24px" : "53px"}` }}
              noValidate
              errorlogin={errorLogin.toString()}
            >
              <FormGroup>
                <Label for="userName" className="font-ob-bold">
                  UserName
                </Label>
                <Field
                  className="form-control"
                  type="text"
                  name="userName"
                  placeholder="e.g. john@abc.com"
                  autoComplete="email"
                />
                {errors.userName && touched.userName ? (
                  <div className="invalid-feedback d-block">
                    {errors.userName}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <div className="d-flex align-items-center justify-content-between">
                  <Label for="password" className="font-ob-bold">
                    Password
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
          normalSentence="Not a health care professional?"
          linkSentence="Sign in as a Consumer."
          onLinkClick={() => {
            this.props.authToggleHcpConsumer(AUTH_VIEWS.CONSUMER);
            this.props.authConsumerChangeView(AUTH_CONSUMER_VIEWS.LOGIN);
          }}
        />
      </div>
    );
  }
}

HcpFormLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loadingLogin: PropTypes.bool,
  errorLogin: PropTypes.bool,
  authResetStatusLogin: PropTypes.func,
  authToggleHcpConsumer: PropTypes.func,
  authConsumerChangeView: PropTypes.func,
};
HcpFormLogin.defaultProps = {
  loadingLogin: false,
  errorLogin: false,
  authResetStatusLogin: () => {},
  authToggleHcpConsumer: () => {},
  authConsumerChangeView: () => {},
};

const mapStateToProps = ({ authRedux }) => {
  const { loadingLogin, errorLogin } = authRedux;
  return { loadingLogin, errorLogin };
};

const mapActionsToProps = {
  loginUser,
  authResetStatusLogin,
  authToggleHcpConsumer,
  authConsumerChangeView,
};

export default connect(mapStateToProps, mapActionsToProps)(HcpFormLogin);
