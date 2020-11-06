import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter, Switch, Redirect } from "react-router-dom";
import BaseAdmin from "../../components/Layout/admin/BaseAdmin";

function Admin(props) {
  const { location, match } = props;
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };
  const animationName = "rag-fadeIn";
  return (
    <BaseAdmin>
      <TransitionGroup>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames={animationName}
          exit={false}
        >
          <div>
            <Switch location={location}>
              <Redirect
                exact
                from={`${match.url}`}
                to={`${match.url}/consumers`}
              />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </BaseAdmin>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Admin.defaultProps = {
  match: {
    url: "/admin",
  },
  location: {
    pathname: "/admin/dashboard",
  },
};

export default withRouter(Admin);
