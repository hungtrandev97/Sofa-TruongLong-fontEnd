/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthView from "./components/middlewares/auth";

// App Routes
import Routes from "./Routes";

// Vendor dependencies
import "./Vendor";
// Application Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.scss";
import "./styles/app.scss";

class App extends Component {
  render() {
    // specify base href from env varible 'PUBLIC_URL'
    // use only if application isn't served from the root
    // for development it is forced to root only
    const basename =
      process.env.NODE_ENV === "development"
        ? "/"
        : process.env.PUBLIC_URL || "/";

    return (
      <BrowserRouter basename={basename}>
        <AuthView />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
