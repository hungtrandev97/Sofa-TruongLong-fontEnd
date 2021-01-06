import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";
import FormDetails from "./FormDetails";

export default function DetailsPage(match) {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <HeaderConsumer />
      <FormDetails match={match} />
      <FooterConsumer />
    </div>
  );
}
