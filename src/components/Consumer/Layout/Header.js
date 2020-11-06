import React from 'react'
import { Row, Col } from "reactstrap";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillPhone } from "react-icons/ai";
// import { Link } from "react-router-dom";
import "./style.css"

export default function Header() {
  return (
    <div className="HeaderConsumer">
        <div className="HeaderConsumer__account">
          <b className="HeaderConsumer__account__content"> Tài Khoản </b>
        </div>
        <Row className="HeaderConsumer__nav">
          <Col md={3} className="HeaderConsumer__nav__logo"> logo</Col>
          <Col md={5} className="HeaderConsumer__nav__search"> search</Col>
          <Col md={2} className="HeaderConsumer__nav__numberPhone">
            <div className="HeaderConsumer__nav__numberPhone__content">
                <img src="/img/default/hotline.png" />
            </div>
          </Col>
          <Col md={2} className="m-0 p-0 HeaderConsumer__nav__card"> 
            <div className="HeaderConsumer__nav__card_content">
              <div className="HeaderConsumer__nav__card_content__text">
                <div>
                  Giỏ Hàng
                </div>
                <span> 0 sản phẩm</span>
              </div>
              <div className="HeaderConsumer__nav__card_content__icon">
                <TiShoppingCart color="#fff" size="2rem" />
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}
