import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Modal, ModalBody, ModalHeader } from "reactstrap";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import MenuConsumer from "./MenuConsumer";
import SideNavPage from "../../Consumer/Layout/MenuMobile";
import FormLogin from "../../Forms/Login";
import Register from "../../Forms/Register";
import { FromAcount } from "../../../constants/DefaultValues";
import { logoutUser } from "../../../store/actions/actions";
import "./style.css";

export default function Header() {
  const dispatch = useDispatch();
  const { loginUser } = useSelector((state) => state.authRedux);
  const [modal, setModal] = useState(false);
  const [typeAcount, setTypeAcount] = useState(FromAcount.LOGIN);
  const toggle = () => setModal(!modal);
  const ChangeIsModal = (ismodal, type) => {
    toggle(true);
    setTypeAcount(type);
  };
  const logoutAcout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="HeaderConsumer">
      <div className="HeaderConsumer__Modal">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {typeAcount === FromAcount.LOGIN ? "ĐĂNG NHẬP" : "Đăng Ký"}
          </ModalHeader>
          <ModalBody>
            {typeAcount === FromAcount.LOGIN ? <FormLogin /> : <Register />}
          </ModalBody>
        </Modal>
      </div>
      {loginUser === null ? (
        <div className="HeaderConsumer__account">
          <button
            onClick={() => ChangeIsModal(true, FromAcount.LOGIN)}
            type="button"
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
        <div className="HeaderConsumer__accountSuccess">
          <div>
            Xin Chào :
            <span
              style={{ padding: "0 5px", color: "009fe3", fontWeight: "bold" }}
            >
              {" "}
              {loginUser.userName}
            </span>
          </div>
          <div>
            <BiLogIn color="rgb(250, 62, 63)" size="1rem" />
            <button
              type="button"
              style={{
                padding: "0 5px",
                color: "rgb(250, 62, 63)",
                fontWeight: "bold",
                lineHeight: 2,
                cursor: "pointer",
                border: "none",
                background: "none",
              }}
              onClick={() => logoutAcout()}
            >
              {" "}
              Đăng Xuất
            </button>
          </div>
        </div>
      )}

      <Row className="HeaderConsumer__nav screen__Wep">
        <Col lg={3} md={3} sm={12} className="HeaderConsumer__nav__logo">
          <div>
            <img
              src="/img/default/logotruonglong.png"
              alt="logo"
              width="100px"
              height="100%"
            />
          </div>
        </Col>

        <Col
          md={0}
          sm={2}
          xs={2}
          className="HeaderConsumer__nav__MenuLeftMobile"
        >
          <SideNavPage />
        </Col>
        <Col
          lg={6}
          md={6}
          sm={7}
          xs={8}
          className="HeaderConsumer__nav__search m-0 p-0"
        >
          <form id="HeaderConsumer__nav__search__input">
            <div>
              <input
                type="text"
                className="HeaderConsumer__nav__search__input__search"
                placeholder="Search"
              />
              <button type="submit" className="btn">
                <AiOutlineSearch color="#fa3e3f" />
              </button>
            </div>
          </form>
        </Col>
        <Col
          lg={3}
          md={3}
          sm={3}
          xs={2}
          className="HeaderConsumer__nav__numberPhone"
        >
          <div className="HeaderConsumer__nav__card_content">
            <div className="HeaderConsumer__nav__card_content__text">
              <div className="HeaderConsumer__nav__card_content__icon">
                <TiShoppingCart color="#fa3e3f" size="2rem" />
                <div className="SpanMobile">
                  <span style={{ color: "#fffff" }}>15</span>
                </div>
              </div>
              <div className="HeaderConsumer__nav__card_content__CartText">
                Giỏ Hàng
                <div>
                  <span style={{ color: "#fa3e3f" }}>0</span>
                  <span> sản phẩm</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <MenuConsumer />
    </div>
  );
}
