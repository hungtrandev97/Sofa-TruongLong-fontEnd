import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import NumberFormat from "react-number-format";
// import { FaRegHandPointRight } from "react-icons/fa";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiGetAllOderYour, apiUpdateStatus } from "../../services/Cart";
import { NotifySuccess } from "../../components/Notify/Toast";
import "./FormOderYour.css";

export default function FormOderYour() {
  const { userId } = useSelector((state) => state.authRedux.loginUser);
  const [dataOderYour, setDataOderYour] = useState([]);

  useEffect(() => {
    const GetAllOderYour = async () => {
      const dataGetAllOderYour = await apiGetAllOderYour(userId);
      if (dataGetAllOderYour && dataGetAllOderYour.data) {
        setDataOderYour(dataGetAllOderYour.data);
      }
    };
    GetAllOderYour();
  }, []);

  const updateStatus = async (id) => {
    const dataUpdate = {
      status: 4,
    };
    const UpdateStatusApi = await apiUpdateStatus(id, dataUpdate);
    if (UpdateStatusApi) {
      NotifySuccess("Thông Báo", "hủy đơn hàng thành công");
    }
  };
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

            {dataOderYour.map((data, index) => {
              return (
                <div key={index} style={{ paddingBottom: "10px" }}>
                  <div className="OderCart__left__Content">
                    <Row style={{ width: "100%" }}>
                      <Col lg={2} md={2} ms={2} xs={12}>
                        <div className="OderCart__left__Content__Code">
                          <span className="OderCart__left__Content__Span">
                            <b>TÊN</b>
                          </span>
                          <span style={{ paddingTop: "10px" }}>
                            {data.name}
                          </span>
                        </div>
                      </Col>
                      <Col lg={2} md={2} ms={2} xs={12}>
                        <div className="OderCart__left__Content__Date">
                          <span className="OderCart__left__Content__Span">
                            <b> ĐỊA CHỈ</b>
                          </span>
                          <span style={{ paddingTop: "10px" }}>
                            {data.address}
                          </span>
                        </div>
                      </Col>
                      <Col lg={2} md={2} ms={2} xs={12}>
                        <div className="OderCart__left__Content__Date">
                          <span className="OderCart__left__Content__Span">
                            <b> NGÀY ĐẶT</b>
                          </span>
                          <span style={{ paddingTop: "10px" }}>
                            {moment(data.dateOder).format("DD-MM-YY hh:ss")}
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
                              value={data.totalMoney}
                              displayType="text"
                              thousandSeparator
                              suffix="vnđ"
                            />
                          </span>
                        </div>
                      </Col>
                      <Col lg={2} md={2} ms={2} xs={12}>
                        <div className="OderCart__left__Content__Date">
                          <span className="OderCart__left__Content__Span">
                            <b> Trạng Thái</b>
                          </span>
                          <span style={{ paddingTop: "10px" }}>
                            {(() => {
                              switch (data.status) {
                                case "1":
                                  return <div>Đang xử lý</div>;
                                case "2":
                                  return <div>Đang giao hàng</div>;
                                case "3":
                                  return <div>Hoàn tất</div>;
                                default:
                                  return <div>Đã hủy đơn</div>;
                              }
                            })()}
                          </span>
                        </div>
                      </Col>
                      <Col
                        lg={2}
                        md={2}
                        ms={12}
                        xs={12}
                        className="OderCart__left__Content__Delete"
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Link
                            to={{
                              pathname: `chi-tiet-don-hang`,
                              state: data,
                            }}
                            style={{ paddingBottom: "10px" }}
                          >
                            <button
                              className="OderCart__left__Content__button"
                              type="button"
                            >
                              Chi Tiết
                            </button>
                          </Link>
                          {dataOderYour.status < 3 ? (
                            <span>
                              <button
                                className="OderCart__left__Content__button"
                                type="button"
                                onClick={() => updateStatus(dataOderYour._id)}
                              >
                                Huy Đơn Hàng
                              </button>
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
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
