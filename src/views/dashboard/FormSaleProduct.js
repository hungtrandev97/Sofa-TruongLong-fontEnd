import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { getAllProductSaleIndex } from "../../services/product";
import "./ProductSale.css";

export default function FormSaleProduct() {
  const [dataProductSale, setDataProductSale] = useState([]);
  const GetAllProductNew = async () => {
    const response = await getAllProductSaleIndex();
    setDataProductSale(response.data);
  };
  useEffect(() => {
    GetAllProductNew();
  }, []);
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="SaleFromProduct ">
        <ChatBox />
        <div className="Sale__Product__title">
          <span> Sản Phẩm Khuyến Mãi</span>
        </div>
        <Row className="Sale__Product__Row ">
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
                  title={DataSale.product_title}
                  SouceProduct={DataSale.product_code}
                  price={DataSale.product_price}
                  pricePromotional={DataSale.product_price_sale}
                  imageMain={DataSale.product_imageMain}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}