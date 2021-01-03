/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import "./FormProduct.css";

const FormProduct = ({ data }) => {
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="FromProduct ">
        <ChatBox />
        <div className="Category__title">
          <span>Bàn Ghế</span>
        </div>
        {data && data.length > 0 ? (
          <Row className="Product__Row ">
            {data.map((DataProduct, index) => {
              return (
                <Col key={index} lg={3} md={4} ms={6} xs={6}>
                  <ItemProduct
                    idProduct={DataProduct._id}
                    title={DataProduct.product_title}
                    SouceProduct={DataProduct.product_code}
                    price={DataProduct.product_price}
                    pricePromotional={DataProduct.product_price_sale}
                    imageMain={DataProduct.product_imageMain}
                    product_priceNumber={DataProduct.product_priceNumber}
                    product_priceNumber_sale={
                      DataProduct.product_priceNumber_sale
                    }
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormProduct;
