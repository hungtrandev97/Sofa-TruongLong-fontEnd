import React from "react";
import HeaderConsumer from "../../components/Layout/Consumer/HeaderConsumer";
import FormContact from "./FormContact";
import FooterConsumer from "../../components/Layout/Consumer/FooterConsumer";

export default function Contact() {
  return (
    <div>
      <HeaderConsumer />
      <FormContact />
      <FooterConsumer />
    </div>
  );
}
