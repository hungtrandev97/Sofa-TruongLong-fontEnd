import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter, Switch, Route } from "react-router-dom";
import CategoryPage from "../../components/Admin/CategoryPage";
import ProductPage from "../../components/Admin/ProductPage";
import hcp from "../../components/Admin/hcp";
import BaseAdmin from "../../components/Layout/Admin/BaseAdmin";
import CreateProduct from "../../components/Admin/CreateProduct";

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
              <Route
                path={`${match.url}category`}
                exact
                component={CategoryPage}
              />
              <Route path={`${match.url}productPage`} component={ProductPage} />
              <Route
                path={`${match.url}createProduct`}
                component={CreateProduct}
              />
              <Route path={`${match.url}hcp`} component={hcp} />
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
    pathname: "/admin",
  },
};

export default withRouter(Admin);
