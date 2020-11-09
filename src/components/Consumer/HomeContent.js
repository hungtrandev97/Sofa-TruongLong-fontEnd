import React from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import ItemProduct from "./Layout/ItemProduct";
import HeaderProduct from "./Layout/HeaderProduct";

const HomeContent = () => {
  return (
    <div className="HomeContent screen__Wep">
      <HeaderProduct title="Sản Phẩm Mới Nhất" link="/" />
      <div className="HomeContent__product__new">
        <Row>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
        </Row>
      </div>
      <HeaderProduct title="SOFA Giường" link="/" />
      <div className="HomeContent__product__new">
        <Row>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <ItemProduct
              title="Bàn Ghế ăn"
              SouceProduct="M15"
              price="5.000.000"
              pricePromotional="4.000.000"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeContent;
