import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
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
  DeliveryCharges,
  Total,
  buttonMenu,
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
            <FormEditInFoCart />
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
            <span>Tạm tính (0 Sản phẩm)</span>
            <b>
              {price}
              <span>đ</span>
            </b>
          </div>
          <div className="Menu__Cart__Content__Fees">
            <span>Phí giao hàng</span>
            <b>
              {DeliveryCharges}
              <span>đ</span>
            </b>
          </div>
          <div className="Menu__Cart__Content__Total">
            <span>Tổng cộng</span>
            <b>
              {Total}
              <span>đ</span>
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
  Phone: PropTypes.number,
  price: PropTypes.number,
  DeliveryCharges: PropTypes.number,
  Total: PropTypes.number,
  buttonMenu: PropTypes.string,
};
MenuCart.defaultProps = {
  CustomerName: "",
  Address: "",
  Phone: "",
  price: "",
  DeliveryCharges: "",
  Total: "",
  buttonMenu: "",
};
export default MenuCart;
