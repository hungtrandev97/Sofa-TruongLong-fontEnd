import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormProduct from "./FormProduct";

export default function ProductPage({ location }) {
  return (
    <div>
      <HeaderConsumer />
      <FormProduct location={location} />
      <FooterConsumer />
    </div>
  );
}
