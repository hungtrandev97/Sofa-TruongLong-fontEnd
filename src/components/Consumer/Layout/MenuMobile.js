import React, { useState, useEffect } from "react";
import {
  BiMenu,
  BiCaretDown,
  BiChevronRight,
  BiPhoneCall,
  BiLogIn,
} from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { BsPeopleCircle, BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FromAcount } from "../../../constants/DefaultValues";
import FormLogin from "../../Forms/Login";
import Register from "../../Forms/Register";
import { logoutUser, getAllCategory } from "../../../store/actions/actions";

import "./MenuMobile.css";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenListProduct, setIsOpenListProduct] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  const OpenListProduct = () => {
    setIsOpenListProduct(!isOpenListProduct);
  };

  const [modal, setModal] = useState(false);
  const [typeAcount, setTypeAcount] = useState(FromAcount.LOGIN);
  const toggle = () => setModal(!modal);
  const ChangeIsModal = (ismodal, type) => {
    toggle(true);
    setTypeAcount(type);
  };
  const dispatch = useDispatch();
  const logoutAcout = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const { loginUser } = useSelector((state) => state.authRedux);
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
              <div className="HeaderConsumer__Modal">
                <Modal isOpen={modal && loginUser} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    {typeAcount === FromAcount.LOGIN ? "ĐĂNG NHẬP" : "Đăng Ký"}
                  </ModalHeader>
                  <ModalBody>
                    {typeAcount === FromAcount.LOGIN ? (
                      <FormLogin />
                    ) : (
                      <Register />
                    )}
                  </ModalBody>
                </Modal>
              </div>
              <div className="MenuMobile__LoginLoguot__icon">
                <BsPeopleCircle size="2rem" color="#ffff" />
              </div>
              {loginUser === null ? (
                <div className="MenuMobile__Acount">
                  <button
                    type="button"
                    onClick={() => ChangeIsModal(true, FromAcount.LOGIN)}
                  >
                    Đăng Nhập
                  </button>
                  <button
                    onClick={() => ChangeIsModal(true, FromAcount.REGISTER)}
                    type="button"
                  >
                    Đăng Ký
                  </button>
                </div>
              ) : (
                <div className="MenuLeft__accountSuccess">
                  Xin Chào :
                  <span
                    style={{
                      padding: "0 5px",
                      color: "009fe3",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {loginUser.userName}
                  </span>
                </div>
              )}
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
                {dataCategory.map((Data, index) => {
                  return (
                    <li key={index}>
                      <BiChevronRight size="1rem" />
                      <Link to="/">{Data.category_title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Contact">
              <BiPhoneCall size="1.2rem" color="rgb(250, 62, 63)" />
              <span>Liên Hệ</span>
            </div>
            {loginUser === null ? (
              ""
            ) : (
              <div className="MenuLetf__AcountLogout">
                <BiLogIn color="rgb(250, 62, 63)" size="1rem" />
                <button type="button" style={{}} onClick={() => logoutAcout()}>
                  {" "}
                  Đăng Xuất
                </button>
              </div>
            )}
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
