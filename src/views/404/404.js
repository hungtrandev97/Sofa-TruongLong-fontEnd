/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ConsumerHeader from "../../components/Layout/consumer/ConsumerHeader";
import ConsumerFooter from "../../components/Layout/consumer/ConsumerFooter";
import { ROLE } from "../../constants/DefaultValues";
import "./404.css";

function ErrorPage() {
  const history = useHistory();
  const { loginUser } = useSelector((state) => state.authRedux);
  let Header = <></>;
  let goBack = (
    <a className="errorPage__btnBack" href="/home">
      Onebiome.com
    </a>
  );
  if (loginUser && loginUser.role) {
    if (loginUser.role === ROLE.PATIENT) {
      Header = <ConsumerHeader />;
      goBack = (
        <a className="errorPage__btnBack" href="/consumer/profiles">
          Onebiome.com
        </a>
      );
    } else if (loginUser.role === ROLE.HCP) {
      goBack = (
        <a className="errorPage__btnBack" href="/hcp">
          Onebiome.com
        </a>
      );
    }
  }
  return (
    <div className="errorPage">
      {Header}
      <div className="errorPage__content">
        <img
          src="/img/errorPage.png"
          className="errorPage__content__image"
          alt="Logo"
        />
        <h2 className="errorPage__content__Title font-ob-bold">
          PAGE NOT FOUND
        </h2>
        <p className="errorPage__content__descript">
          The page you are looking for doesn't exist or an error occured. Please
          click
          <button
            type="button"
            className="errorPage__content__descript__btn"
            onClick={() => {
              history.goBack();
            }}
          >
            "Go Back"
          </button>
          or return to
          {goBack}
          to select a new page.
        </p>
        <button
          type="button"
          className="errorPage__content__btnBack"
          onClick={() => {
            history.goBack();
          }}
        >
          Go Back
        </button>
        <ConsumerFooter />
      </div>
    </div>
  );
}

export default ErrorPage;
