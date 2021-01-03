import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import CategoryPage from "../../components/Admin/CategoryPage";
import EditAccountConsumer from "../../components/Admin/EditAccountConsumer";
import ProductPage from "../../components/Admin/ProductPage";
import BaseAdmin from "../../components/Layout/Admin/BaseAdmin";
import CreateProduct from "../../components/Admin/CreateProduct";
import OderPage from "../../components/Admin/OderPage";
import AccountManagement from "../../components/Admin/AccountManagement";
import Statistical from "../../components/Admin/Statistical";
import SettingAdmin from "../../components/Admin/SettingAdmin";
import CreateAccountManagement from "../../components/Admin/CreateAccountManagement";
import EditProduct from "../../components/Admin/EditProduct";
import EditCategory from "../../components/Admin/EditCategory";
import EditOder from "../../components/Admin/EditOder";
import EditAccountManagement from "../../components/Admin/EditAccountManagement";
import AccountCustomer from "../../components/Admin/AccountCustomer";
import CreateAccountCustomer from "../../components/Admin/CreateAccountCustomer";
import Contact from "../../components/Admin/Contact";
import editSetting from "../../components/Admin/editSetting";
import DetailOder from "../../components/Admin/DetailOder";

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
                path={`${match.url}/editCategory/:idCategory`}
                component={EditCategory}
              />
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
                component={EditProduct}
              />
              <Route path={`${match.url}/OderPage`} component={OderPage} />
              <Route path={`${match.url}/EditOder/:id`} component={EditOder} />
              <Route
                path={`${match.url}/DetailOder/:id`}
                component={DetailOder}
              />
              <Route
                path={`${match.url}/AccountManagement`}
                component={AccountManagement}
              />

              <Route
                path={`${match.url}/CreateAccountManagement`}
                component={CreateAccountManagement}
              />
              <Route
                path={`${match.url}/EditAccountManagement/:idAccount`}
                component={EditAccountManagement}
              />
              <Route
                path={`${match.url}/EditAccountConsumer/:idAccount`}
                component={EditAccountConsumer}
              />
              <Route
                path={`${match.url}/AccountCustomer`}
                component={AccountCustomer}
              />
              <Route
                path={`${match.url}/CreateAccountCustomer`}
                component={CreateAccountCustomer}
              />
              <Route
                path={`${match.url}/Statistical`}
                component={Statistical}
              />

              <Route
                path={`${match.url}/SettingAdmin`}
                component={SettingAdmin}
              />
              <Route
                path={`${match.url}/editSetting`}
                component={editSetting}
              />
              <Route path={`${match.url}/Contact`} component={Contact} />

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
