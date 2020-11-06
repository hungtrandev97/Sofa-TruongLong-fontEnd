/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";

import "./MenuConsumer.css";

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { iconMenu: "≡" };
  }

  handleCheckboxChange = (e) => {
    if (e.target.checked) {
      this.setState({
        iconMenu: "x",
      });

      this.styleIconMenu = {
        fontSize: "2rem",
        fontFamily: "revert",
        color: "#414a56",
        float: "right",
        marginRight: "10%",
      };

      this.iconHidden = {
        zIndex: 1,
      };
    } else {
      this.setState({
        iconMenu: "≡",
      });

      this.styleIconMenu = {};

      this.iconHidden = {
        zIndex: 1000,
      };
    }
  };

  render() {
    const { activeLink } = this.props;
    return (
      <div className="consumersMenu">
        <div className="consumersMenu__Menu">
          <div className="consumersMenu__Menu__Nav">
            <div className="consumersMenu__Menu__Nav__Category">
              <BsJustify size="1.5rem" />
              <span style={{ paddingLeft: "15px", lineHeight: "1" }}>
                Danh Mục Sản Phẩm
              </span>
            </div>
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

              <input
                type="checkbox"
                name="consumersMenu__Menu"
                onChange={(e) => this.handleCheckboxChange(e)}
                id="menu-button-check"
              />
              <label style={this.iconHidden} htmlFor="menu-button-check">
                ≡
              </label>
              <div className="consumersMenu__MenuHeaderLink">
                <label style={this.styleIconMenu} htmlFor="menu-button-check">
                  {this.state.iconMenu}
                </label>
                <ul>
                  <li
                    className={` ${
                      activeLink === "Home"
                        ? "consumersMenu__MenuHeaderLinkActive"
                        : ""
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
  authToggleHcpConsumer: PropTypes.func,
  authConsumerChangeView: PropTypes.func,
};
HomeMenu.defaultProps = {
  activeLink: "",
  authToggleHcpConsumer: () => {},
  authConsumerChangeView: () => {},
};

const mapStateToProps = () => {
  return {};
};
const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(HomeMenu);
