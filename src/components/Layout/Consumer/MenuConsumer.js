import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductScreening,
  UpdateIdProduct,
} from "../../../store/actions/actions";
import "./MenuConsumer.css";

const MenuConsumer = () => {
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const { loginUser } = useSelector((state) => state.authRedux);
  const dispatch = useDispatch();
  const GetAllScreeningPrice = (number) => {
    dispatch(ProductScreening(number));
  };
  const GetAllProduct = (id) => {
    dispatch(UpdateIdProduct(id));
  };
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
                  <Link to="/trang-chu"> TRANG CHỦ </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>SẢN PHẨM</span>
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
                            <Link
                              to="/san-pham"
                              className="sub-menuCategory__Title__Link"
                              onClick={() => GetAllProduct(data._id)}
                            >
                              <div className="sub-menuCategory__Title">
                                <AiOutlineCaretRight />
                                {data.category_title}
                              </div>
                            </Link>
                          </Col>
                        );
                      })}
                    </Row>
                  </ul>
                </li>
                <li>
                  <Link to="/san-pham-moi">SẢN PHẨM MỚI</Link>
                </li>
                <li>
                  <Link
                    to="/loc-gia-san-pham"
                    onClick={() => GetAllScreeningPrice(0)}
                  >
                    <span>LỌC SOFA</span>
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
                            to="/loc-gia-san-pham"
                            className="sub-menuCategory__Title__Link"
                            onClick={() => GetAllScreeningPrice(5000001)}
                          >
                            Dưới 5 Triệu
                          </Link>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="sub-menuCategory__Title">
                          <AiOutlineCaretRight />
                          <Link
                            to="/loc-gia-san-pham"
                            className="sub-menuCategory__Title__Link"
                            onClick={() => GetAllScreeningPrice(10000001)}
                          >
                            Dưới 10 Triệu
                          </Link>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="sub-menuCategory__Title">
                          <AiOutlineCaretRight />
                          <Link
                            to="/loc-gia-san-pham"
                            className="sub-menuCategory__Title__Link"
                            onClick={() => GetAllScreeningPrice(15000001)}
                          >
                            Dưới 15 Triệu
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </ul>
                </li>
                <li>
                  <Link to="/khuyen-mai">KHUYẾN MÃI</Link>
                </li>
                {loginUser && loginUser.accessToken ? (
                  <li>
                    <Link to="/don-hang-cua-ban">kiểm tra đơn hàng</Link>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <Link to="/gioi-thieu">LIÊN HỆ</Link>
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
