import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormScreening from "./FormScreening";

export default function ScreeningPage({ match }) {
  return (
    <div>
      <HeaderConsumer />
      <FormScreening match={match} />
      <FooterConsumer />
    </div>
  );
}
