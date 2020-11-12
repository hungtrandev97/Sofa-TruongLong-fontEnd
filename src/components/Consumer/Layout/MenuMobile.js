import React, { useState } from "react";
import {
  BiMenu,
  BiCaretDown,
  BiChevronRight,
  BiPhoneCall,
} from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { FaHome, FaMicrophoneAlt } from "react-icons/fa";
import { BsPeopleCircle } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
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
              <div className="MenuMobile__LoginLoguot__icon">
                <BsPeopleCircle size="2rem" color="rgb(250, 62, 63)" />
              </div>
              <div className="MenuMobile__LoginLoguot__Login">Đăng Nhập</div>
              <div className="MenuMobile__LoginLoguot__Register">Đăng Ký</div>
            </div>
          </div>

          <div className="MenuMobile__Content_UlMenuleft__Data">
            <div className="MenuMobile__Content_UlMenuleft__Home">
              <FaHome size="1.3rem" color="rgb(250, 62, 63)" />
              <span>Trang Chủ</span>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__About">
              <FaMicrophoneAlt size="1.2rem" color="rgb(250, 62, 63)" />
              <span>Giới Thiệu</span>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Product">
              <div>
                <GiShoppingCart size="1.2rem" color="rgb(250, 62, 63)" />
                <span className="MenuMobile__Content_UlMenuleft__Product__span">
                  Sản Phẩm
                </span>
                <span className="MenuMobile__Content_UlMenuleft__Product__icon">
                  <BiCaretDown size="1rem" />
                </span>
              </div>

              <ul className="MenuMobile__Content_UlMenuleft__ProductUL">
                <li>
                  <BiChevronRight size="1rem" />
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <BiChevronRight size="1rem" />
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <BiChevronRight size="1rem" />
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Contact">
              <BiPhoneCall size="1.2rem" color="rgb(250, 62, 63)" />
              <span>Liên Hệ</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="MenuMobile__icon__Bg"
          onClick={() => showMenu()}
        >
          .
        </button>
      </div>
    </div>
  );
};
export default MenuMobile;
