import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormSaleProduct from "./FormSaleProduct";

export default function ProductPage() {
  return (
    <div>
      <HeaderConsumer />
      <FormSaleProduct />
      <FooterConsumer />
    </div>
  );
}
