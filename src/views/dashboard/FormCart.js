import React from "react";
import { Col, Row } from "reactstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Cart.css";

export default function FormCart() {
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="Cart__Form">
        <Row>
          <Col lg={8} md={8} ms={8} xs={8}>
            <div className="Header__left__Cart">
              <input type="checkbox" className="Header__left__Cart__input" />
              <div className="Header__left__Cart__Title">
                Chọn tất cả sản phẩm
              </div>
              <div className="Header__left__Cart__Remove">
                <RiDeleteBinLine
                  size="1.2rem"
                  style={{ marginBottom: "5px" }}
                />
                <span>Xóa</span>
              </div>
            </div>
            <div className="Content__Add__Cart">bb</div>
          </Col>
          <Col lg={4} md={4} ms={4} xs={4}>
            aaa
          </Col>
        </Row>
      </div>
    </div>
  );
}
