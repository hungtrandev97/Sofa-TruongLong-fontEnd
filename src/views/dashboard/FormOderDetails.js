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
      style={{ paddingTop: "143px", minHeight: "70vh", paddingBottom: "40px" }}
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
            <Row className="Form__OderDetails" key={index}>
              <Col lg={12} md={12} ms={12} xs={12}>
                <div className="OderCart__left__Content">
                  <Row style={{ width: "100%" }}>
                    <Col lg={4} md={4} ms={12} xs={12}>
                      <div className="OderCart__left__Content__Date">
                        <b>Tên Sản Phẩm</b>
                        <span style={{ paddingTop: "50px" }}>
                          {data._product.product_title}
                        </span>
                      </div>
                    </Col>
                    <Col lg={3} md={3} ms={12} xs={12}>
                      <div className="OderCart__left__Content__Code">
                        <b>Hình Ảnh Sản Phẩm</b>
                        <img
                          src={`${data._product.product_imageMain}`}
                          alt="img"
                          width="100%"
                          height="auto"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} ms={4} xs={12}>
                      <div className="OderCart__left__Content__Date">
                        <b>Số Lượng</b>
                        <span style={{ paddingTop: "50px" }}>
                          {data.quantity}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}
