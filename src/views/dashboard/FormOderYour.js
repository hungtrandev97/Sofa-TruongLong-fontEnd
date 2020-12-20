import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegHandPointRight } from "react-icons/fa";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import "./FormOderYour.css";

export default function FormOderYour() {
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="OderYour__Form">
        <ChatBox />
        <Row
          className="m-0 d-0 OderYour__Form__Row "
          style={{ width: "100%", paddingBottom: "30px" }}
        >
          <Col lg={8} md={8} ms={12} xs={12}>
            <div style={{ paddingBottom: "15px" }}>
              <div className="OderCart__left__Header">
                <span>Đơn Hàng Của Bạn</span>
              </div>
            </div>
            <div className="OderCart__left__Content">
              <Row style={{ width: "100%" }}>
                <Col lg={1} md={1} ms={2} xs={12}>
                  <div className="OderCart__left__Content__Code">
                    <span className="OderCart__left__Content__Span">MĐH</span>
                    <span style={{ paddingTop: "10px" }}>1</span>
                  </div>
                </Col>
                <Col lg={4} md={4} ms={5} xs={12}>
                  <div className="OderCart__left__Content__Date">
                    <span className="OderCart__left__Content__Span">
                      Ngày Đặt Hàng
                    </span>
                    <span style={{ paddingTop: "10px" }}>15-12-2020</span>
                  </div>
                </Col>
                <Col lg={4} md={4} ms={5} xs={12}>
                  <div className="OderCart__left__Content__Delivery">
                    <span className="OderCart__left__Content__Span">
                      Ngày Giao Hàng
                    </span>
                    <span style={{ paddingTop: "10px" }}>16-12-2020</span>
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={12}
                  xs={12}
                  className="OderCart__left__Content__Delete"
                >
                  <Link to="/chi-tiet-don-hang">
                    <button
                      className="OderCart__left__Content__button"
                      type="button"
                    >
                      Chi Tiết
                    </button>
                  </Link>
                  <span>
                    <RiDeleteBinLine
                      size="1.2rem"
                      color=" #f57224"
                      style={{ paddingLeft: "5px" }}
                    />
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={4} md={4} ms={12} xs={12} className="OderCart__Right__Row">
            <div className="OderCart__Right">
              <div className="OderCart__Right__title">Danh Mục Đơn Hàng</div>
              <div className="OderCart__Right__processed">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <FaRegHandPointRight
                    size="1rem"
                    style={{ paddingRight: "5px" }}
                    color="#f57224"
                  />
                  Đơn Hàng Đang Xử Lý
                </Link>
              </div>
              <div className="OderCart__Right__Completed">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <FaRegHandPointRight
                    size="1rem"
                    color="#f57224"
                    style={{ paddingRight: "5px" }}
                  />
                  Đơn Hàng Hoàn Tất
                </Link>
              </div>
              <Link to="/gio-hang">
                <button type="button" className="OderCart__Right__Button">
                  Quay Lại Giỏ Hàng
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}