import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { PropTypes } from "prop-types";
import HeaderView from '../../components/Consumer/Layout/Header'
import DashboardView from "./Dashboard/index";
import listProfile from "./Produce/ListProfile";

function Home({ match }) {
  return (
    <Switch>
      <HeaderView />
      <Route exact path={`${match.url}/`} component={DashboardView} />
      <Route path={`${match.url}/trang-chu`} component={listProfile} />
      <Redirect to="/error" />
    </Switch>
  );
}

Home.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Home.defaultProps = {
  match: {
    url: "/trang-chu",
  },
};

export default Home;
