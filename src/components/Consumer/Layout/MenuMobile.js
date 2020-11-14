import React, { useState } from "react";
import {
  BiMenu,
  BiCaretDown,
  BiChevronRight,
  BiPhoneCall,
} from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { BsPeopleCircle, BsPersonLinesFill } from "react-icons/bs";
import "./MenuMobile.css";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenListProduct, setIsOpenListProduct] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  const OpenListProduct = () => {
    setIsOpenListProduct(!isOpenListProduct);
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
              <BsPersonLinesFill size="1.2rem" color="rgb(250, 62, 63)" />
              <span>Giới Thiệu</span>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Product">
              <button
                type="button"
                className="m-0 p-0"
                onClick={() => OpenListProduct()}
              >
                <FaShoppingCart size="1.2rem" color="rgb(250, 62, 63)" />
                <span className="MenuMobile__Content_UlMenuleft__Product__span">
                  Danh Mục Sản Phẩm
                </span>
                <span className="MenuMobile__Content_UlMenuleft__Product__icon">
                  <BiCaretDown size="1rem" />
                </span>
              </button>

              <ul
                className="MenuMobile__Content_UlMenuleft__ProductUL"
                style={{ display: `${isOpenListProduct ? "block" : "none"}` }}
              >
                <li>
                  <BiChevronRight size="1rem" />
                  <Link to="/">Page 1</Link>
                </li>
                <li>
                  <BiChevronRight size="1rem" />
                  <Link to="/">Page 2</Link>
                </li>
                <li>
                  <BiChevronRight size="1rem" />
                  <Link to="/">Page 3</Link>
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
