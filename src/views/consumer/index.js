import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { PropTypes } from "prop-types";
import HeaderView from '../../components/Consumer/Layout/Header'
import DashboardView from "../consumer/Dashboard/index";

function Home({ match }) {
  return (
    <HeaderView>
      <Switch>
        <Route exact path={`${match.url}/`} component={DashboardView} />
        <Redirect to="/error" />
      </Switch>
    </HeaderView>
    
  );
}

Home.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Home.defaultProps = {
  match: {
    url: "",
  },
};

export default Home;
