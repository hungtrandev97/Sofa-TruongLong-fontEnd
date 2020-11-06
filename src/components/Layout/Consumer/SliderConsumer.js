import React from "react";
import LoginSwiper from "./SlidesLayout";
import "./SliderConsumer.css";

const slides = [
  {
    image: "/img/consumer/slider1.jpg",
  },
  {
    image: "/img/consumer/slider2.jpg",
  },
  {
    image: "/img/consumer/slider3.jpg",
  },
];

const SliderConsumer = () => {
  return (
    <div className="SliderConsumer">
      <div className="SliderConsumer__Menu">
        <div>ascascasca</div>
        <div>ascascasca</div>
        <div>ascascasca</div>
        <div>ascascasca</div>
        <div>ascascasca</div>
      </div>
      <div className="SliderConsumer_Slider p-0 m-0 d-none d-md-block">
        <LoginSwiper slides={slides} />
      </div>
    </div>
  );
};

export default SliderConsumer;
