import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { DataProduct } from "./Data";
import "./Cart.css";

export default function FormCart() {
  const [quatity, setQuatity] = useState(1);
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="Cart__Form">
        <ChatBox />
        <Row
          className="m-0 d-0"
          style={{ width: "100%", paddingBottom: "30px" }}
        >
          <Col lg={8} md={8} ms={12} xs={12}>
            <div style={{ paddingBottom: "15px" }}>
              <div className="Header__left__Cart">
                <input type="checkbox" className="Header__left__Cart__input" />
                <div className="Header__left__Cart__Title">
                  Chọn tất cả sản phẩm
                </div>
                <div className="Header__left__Cart__Remove">
                  <RiDeleteBinLine
                    size="1.2rem"
                    style={{ marginBottom: "5px" }}
                  />
                  <span>Xóa</span>
                </div>
              </div>
            </div>
            <div className="Content__left__Cart">
              <div className="Content__left__Cart__Image">
                <input
                  type="checkbox"
                  className="Content__left__Cart__input"
                  style={{ marginTop: "40px" }}
                />
                <img
                  className="Content__left__Cart__img"
                  src="/img/product/imageProduct.jpg"
                  alt="img"
                  style={{ width: "100px", paddingLeft: "15px" }}
                />
              </div>
              <div className="Content__left__Cart__content">
                <div className="Content__left__Cart__content__title">
                  ghế sofa gia re
                </div>
                <div className="Content__left__Cart__content__Source">
                  <span>MSP-</span>
                  <span>234234</span>
                </div>
                <div className="Content__left__Cart__content__Price">
                  <div className="Content__left__Cart__content__Price__promotional">
                    <span>10.999.000vnđ</span>
                  </div>
                </div>
                <div className="quantity-input">
                  <button
                    type="button"
                    disabled={`${quatity < 2 ? "disabled" : ""}`}
                    className="quantity-input__modifier quantity-input__modifier--left"
                    onClick={() => {
                      setQuatity(quatity - 1);
                    }}
                  >
                    &mdash;
                  </button>
                  <input
                    className="quantity-input__screen"
                    type="text"
                    value={quatity}
                    readOnly
                  />
                  <button
                    type="button"
                    className="quantity-input__modifier quantity-input__modifier--right"
                    onClick={() => {
                      setQuatity(quatity + 1);
                    }}
                  >
                    &#xff0b;
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} ms={12} xs={12}>
            <div className="Content__right__Cart">
              <div className="right__Cart__Header">
                <span>Địa điểm </span>
                <div className="right__Cart__Header__Address">
                  <BiMap size="1.2rem" color="#666" />
                  <span> Hồ Chí Minh, Quận Bình Thạnh, Phường 11 </span>
                </div>
              </div>
              <div className="right__Cart__Content">
                <span>Thông tin đơn hàng</span>
                <div className="right__Cart__Content__Price">
                  <span>Tạm tính (0 Sản phẩm)</span>
                  <b>0 đ</b>
                </div>
                <div className="right__Cart__Content__Fees">
                  <span>Phí giao hàng</span>
                  <b>0 đ</b>
                </div>
                <div className="right__Cart__Content__Total">
                  <span>Tổng cộng</span>
                  <b>0 đ</b>
                </div>
                <button type="button" className="right__Cart__Content__Button">
                  XÁC NHẬN GIỎ HÀNG
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="Cart__Relate">
          <div className="Cart__Relate__Tittle">
            <span>Dành riêng cho bạn</span>
          </div>
          <Row className="Cart__Relate__Product">
            {DataProduct.map((DataCart, index) => {
              return (
                <Col key={index} lg={3} md={4} ms={6} xs={6}>
                  <img
                    className="Sale__Product__img"
                    src="/img/Hot .gif"
                    alt="img"
                  />
                  <ItemProduct
                    className="Sale__Product__Data"
                    title={DataCart.product_tiile}
                    SouceProduct={DataCart.product_code}
                    price={DataCart.produc_price}
                    pricePromotional=""
                    imageMain={DataCart.img}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
