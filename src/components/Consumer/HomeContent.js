import React from "react";
import { Row, Col } from "reactstrap";
import "./HomeContent.css";
import { CgChevronRight } from "react-icons/cg";

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
          <Col md={3}>
            <div className="ItemProduct">
              <div className="ItemProduct__Content">
                <img
                  src="/img/product/imageProduct.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt="product"
                />
              </div>
              <div>title</div>
              <div>gia</div>
              <div>gio hang</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeContent;
