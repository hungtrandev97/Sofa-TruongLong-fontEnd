import React from "react";
import { node, shape, string } from "prop-types";
import { matchPath } from "react-router-dom";
import _ from "lodash";
import HeaderConsumer from "./HeaderConsumer";
import FooterConsumer from "./FooterConsumer";
import SliderComsumer from "./SliderConsumer";
import NotFoundPage from "../../../views/404/404";

function BaseConsumer({ children, location, match }) {
  const reportMatch = matchPath(location.pathname, {
    path: "/",
    exact: true,
    strict: false,
  });
  let childComponent = (
    <>
      <HeaderConsumer match={match} location={location} />
      {location.pathname === "/admin" ? "" : <SliderComsumer />}
      <section>{children}</section>
    </>
  );

  if (
    reportMatch &&
    reportMatch.params &&
    reportMatch.params.memberId &&
    reportMatch.params.sampleId
  ) {
    if (
      _.isNaN(Number(reportMatch.params.memberId)) ||
      _.isNaN(Number(reportMatch.params.sampleId))
    ) {
      childComponent = (
        <>
          <NotFoundPage />
        </>
      );
    } else {
      childComponent = (
        <>
          <section>{children}</section>
        </>
      );
    }
  }
  return (
    <div className="wrapper">
      {childComponent}
      {location.pathname === "/admin" ? "" : <FooterConsumer />}
    </div>
  );
}

BaseConsumer.propTypes = {
  children: node.isRequired,
  match: shape({
    path: string,
  }).isRequired,
  location: shape({
    pathname: string,
  }).isRequired,
};

export default BaseConsumer;
