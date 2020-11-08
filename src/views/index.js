/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ROLE, ACCESS_TOKEN_KEY } from "../constants/DefaultValues";

class Main extends Component {
  render() {
    const { loginUser } = this.props;
    let redirectPath;
    if (
      loginUser &&
      localStorage.getItem(ACCESS_TOKEN_KEY) &&
      loginUser.accessToken === localStorage.getItem(ACCESS_TOKEN_KEY)
    ) {
      if (loginUser.role === ROLE.PATIENT) {
        redirectPath = "/trang-chu";
      } else if (loginUser.role === ROLE.ADMIN) {
        redirectPath = "/admin";
      }
    }
    if (redirectPath) {
      return <Redirect to={redirectPath} />;
    }
    return <Redirect to="/trang-chu" />;
  }
}

const mapStateToProps = ({ authRedux }) => {
  const { loginUser } = authRedux;
  return { loginUser };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Main);
