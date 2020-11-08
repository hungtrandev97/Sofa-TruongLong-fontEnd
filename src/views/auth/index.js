/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import LoginPage from "./Login";

import { ACCESS_TOKEN_KEY } from "../../constants/DefaultValues";

class AuthView extends Component {
  render() {
    const { match, loginUser } = this.props;
    if (
      loginUser &&
      localStorage.getItem(ACCESS_TOKEN_KEY) &&
      loginUser.accessToken === localStorage.getItem(ACCESS_TOKEN_KEY)
    ) {
      return <Redirect to="/" />;
    }
    return (
      <Switch>
        <Route exact path={`${match.url}/login`} component={LoginPage} />
        <Redirect from="/" to={`${match.url}/login`} />
      </Switch>
    );
  }
}

AuthView.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  loginUser: PropTypes.shape({
    accessToken: PropTypes.string,
  }),
};

AuthView.defaultProps = {
  match: {
    url: "/admin",
  },
  loginUser: {
    accessToken: "",
  },
};

const mapStateToProps = ({ authRedux }) => {
  const { loginUser } = authRedux;
  return { loginUser };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(AuthView);
