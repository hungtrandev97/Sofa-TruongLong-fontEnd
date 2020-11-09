import React from "react";
import { Row, Col } from "reactstrap";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuConsumer from "./MenuConsumer";
import "./style.css";

export default function Header() {
  return (
    <div className="HeaderConsumer">
      <div className="HeaderConsumer__account">
        <Link
          to="/auth/login"
          className="HeaderConsumer__account__content screen__Wep"
        >
          Tài Khoản
        </Link>
      </div>
      <Row className="HeaderConsumer__nav screen__Wep">
        <Col md={3} className="HeaderConsumer__nav__logo">
          {" "}
          logo
        </Col>
        <Col md={6} className="HeaderConsumer__nav__search">
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
        <Col md={3} className="HeaderConsumer__nav__numberPhone">
          <div className="HeaderConsumer__nav__card_content">
            <div className="HeaderConsumer__nav__card_content__text">
              <div className="HeaderConsumer__nav__card_content__icon">
                <TiShoppingCart color="#fa3e3f" size="2rem" />
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
