import React from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import { CgChevronRight } from "react-icons/cg";
import ItemProduct from "./Layout/ItemProduct";

const HomeContent = () => {
  return (
    <div className="HomeContent screen__Wep">
      <div className="HomeContent__header">
        <div className="HomeContent__header__Left">
          <span>Sản Phẩm Mới Nhất</span>
        </div>
        <div className="HomeContent__header__Right">
          <span>Xem Tất Cả</span>
          <CgChevronRight />
        </div>
      </div>

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
