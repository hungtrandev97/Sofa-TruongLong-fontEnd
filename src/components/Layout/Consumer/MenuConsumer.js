import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../../store/actions/actions";
import "./MenuConsumer.css";

const MenuConsumer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
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
                  <Link to="/home/"> Trang Chủ </Link>
                </li>
                <li>
                  <Link to="/home/"> Giới Thiệu </Link>
                </li>
                <li>
                  <Link to="/home/educational/">Sản Phẩm</Link>

                  <ul className="sub-menu">
                    <Row className="screen__Wep sub-menuCategory">
                      {dataCategory.map((data, index) => {
                        return (
                          <Col key={index} md={3}>
                            <AiOutlineCaretRight />
                            {data.category_title}
                          </Col>
                        );
                      })}
                    </Row>
                  </ul>
                </li>
                <li>
                  <Link to="/home/educational/">Khuyến Mãi</Link>
                </li>
                <li>
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
};
export default MenuConsumer;
