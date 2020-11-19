import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter, Switch, Route } from "react-router-dom";
import CategoryPage from "../../components/Admin/CategoryPage";
import ProductPage from "../../components/Admin/ProductPage";
import hcp from "../../components/Admin/hcp";
import BaseAdmin from "../../components/Layout/Admin/BaseAdmin";
import CreateProduct from "../../components/Admin/CreateProduct";
import OderPage from "../../components/Admin/OderPage";
import AdminAccountManagement from "../../components/Admin/AdminAccountManagement";
import Statistical from "../../components/Admin/Statistical";
import SettingAdmin from "../../components/Admin/SettingAdmin";

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
              <Route exact path={`${match.url}`} component={CategoryPage} />
              <Route
                exact
                path={`${match.url}/productPage`}
                component={ProductPage}
              />
              <Route
                exact
                path={`${match.url}/createProduct`}
                component={CreateProduct}
              />
              <Route
                exact
                path={`${match.url}/OderPage`}
                component={OderPage}
              />
              <Route
                exact
                path={`${match.url}/AdminAccountManagement`}
                component={AdminAccountManagement}
              />
              <Route
                exact
                path={`${match.url}/Statistical`}
                component={Statistical}
              />

              <Route
                exact
                path={`${match.url}/SettingAdmin`}
                component={SettingAdmin}
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
    pathname: "/admin",
  },
};

export default withRouter(Admin);
