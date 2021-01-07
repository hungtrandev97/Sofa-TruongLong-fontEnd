import React from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";

export default function FormSearch({ dataSearch }) {
  console.log(dataSearch);
  return (
    <div
      className="screen__Wep"
      style={{ paddingTop: "143px", minHeight: "60vh" }}
    >
      {dataSearch.length > 0 ? (
        <Row className="Sale__Product__Row ">
          {dataSearch.map((data, index) => {
            return (
              <Col key={index} lg={3} md={4} ms={6} xs={6}>
                <ItemProduct
                  className="Sale__Product__Data"
                  idProduct={data._id}
                  title={data.product_title}
                  SouceProduct={data.product_code}
                  price={data.product_price}
                  pricePromotional={data.product_price_sale}
                  imageMain={data.product_imageMain}
                  product_priceNumber={data.product_priceNumber}
                  product_priceNumber_sale={data.product_priceNumber_sale}
                  idCategory={data._category._id}
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
          Không tìm thấy sản phẩm
        </div>
      )}
    </div>
  );
}
