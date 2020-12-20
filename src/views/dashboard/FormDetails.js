import React from "react";
import { Col, Row } from "reactstrap";
import { BiStar } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import "./Details.css";

export default function FormDetails() {
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="Details__Form">
        <ChatBox />
        <Row>
          <Col
            lg={5}
            md={5}
            ms={12}
            xs={12}
            className="Details__Form__Col__Left"
          >
            <div className="Details__Form__Img__Left">
              <img
                src="/img/product/imageProduct.jpg"
                alt="img"
                width="100%"
                height="400px"
              />
            </div>
            <div className="Details__Form__ImgP__Left">
              <Row>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="50px"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="50px"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="50px"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="50px"
                  />
                </Col>
              </Row>
            </div>
            <div className="Details__Form__Customer__Left">
              <div className="Details__Form__Customer__icon">
                <BiStar size="1rem" color="rgb(250, 62, 63)" />
                <span style={{ color: "rgb(250, 62, 63)" }}>100</span>
                <span>Khách hàng </span>
                <span style={{ color: "rgb(250, 62, 63)" }}> đã mua</span>
              </div>
              <div className="Details__Form__Customer__Ul">
                <ul>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            md={76}
            ms={12}
            xs={12}
            className="Details__Form__Col__Right"
          >
            <div className="Details__Form__Right__Tittle">
              <p>Bàn Ghế Ăn</p>
            </div>
            <div className="Details__Form__Right__Price">
              <b>Giá sản phẩm:</b>
              <p>10.000.000đ</p>
            </div>
            <div>
              <p>Thông số</p>
            </div>
            <div>
              <div>
                <button type="button"> Mua Ngay</button>
              </div>
              <div>
                <button type="button"> Gọi Tư Vấn</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: "10px" }}>-------------------------------</div>
    </div>
  );
}
