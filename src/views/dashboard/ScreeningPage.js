import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormScreening from "./FormScreening";

export default function ScreeningPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { numberPrice } = useSelector((state) => state.productRedux);
  return (
    <div>
      <HeaderConsumer />
      <FormScreening price={numberPrice} />
      <FooterConsumer />
    </div>
  );
}
