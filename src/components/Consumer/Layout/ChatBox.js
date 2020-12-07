import React from "react";
import "./ChatBot.css";

function ChatBox() {
  return (
    <div className="chatbox">
      <div className="chatbox_content ">
        <a
          href="http://zalo.me/0966284484"
          className="chatbox_content_link Chatbox__Zalo"
        >
          <img src="/img/default/ZaLo.png" alt="ZaLo" />
        </a>
        <a
          href="https://www.facebook.com/xuongsofa.truonglong/"
          className="chatbox_content_link Chat__box__FB"
        >
          <img src="/img/default/Fb.png" alt="FaceBook" />
        </a>
        <a
          href="tel:0966284484"
          className="chatbox_content_link Chat_Box_Phone"
        >
          <img src="/img/default/NumberPhone.png" alt="NumberPhone" />
        </a>
      </div>
    </div>
  );
}
export default ChatBox;
