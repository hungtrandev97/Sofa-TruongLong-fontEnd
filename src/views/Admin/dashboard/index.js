import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import DashboardAdminView from "./dashboard";

function Dashboard(props) {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={DashboardAdminView} />
    </Switch>
  );
}

Dashboard.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Dashboard.defaultProps = {
  match: {
    url: "/",
  },
};

export default Dashboard;
