import React, { useEffect } from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormSaleProduct from "./FormSaleProduct";

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderConsumer />
      <FormSaleProduct />
      <FooterConsumer />
    </div>
  );
}
