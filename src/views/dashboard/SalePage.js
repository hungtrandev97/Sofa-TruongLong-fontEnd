import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";

export default function ProductPage() {
  return (
    <div>
      <HeaderConsumer />
      <span style={{ paddingTop: "143px" }}>Sale</span>
      <FooterConsumer />
    </div>
  );
}
