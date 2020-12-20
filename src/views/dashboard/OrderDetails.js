import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormOderDetails from "./FormOderDetails";

export default function OrderDetails() {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <HeaderConsumer />
      <FormOderDetails />
      <FooterConsumer />
    </div>
  );
}
