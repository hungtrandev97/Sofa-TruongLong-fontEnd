import React, { useEffect, useState } from "react";
import LoginSwiper from "./SlidesLayout";
import { apiGetAllSetting } from "../../../services/setting";
import "./SliderConsumer.css";

const SliderConsumer = () => {
  const [dataSetting, setDataSetting] = useState([]);
  useEffect(() => {
    const GetAllSetting = async () => {
      const dataGetAllSetting = await apiGetAllSetting();
      if (dataGetAllSetting && dataGetAllSetting.data) {
        setDataSetting(dataGetAllSetting.data[0]);
      }
    };
    GetAllSetting();
  }, []);
  const slides = [
    {
      image: `${dataSetting.imageSlider1}`,
    },
    {
      image: `${dataSetting.imageSlider2}`,
    },
    {
      image: `${dataSetting.imageSlider3}`,
    },
  ];
  return (
    <div className="SliderConsumer">
      <div className="SliderConsumer_Slider p-0 m-0">
        <LoginSwiper slides={slides} />
      </div>
    </div>
  );
};

export default SliderConsumer;
