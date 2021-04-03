import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiGetAllScreeningPrice } from "../../services/product";
import "./Screening.css";

export default function FormScreening({ price }) {
  const [dataProduct, setDataProduct] = useState([]);
  const [prices, numberPrices] = useState();
  const GetAllScreening = async () => {
    const { data } = await apiGetAllScreeningPrice(price);
    setDataProduct(data);
  };
  if (price !== prices) {
    numberPrices(price);
    GetAllScreening();
  }
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="FromScreening ">
        <ChatBox />
        <div className="Screening__title">
          <span>Sản Phẩm Theo Giá</span>
        </div>
        {dataProduct.length > 0 ? (
          <Row className="Screening__Row ">
            {dataProduct.map((Data, index) => {
              return (
                <Col key={index} lg={3} md={4} ms={6} xs={6}>
                  <ItemProduct
                    idProduct={Data._id}
                    title={Data.product_title}
                    SouceProduct={Data.product_code}
                    price={Data.product_price}
                    pricePromotional={Data.product_price_sale}
                    imageMain={Data.product_imageMain}
                    product_priceNumber={Data.product_priceNumber}
                    product_priceNumber_sale={Data.product_priceNumber_sale}
                    idCategory={Data._category._id}
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
  );
}
