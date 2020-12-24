import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { BiMap } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import FormEditInFoCart from "./FormEditInFoCart";
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
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ChangeIsModal = () => {
    toggle(true);
  };
  return (
    <div>
      <div className="Modal__Edit__Info">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>CHỈNH SỬA THÔNG TIN</ModalHeader>
          <ModalBody>
            <FormEditInFoCart
              CustomerName={CustomerName}
              Address={Address}
              Phone={Phone}
            />
          </ModalBody>
        </Modal>
      </div>
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
          <div className="Menu__Cart__Edit__Info">
            <button type="button" onClick={() => ChangeIsModal(true)}>
              Chỉnh sủa thông tin
            </button>
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
  price: PropTypes.number,
  Total: PropTypes.number,
  buttonMenu: PropTypes.string,
  countCart: PropTypes.number,
};
MenuCart.defaultProps = {
  CustomerName: "",
  Address: "",
  Phone: "",
  price: 0,
  Total: 0,
  buttonMenu: "",
  countCart: 0,
};
export default MenuCart;
