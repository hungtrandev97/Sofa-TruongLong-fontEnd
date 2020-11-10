import React, { useState } from "react";
import { BiMenu, BiCaretDown } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

import "./MenuMobile.css";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="MenuMobile">
      <div className="MenuMobile__icon">
        <BiMenu size="1.5rem" color="#fff" onClick={() => showMenu()} />
      </div>
      <div
        className="MenuMobile__content"
        style={{ display: `${isOpen ? "block" : "none"}` }}
      >
        <div className="MenuMobile__Content_UlMenuleft">
          <div className="MenuMobile__Content_UlMenuleft__Nav">
            <div className="MenuMobile__Content_UlMenuleft__Icon">
              <CgCloseO
                onClick={() => showMenu()}
                color="rgb(250, 62, 63)"
                size="1.6rem"
              />
            </div>
            <div className="MenuMobile__Content_UlMenuleft__LoginLoguot">
              <a>ICON</a>
              <a>Đăng Nhập</a>
              <a>Đăng Ký</a>
            </div>
          </div>

          <div className="MenuMobile__Content_UlMenuleft__Data">
            <div className="MenuMobile__Content_UlMenuleft__Home">
              Trang Chủ
            </div>
            <div className="MenuMobile__Content_UlMenuleft__About">
              Giới Thiệu
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Product">
              <div>
                <span>Sản Phẩm </span>
                <span>
                  <BiCaretDown size="1rem" />
                </span>
              </div>

              <ul className="MenuMobile__Content_UlMenuleft__ProductUL">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="MenuMobile__icon__Bg"
          onKeyPress=""
          onClick={() => showMenu()}
          role="button"
          tabIndex="0"
        >
          .
        </div>
      </div>
    </div>
  );
};
export default MenuMobile;
