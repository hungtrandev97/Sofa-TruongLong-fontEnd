import React from "react";
import { Col, Row } from "reactstrap";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import ProductCart from "../../components/Consumer/Layout/ProductCart";
import MenuCart from "../../components/Consumer/Layout/MenuCart";
import "./OderDetails.css";

export default function FormOderDetails() {
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="Form__OderDetails">
        <ChatBox />
        <Row
          className="m-0 d-0 Form__OderDetails__Row "
          style={{ width: "100%", paddingBottom: "30px" }}
        >
          <Col lg={8} md={8} ms={12} xs={12}>
            <ProductCart
              titlePage="Chi Tiết Đơn Hàng"
              titleProduct="Ghế Sofa "
              SouceProduct="1"
              price="10.000.000"
              imageMain="Hình"
            />
          </Col>
          <Col lg={4} md={4} ms={12} xs={12} className="Form__OderDetails__Col">
            <MenuCart
              CustomerName="Hưng Khánh Trần"
              Address="Krông Năng-Đăk Lắk"
              Phone="012365489"
              price="10.000.000"
              DeliveryCharges="50.000"
              Total="10.050.000"
              buttonMenu="OderDetails"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
