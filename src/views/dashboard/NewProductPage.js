import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormNewProduct from "./FromNewProduct";

export default function NewProductPage() {
  return (
    <div>
      <HeaderConsumer />
      <FormNewProduct />
      <FooterConsumer />
    </div>
  );
}
