import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";

import { apiGetAllProductCategory } from "../../services/product";
import "./FormProduct.css";

export default function FormProduct({ location }) {
  const idCategory = location.state.data._id;
  const [dataProduct, setDataProduct] = useEffect();
  const GetAllProductCategory = async () => {
    const response = await apiGetAllProductCategory(idCategory);
    setDataProduct(response.data);
  };
  useEffect(() => {
    GetAllProductCategory();
  }, []);
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="FromProduct ">
        <ChatBox />
        <div className="Category__title">
          <span>Bàn Ghế</span>
        </div>
        <Row className="Product__Row ">
          {dataProduct.map((DataProduct, index) => {
            return (
              <Col key={index} lg={3} md={4} ms={6} xs={6}>
                <ItemProduct
                  idProduct={DataProduct._id}
                  title={DataProduct.product_tiile}
                  SouceProduct={DataProduct.product_code}
                  price={DataProduct.produc_price}
                  pricePromotional=""
                  imageMain={DataProduct.img}
                  product_priceNumber={DataProduct.product_priceNumber}
                  product_priceNumber_sale={
                    DataProduct.product_priceNumber_sale
                  }
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
