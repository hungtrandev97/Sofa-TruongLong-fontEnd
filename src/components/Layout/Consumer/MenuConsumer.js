import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./MenuConsumer.css";

const MenuConsumer = () => {
  const { dataCategory } = useSelector((state) => state.categoryRedux);

  return (
    <div className="consumersMenu">
      <div className="consumersMenu__Menu">
        <div className="consumersMenu__Menu__Nav screen__Wep">
          <div className="consumersMenu__MenuHeader">
            <Link to="/home/">
              <span>
                <img
                  className="consumersMenu__MenuHeaderLogo"
                  src="/img/home/logo_responsive.png"
                  width="152px"
                  alt=""
                />
                <img
                  className="consumersMenu__MenuHeaderLogoResponsive"
                  src="/img/home/logo_responsive.png"
                  width="152px"
                  alt=""
                />
              </span>
            </Link>
            <div className="consumersMenu__MenuHeaderLink">
              <ul className="MenuMenu">
                <li style={{ marginLeft: "0px" }}>
                  <Link to="/trang-chu"> Trang Chủ </Link>
                </li>
                <li>
                  <Link to="/home/"> Giới Thiệu </Link>
                </li>
                <li>
                  <Link>
                    <span>Sản Phẩm</span>
                    <BiChevronDown
                      size="1rem"
                      style={{ marginTop: "-2px", paddingLeft: "5px" }}
                    />
                  </Link>

                  <ul className="sub-menu">
                    <Row
                      className="screen__Wep sub-menuCategory"
                      style={{ padding: "10px" }}
                    >
                      {dataCategory.map((data, index) => {
                        return (
                          <Col key={index} md={3}>
                            <div className="sub-menuCategory__Title">
                              <AiOutlineCaretRight />
                              {data.category_title}
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </ul>
                </li>
                <li>
                  <Link to="/san-pham-moi"> Sản Phẩm Mới </Link>
                </li>
                <li>
                  <Link>
                    <span>Lọc SoFa</span>
                    <BiChevronDown
                      size="1rem"
                      style={{ marginTop: "-2px", paddingLeft: "5px" }}
                    />
                  </Link>
                  <ul className="sub-menu">
                    <Row
                      className="screen__Wep sub-menuCategory"
                      style={{ padding: "10px" }}
                    >
                      <Col md={3}>
                        <div className="sub-menuCategory__Title ">
                          <AiOutlineCaretRight />
                          <Link
                            className="sub-menuCategory__Title__Link"
                            to="/loc-gia-san-pham/5"
                          >
                            Dưới 5 Triệu
                          </Link>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="sub-menuCategory__Title">
                          <AiOutlineCaretRight />
                          <Link
                            className="sub-menuCategory__Title__Link"
                            to="/loc-gia-san-pham/10"
                          >
                            Dưới 10 Triệu
                          </Link>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="sub-menuCategory__Title">
                          <AiOutlineCaretRight />
                          <Link
                            className="sub-menuCategory__Title__Link"
                            to="/loc-gia-san-pham/15"
                          >
                            Dưới 15 Triệu
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </ul>
                </li>
                <li>
                  <Link to="/khuyen-mai">Khuyến Mãi</Link>
                </li>
                <li>
                  <Link to="/gioi-thieu">Liên Hệ</Link>
                </li>
              </ul>
              <div className="consumersMenu__SiguploginMobile">
                <Link to="/auth/register">SIGN UP</Link>
                <span> | </span>
                <Link to="/auth/login">LOGIN</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuConsumer;
