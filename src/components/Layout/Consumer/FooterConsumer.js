import React from "react";
import "./FooterConsumer.css";
import { Row, Col } from "reactstrap";

function FooterConsumer() {
  return (
    <div className="FooterCosumer">
      <div className="FooterCosumer__content screen__Wep">
        <Row className="FooterCosumer__content__Content">
          <Col
            lg={4}
            md={4}
            sm={12}
            className="FooterCosumer__content__Content__Left"
          >
            <span>Liên Hệ</span>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={12}
            className="FooterCosumer__content__Content__Left"
          >
            Chính Sách
          </Col>
          <Col lg={4} md={4} sm={12}>
            Bảo Trì SOFA
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default FooterConsumer;
