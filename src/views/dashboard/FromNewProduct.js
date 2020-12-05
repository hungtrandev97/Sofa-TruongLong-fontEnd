import React from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { DataProduct } from "./Data";
import "./NewProduct.css";

export default function FormNewProduct() {
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="NewFromProduct ">
        <ChatBox />
        <div className="New__Product__title">
          <span>Tất Cả Sản Phẩm Mới Nhất</span>
        </div>
        <Row className="New__Product__Row ">
          {DataProduct.map((DataProduct, index) => {
            return (
              <Col key={index} lg={3} md={4} ms={6} xs={6}>
                <ItemProduct
                  title={DataProduct.product_tiile}
                  SouceProduct={DataProduct.product_code}
                  price={DataProduct.produc_price}
                  pricePromotional=""
                  imageMain={DataProduct.img}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
