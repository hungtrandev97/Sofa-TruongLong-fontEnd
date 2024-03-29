import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import history from "./history";
import { ROLE, ACCESS_TOKEN_KEY } from "./constants/DefaultValues";
import ErrorView from "./views/404/404";
import AdminView from "./views/Admin/index";
import MainView from "./views/index";
import DashboardView from "./views/dashboard/index";

const auth = {
  isAuthenticated: false,
};

const PrivateRoute = ({ component: Component, roles, loginUser, path }) => (
  <Route
    path={path}
    render={(props) => {
      if (auth.isAuthenticated) {
        if (roles && roles.indexOf(loginUser.role) === -1) {
          return <Redirect to={{ pathname: "/" }} />;
        }
        return <Component />;
      }
      return (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      );
    }}
  />
);
PrivateRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.number),
  component: PropTypes.elementType.isRequired,
  loginUser: PropTypes.shape({
    role: PropTypes.number,
  }),
  location: PropTypes.shape({}),
  path: PropTypes.string,
};
PrivateRoute.defaultProps = {
  roles: [],
  loginUser: {},
  location: {},
  path: "",
};

const Routes = (props) => {
  const { loginUser } = props;

  auth.isAuthenticated =
    loginUser &&
    localStorage.getItem(ACCESS_TOKEN_KEY) &&
    loginUser.accessToken === localStorage.getItem(ACCESS_TOKEN_KEY);

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          path="/admin"
          roles={[ROLE.ADMIN]}
          loginUser={loginUser}
          component={AdminView}
        />
        <Route path="/" exact component={MainView} />
        <Route path="/trang-chu" component={DashboardView} />
        <Route path="/error" component={ErrorView} />
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  loginUser: PropTypes.shape({
    accessToken: PropTypes.string,
  }),
};
Routes.defaultProps = {
  loginUser: {},
};
const mapStateToProps = ({ authRedux }) => {
  const { loginUser } = authRedux;
  return { loginUser };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Routes));
