import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiGetAllScreeningPrice } from "../../services/product";
import "./Screening.css";

export default function FormScreening({ match }) {
  const priceProduct = match.params.product_price;
  let number = 0;
  if (priceProduct === "5") {
    number = 5000000;
  } else if (priceProduct === "10") {
    number = 10000000;
  }
  const dataScreeningPrive = [];
  const GetAllScreening = async () => {
    const response = await apiGetAllScreeningPrice(number);
    dataScreeningPrive.push(response.data[0]);
  };
  useEffect(() => {
    GetAllScreening();
  });
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="FromScreening ">
        <ChatBox />
        <div className="Screening__title">
          <span>Sản Phẩm Theo Giá</span>
        </div>
        <Row className="Screening__Row ">
          {dataScreeningPrive.map((Data, index) => {
            return (
              <Col key={index} lg={3} md={4} ms={6} xs={6}>
                <ItemProduct
                  title={Data.product_title}
                  SouceProduct={Data.product_code}
                  price=""
                  pricePromotional=""
                  imageMain=""
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
