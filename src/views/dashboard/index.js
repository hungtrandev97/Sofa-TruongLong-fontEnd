import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { PropTypes } from "prop-types";
import BaseConsumer from "../../components/Layout/consumer/BaseConsumer";
import HomePage from "../../components/Consumer/HomePage";

function Home({ location, match }) {
  return (
    <BaseConsumer location={location} match={match}>
      <Switch>
        <Route exact path={`${match.url}/`} component={HomePage} />
        <Redirect to="/error" />
      </Switch>
    </BaseConsumer>
  );
}

Home.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Home.defaultProps = {
  match: {
    url: "/trang-chu",
  },
  location: {
    pathname: "/",
  },
};

export default Home;
