import React, { useEffect, useState } from "react";
import "./ChatBot.css";
import { apiGetAllSetting } from "../../../services/setting";

function ChatBox() {
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
  return (
    <div className="chatbox">
      <div className="chatbox_content ">
        <a
          href={`http://zalo.me/${dataSetting.numberPhoneZallo}`}
          className="chatbox_content_link Chatbox__Zalo"
        >
          <img src="/img/default/zalo26122020.png" alt="zaLo" />
        </a>
        <a
          href={`${dataSetting.linkFB}`}
          className="chatbox_content_link Chat__box__FB"
        >
          <img src="/img/default/Fb.png" alt="FaceBook" />
        </a>
        <a
          href={`tel:${dataSetting.numberPhone}`}
          className="chatbox_content_link Chat_Box_Phone"
        >
          <img src="/img/default/NumberPhone.png" alt="NumberPhone" />
        </a>
      </div>
    </div>
  );
}
export default ChatBox;
