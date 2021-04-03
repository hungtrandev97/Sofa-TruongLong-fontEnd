import React, { useEffect } from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormOderDetails from "./FormOderDetails";

export default function OrderDetails({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <HeaderConsumer />
      <FormOderDetails location={location} />
      <FooterConsumer />
    </div>
  );
}
