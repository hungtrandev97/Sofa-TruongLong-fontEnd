import React from "react";
import "./ChatBot.css";

function ChatBox() {
  return (
    <div className="chatbox">
      <div className="chatbox_content">
        <a href="http://zalo.me/0966284484" className="chatbox_content_link">
          <img src="/img/default/ZaLo.png" />
        </a>
        <a
          href="https://www.facebook.com/xuongsofa.truonglong/"
          className="chatbox_content_link"
        >
          <img src="/img/default/Fb.png" />
        </a>
        <a href="tel:0966284484" className="chatbox_content_link">
          <img src="/img/default/NumberPhone.png" />
        </a>
      </div>
    </div>
  );
}
export default ChatBox;
