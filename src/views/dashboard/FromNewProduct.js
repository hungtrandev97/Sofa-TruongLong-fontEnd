import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { getAllProductNewIndex } from "../../services/product";
import "./NewProduct.css";

export default function FormNewProduct() {
  const [dataProductNew, setDataProductNew] = useState([]);
  const GetAllProductNew = async () => {
    const response = await getAllProductNewIndex();
    setDataProductNew(response.data);
  };
  useEffect(() => {
    GetAllProductNew();
  }, []);
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="NewFromProduct ">
        <ChatBox />
        <div className="New__Product__title">
          <span>Tất Cả Sản Phẩm Mới Nhất</span>
        </div>
        <Row className="New__Product__Row ">
          {dataProductNew.map((DataNew, index) => {
            return (
              <Col key={index} lg={3} md={4} ms={6} xs={6}>
                <ItemProduct
                  title={DataNew.product_title}
                  SouceProduct={DataNew.product_code}
                  price={DataNew.product_price}
                  pricePromotional={DataNew.product_price_sale}
                  imageMain={DataNew.product_imageMain}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
