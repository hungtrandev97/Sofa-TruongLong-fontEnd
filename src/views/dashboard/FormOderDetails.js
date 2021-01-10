/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiGetAllOderYourDetails } from "../../services/Cart";
import "./OderDetails.css";

export default function FormOderDetails({ location }) {
  const idOderYour = location.state._id;
  const [dataOderYourDetail, setDataOderYourDetail] = useState([]);
  useEffect(() => {
    const GetAllSetting = async () => {
      const dataGetAllOderYourDetail = await apiGetAllOderYourDetails(
        idOderYour
      );
      if (dataGetAllOderYourDetail && dataGetAllOderYourDetail.data) {
        setDataOderYourDetail(dataGetAllOderYourDetail.data);
      }
    };
    GetAllSetting();
  }, []);

  return (
    <div
      className="screen__Wep"
      style={{ paddingTop: "143px", minHeight: "70vh" }}
    >
      <div>
        <ChatBox />
        <div
          style={{
            paddingBottom: "15px",
            paddingTop: "20px",
          }}
        >
          <div className="OderCart__left__Header">
            <span>Chi Tiết Đơn Hàng</span>
          </div>
        </div>
        {dataOderYourDetail.map((data, index) => {
          return (
            <div key={index} style={{ paddingBottom: "10px" }}>
              <Row className="Form__OderDetails">
                <Col lg={12} md={12} ms={12} xs={12}>
                  <div className="OderCart__left__Content">
                    <Row style={{ width: "100%" }}>
                      <Col lg={4} md={4} ms={4} xs={12}>
                        <div className="OderCart__left__Content__Date">
                          <span className="OderCart__left__Content__Span">
                            <b>Tên</b>
                          </span>
                          <span>{data._product.product_title}</span>
                        </div>
                      </Col>
                      <Col lg={4} md={4} ms={4} xs={12}>
                        <div className="OderCart__left__Content__Code">
                          <span className="OderCart__left__Content__Span">
                            <b>Hình ảnh sản phẩm</b>
                          </span>
                          <img
                            src={`${data._product.product_imageMain}`}
                            alt="img"
                            width="80px"
                            height="80px"
                          />
                        </div>
                      </Col>
                      <Col lg={4} md={4} ms={4} xs={12}>
                        <span className="OderCart__left__Content__Span">
                          <b>Số lượng đặt mua</b>
                        </span>
                        <div className="OderCart__left__Content__Date">
                          <span>{data.quantity}</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}
