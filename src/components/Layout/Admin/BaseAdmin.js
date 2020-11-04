import React from "react";
import { node } from "prop-types";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

function BaseAdmin(props) {
  const { children } = props;
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <section className="section-container">{children}</section>
      <Footer />
    </div>
  );
}

BaseAdmin.propTypes = {
  children: node.isRequired,
};

export default BaseAdmin;
