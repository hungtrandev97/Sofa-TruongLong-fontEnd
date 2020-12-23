import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { BiMap } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./MenuCart.css";

const MenuCart = ({
  CustomerName,
  Address,
  Phone,
  price,
  Total,
  buttonMenu,
  countCart,
}) => {
  return (
    <div>
      <div className="Menu__Cart">
        <div className="Menu__Cart__Header">
          <span>Địa Chỉ Nhận Hàng </span>
          <div className="Menu__Cart__Header__Name">
            <BsPersonFill size="1.2rem" color="#666" />
            <span>{CustomerName}</span>
          </div>
          <div className="Menu__Cart__Header__Address">
            <BiMap size="1.2rem" color="#666" />
            <span>{Address}</span>
          </div>
          <div className="Menu__Cart__Header__Phone">
            <HiOutlinePhone size="1.2rem" color="#666" />
            <span>{Phone}</span>
          </div>
        </div>
        <div className="Menu__Cart__Content">
          <span>Thông tin đơn hàng</span>
          <div className="Menu__Cart__Content__Price">
            <span>{`Tạm tính (${countCart} Sản phẩm)`}</span>
            <b>
              <NumberFormat
                value={price}
                displayType="text"
                thousandSeparator
                suffix="vnđ"
                renderText={(value) => <div>{value}</div>}
              />
            </b>
          </div>
          <div className="Menu__Cart__Content__Fees">
            <span>Phí giao hàng</span>
            <b>miễn phí nội thành</b>
          </div>
          <div className="Menu__Cart__Content__Total">
            <span>Tổng cộng</span>
            <b>
              <NumberFormat
                value={Total}
                displayType="text"
                thousandSeparator
                suffix="vnđ"
                renderText={(value) => <div>{value}</div>}
              />
            </b>
          </div>
          {buttonMenu === "FormCart" ? (
            <Link to="/">
              <button type="button" className="Menu__Cart__Content__Button">
                XÁC NHẬN GIỎ HÀNG
              </button>
            </Link>
          ) : (
            <Link to="/don-hang-cua-ban">
              <button type="button" className="Menu__Cart__Content__Button">
                QUAY LẠI ĐƠN HÀNG
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
MenuCart.propTypes = {
  CustomerName: PropTypes.string,
  Address: PropTypes.string,
  Phone: PropTypes.string,
  price: PropTypes.string,
  Total: PropTypes.string,
  buttonMenu: PropTypes.string,
  countCart: PropTypes.number,
};
MenuCart.defaultProps = {
  CustomerName: "",
  Address: "",
  Phone: "",
  price: "",
  Total: "",
  buttonMenu: "",
  countCart: 0,
};
export default MenuCart;
