import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormProduct from "./FormProduct";

export default function ProductPage() {
  return (
    <div>
      <HeaderConsumer />
      <FormProduct />
      <FooterConsumer />
    </div>
  );
}
