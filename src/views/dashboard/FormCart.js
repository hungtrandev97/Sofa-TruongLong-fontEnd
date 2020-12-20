import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import ProductCart from "../../components/Consumer/Layout/ProductCart";
import MenuCart from "../../components/Consumer/Layout/MenuCart";
import { apiGetAllProductSale } from "../../services/product";
import "./Cart.css";

export default function FormCart() {
  const [dataProductSale, setDataProductSale] = useState([]);
  const getAllProductSale = async () => {
    const response = await apiGetAllProductSale();
    setDataProductSale(response.data);
  };
  useEffect(() => {
    getAllProductSale();
  });
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="Cart__Form">
        <ChatBox />
        <Row
          className="m-0 d-0 Cart__Form__Row "
          style={{ width: "100%", paddingBottom: "30px" }}
        >
          <Col lg={8} md={8} ms={12} xs={12}>
            <ProductCart
              titlePage="Chon Tất Cả"
              titleProduct="Ghế Sofa "
              SouceProduct="1"
              price="10.000.000"
              imageMain="Hình"
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
              CustomerName="Hưng Khánh Trần"
              Address="Krông Năng-Đăk Lắk"
              Phone="012365489"
              price="10.000.000"
              DeliveryCharges="50.000"
              Total="10.050.000"
              buttonMenu="FormCart"
            />
          </Col>
          <Link to="/don-hang-cua-ban">
            <button
              type="button"
              style={{
                background: "red",
                color: "#ffff",
                border: "none",
                fontSize: "14px",
              }}
            >
              Xem Đơn Hàng
            </button>
          </Link>
        </Row>
        <div className="Cart__Relate">
          <div className="Cart__Relate__Tittle">
            <span>Dành riêng cho bạn</span>
          </div>
          <Row className="Cart__Relate__Product">
            {dataProductSale.map((DataSale, index) => {
              return (
                <Col key={index} lg={3} md={4} ms={6} xs={6}>
                  <img
                    className="Sale__Product__img"
                    src="/img/Hot .gif"
                    alt="img"
                  />
                  <ItemProduct
                    className="Sale__Product__Data"
                    idProduct={DataSale._id}
                    title={DataSale.product_title}
                    SouceProduct={DataSale.product_code}
                    price={DataSale.product_price}
                    pricePromotional={DataSale.product_price_sale}
                    imageMain={DataSale.product_imageMain}
                    product_priceNumber={DataSale.product_priceNumber}
                    product_priceNumber_sale={DataSale.product_priceNumber_sale}
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
