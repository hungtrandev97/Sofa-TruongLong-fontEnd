import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiGetAllScreeningPrice } from "../../services/product";
import "./Screening.css";

export default function FormScreening({ match }) {
  const [dataProduct, setDataProduct] = useState([]);
  const priceProduct = match.params.product_price;
  let number = 0;
  if (priceProduct === "5") {
    number = 5000000;
  } else if (priceProduct === "10") {
    number = 10000000;
  }
  const dataScreeningPrive = [];
  console.log(dataScreeningPrive);
  const GetAllScreening = async () => {
    const { data } = await apiGetAllScreeningPrice(number);
    setDataProduct(data);
  };
  useEffect(() => {
    GetAllScreening();
  }, []);
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="FromScreening ">
        <ChatBox />
        <div className="Screening__title">
          <span>Sản Phẩm Theo Giá</span>
        </div>
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
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
