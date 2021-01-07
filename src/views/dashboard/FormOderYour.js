import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import NumberFormat from "react-number-format";
// import { FaRegHandPointRight } from "react-icons/fa";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiGetAllSetting } from "../../services/Cart";
import "./FormOderYour.css";

export default function FormOderYour() {
  const { userId } = useSelector((state) => state.authRedux.loginUser);
  const [dataOderYour, setDataOderYour] = useState([]);
  console.log(dataOderYour, "dataOderYour");

  useEffect(() => {
    const GetAllOderYour = async () => {
      const dataGetAllOderYour = await apiGetAllSetting(userId);
      if (dataGetAllOderYour && dataGetAllOderYour.data) {
        setDataOderYour(dataGetAllOderYour.data[0]);
      }
    };
    GetAllOderYour();
  }, []);
  return (
    <div className="screen__Wep" style={{ paddingTop: "143px" }}>
      <div className="OderYour__Form">
        <ChatBox />
        <Row
          className="m-0 d-0 OderYour__Form__Row "
          style={{ width: "100%", paddingBottom: "30px" }}
        >
          <Col lg={12} md={12} ms={12} xs={12}>
            <div style={{ paddingBottom: "15px" }}>
              <div className="OderCart__left__Header">
                <span>Đơn Hàng Của Bạn</span>
              </div>
            </div>
            <div className="OderCart__left__Content">
              <Row style={{ width: "100%" }}>
                <Col lg={2} md={2} ms={2} xs={12}>
                  <div className="OderCart__left__Content__Code">
                    <span className="OderCart__left__Content__Span">
                      <b>TÊN</b>
                    </span>
                    <span style={{ paddingTop: "10px" }}>
                      {dataOderYour.name}
                    </span>
                  </div>
                </Col>
                <Col lg={2} md={2} ms={2} xs={12}>
                  <div className="OderCart__left__Content__Date">
                    <span className="OderCart__left__Content__Span">
                      <b> ĐỊA CHỈ</b>
                    </span>
                    <span style={{ paddingTop: "10px" }}>
                      {dataOderYour.address}
                    </span>
                  </div>
                </Col>
                <Col lg={2} md={2} ms={2} xs={12}>
                  <div className="OderCart__left__Content__Date">
                    <span className="OderCart__left__Content__Span">
                      <b> NGÀY ĐẶT</b>
                    </span>
                    <span style={{ paddingTop: "10px" }}>
                      {moment(dataOderYour.dateOder).format("DD-MM-YY hh:ss")}
                    </span>
                  </div>
                </Col>
                <Col lg={2} md={2} ms={2} xs={12}>
                  <div className="OderCart__left__Content__Date">
                    <span className="OderCart__left__Content__Span">
                      <b> TỔNG TIỀN</b>
                    </span>
                    <span style={{ paddingTop: "10px" }}>
                      <NumberFormat
                        value={dataOderYour.totalMoney}
                        displayType="text"
                        thousandSeparator
                        suffix="vnđ"
                      />
                    </span>
                  </div>
                </Col>

                <Col
                  lg={3}
                  md={3}
                  ms={12}
                  xs={12}
                  className="OderCart__left__Content__Delete"
                >
                  <div style={{ display: "flex" }}>
                    <Link to="/chi-tiet-don-hang">
                      <button
                        className="OderCart__left__Content__button"
                        type="button"
                      >
                        Chi Tiết
                      </button>
                    </Link>
                    <span style={{ paddingLeft: "10px" }}>
                      <button
                        className="OderCart__left__Content__button"
                        type="button"
                      >
                        Huy Đơn Hàng
                      </button>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          {/* <Col lg={4} md={4} ms={12} xs={12} className="OderCart__Right__Row">
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
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
