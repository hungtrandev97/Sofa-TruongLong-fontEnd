import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

// import './i18n';

import configureStore from "./store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("app")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
