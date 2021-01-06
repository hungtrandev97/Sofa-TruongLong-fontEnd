/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import ProductCart from "../../components/Consumer/Layout/ProductCart";
import MenuCart from "../../components/Consumer/Layout/MenuCart";
import { apiGetAllProductSale } from "../../services/product";
import "./Cart.css";

export default function FormCart() {
  const { cartData, inforConsumer } = useSelector((state) => state.cartRedux);
  const [dataProductSale, setDataProductSale] = useState([]);
  const getAllProductSale = async () => {
    const response = await apiGetAllProductSale();
    if (response && response.data) {
      setDataProductSale(response.data);
    }
  };
  useEffect(() => {
    getAllProductSale();
  }, []);
  let totaiPrice = 0;
  const countCart = cartData.length;
  cartData.forEach((item) => {
    totaiPrice += item.product_priceNumber_sale * item.quanity;
  });
  return (
    <div
      className="screen__Wep"
      style={{ paddingTop: "143px", overflowX: "hidden" }}
    >
      <div className="Cart__Form">
        <ChatBox />
        <Row
          className="m-0 d-0 Cart__Form__Row "
          style={{ width: "100%", paddingBottom: "30px" }}
        >
          <Col lg={8} md={8} ms={12} xs={12}>
            <ProductCart
              titlePage="Giỏ Hàng Của Bạn"
              cartData={cartData}
              pageMain="cartMe"
            />
          </Col>
          <Col
            lg={4}
            md={4}
            ms={12}
            xs={12}
            className="Content__right__Cart__Col"
          >
            <MenuCart
              inforConsumer={inforConsumer}
              price={totaiPrice}
              Total={totaiPrice}
              countCart={countCart}
              buttonMenu="FormCart"
            />
          </Col>
        </Row>
        <div className="Cart__Relate">
          <div className="Cart__Relate__Tittle">
            <span>Dành riêng cho bạn</span>
          </div>
          {dataProductSale.length > 0 ? (
            <Row className="Cart__Relate__Product">
              {dataProductSale.map((DataSale, index) => {
                return (
                  <Col key={index} lg={3} md={4} ms={6} xs={6}>
                    <ItemProduct
                      className="Sale__Product__Data"
                      idProduct={DataSale._id}
                      title={DataSale.product_title}
                      SouceProduct={DataSale.product_code}
                      price={DataSale.product_price}
                      pricePromotional={DataSale.product_price_sale}
                      imageMain={DataSale.product_imageMain}
                      product_priceNumber={DataSale.product_priceNumber}
                      product_priceNumber_sale={
                        DataSale.product_priceNumber_sale
                      }
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <div
              style={{
                textAlign: "center",
                paddingBottom: "30px",
                color: "red",
                fontSize: "13px",
                paddingTop: "15px",
              }}
            >
              Chưa Có Sản phẩm
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
