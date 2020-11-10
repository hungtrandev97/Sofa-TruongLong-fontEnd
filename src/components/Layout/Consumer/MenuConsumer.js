/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";

import "./MenuConsumer.css";

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { iconMenu: "≡" };
  }

  render() {
    const { activeLink } = this.props;
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
                  <li
                    className={` ${
                      activeLink === "Home"
                        ? "consumersMenu__MenuHeaderLinkActive"
                        : "consumersMenu__MenuHeaderLinkActive"
                    }`}
                    style={{ marginLeft: "0px" }}
                  >
                    <Link to="/home/"> Trang Chủ </Link>
                  </li>
                  <li
                    className={` ${
                      activeLink === "About"
                        ? "consumersMenu__MenuHeaderLinkActive"
                        : ""
                    }`}
                  >
                    <Link to="/home/"> Giới Thiệu </Link>
                  </li>
                  <li
                    className={` ${
                      activeLink === "Educational"
                        ? "consumersMenu__MenuHeaderLinkActive"
                        : ""
                    }`}
                  >
                    <Link to="/home/educational/">Sản Phẩm</Link>
                    <ul className="sub-menu">
                      <Row className="screen__Wep sub-menuCategory">
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Ghế
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Bàn
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Bàn Ăn
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Ghế sofa Cao Cấp
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Ghế
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Bàn
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Bàn Ăn
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Ghế sofa Cao Cấp
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Bàn Ăn
                        </Col>
                        <Col md={3}>
                          <AiOutlineCaretRight />
                          Ghế sofa Cao Cấp
                        </Col>
                      </Row>
                    </ul>
                  </li>
                  <li
                    className={` ${
                      activeLink === "Educational"
                        ? "consumersMenu__MenuHeaderLinkActive"
                        : ""
                    }`}
                  >
                    <Link to="/home/educational/">Khuyến Mãi</Link>
                  </li>
                  <li
                    className={` ${
                      activeLink === "Contact"
                        ? "consumersMenu__MenuHeaderLinkActive"
                        : ""
                    }`}
                  >
                    <Link to="/home/contact">Liên Hệ</Link>
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
  }
}

HomeMenu.propTypes = {
  activeLink: PropTypes.string,
};
HomeMenu.defaultProps = {
  activeLink: "",
};

const mapStateToProps = () => {
  return {};
};
const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(HomeMenu);
