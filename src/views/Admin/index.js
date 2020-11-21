import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import CategoryPage from "../../components/Admin/CategoryPage";
import ProductPage from "../../components/Admin/ProductPage";
import BaseAdmin from "../../components/Layout/Admin/BaseAdmin";
import CreateProduct from "../../components/Admin/CreateProduct";
import OderPage from "../../components/Admin/OderPage";
import AdminAccountManagement from "../../components/Admin/AdminAccountManagement";
import Statistical from "../../components/Admin/Statistical";
import SettingAdmin from "../../components/Admin/SettingAdmin";
import CreateAccountManagement from "../../components/Admin/CreateAccountManagement";

function Admin({ location, match }) {
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
                to={`${match.url}/category`}
              />
              <Route path={`${match.url}/category`} component={CategoryPage} />
              <Route
                path={`${match.url}/productPage`}
                component={ProductPage}
              />
              <Route
                path={`${match.url}/createProduct`}
                component={CreateProduct}
              />
              <Route
                path={`${match.url}/editProduct/:idProduct`}
                component={CreateProduct}
              />
              <Route path={`${match.url}/OderPage`} component={OderPage} />
              <Route
                path={`${match.url}/AdminAccountManagement`}
                component={AdminAccountManagement}
              />
              <Route
                path={`${match.url}/CreateAccountManagement`}
                component={CreateAccountManagement}
              />
              <Route
                path={`${match.url}/Statistical`}
                component={Statistical}
              />

              <Route
                path={`${match.url}/SettingAdmin`}
                component={SettingAdmin}
              />
              <Redirect to="/error" />
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
    pathname: "/admin/category",
  },
};

export default withRouter(Admin);
