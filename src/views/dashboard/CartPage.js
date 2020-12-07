import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormCart from "./FormCart";

export default function CartPage() {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <HeaderConsumer />
      <FormCart />
      <FooterConsumer />
    </div>
  );
}
