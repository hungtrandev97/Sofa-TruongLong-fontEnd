import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import { BiMap } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import FormEditInFoCart from "./FormEditInFoCart";
import { apiCreateOder } from "../../../services/Cart";
import { NotifySuccess, NotifyWarning, NotifyError } from "../../Notify/Toast";
import { TYPE_NOTIFY } from "../../../constants/DefaultValues";
import { removeDataCart } from "../../../store/actions/actions";
import FormLogin from "../../Forms/Login";
import "./MenuCart.css";

const MenuCart = ({ inforConsumer, price, Total, buttonMenu, countCart }) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartRedux);
  const [modalLogin, setModalLogin] = useState(false);
  const { loginUser } = useSelector((state) => state.authRedux);
  const cartDataDefault = [];
  cartData.forEach((item) => {
    cartDataDefault.push({
      _product: `${item.idProduct}`,
      quantity: item.quanity,
      priceProduct: `${item.product_priceNumber_sale}`,
    });
  });
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const toggleModal = () => {
    setModalLogin(false);
  };
  const submitButtonCrate = async () => {
    if (loginUser === null || loginUser.accessToken === undefined) {
      setModalLogin(true);
    } else if (cartData.length === 0) {
      NotifyWarning("Đơn Hàng", "Giỏ hàng rỗng, Vui Lòng chọn sản phẩm");
    } else {
      const data = {
        _id_user: loginUser.userId,
        name: inforConsumer.name_customer,
        address: inforConsumer.Address_Customer,
        numberPhone: inforConsumer.Phone_Customer,
        totalMoney: Total,
        _product: cartDataDefault,
      };
      const req = await apiCreateOder(data);
      if (req.status) {
        NotifySuccess("Tạo Thư Mục", "Thêm Thư Mục Thành Công");
        dispatch(removeDataCart());
      } else if (req.type === TYPE_NOTIFY.WARNING) {
        NotifyWarning("Thêm Sản Phẩm", `${req.message}`);
      } else {
        NotifyError("Thêm Sản Phẩm", `${req.message}`);
      }
    }
  };
  const ChangeIsModal = () => {
    toggle(true);
  };
  return (
    <div>
      <div className="Modal__Edit__Info">
        <Modal isOpen={modalLogin} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>ĐĂNG NHẬP</ModalHeader>
          <ModalBody>
            <FormLogin />
          </ModalBody>
        </Modal>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>THÔNG TIN NHẬN HÀNG</ModalHeader>
          <ModalBody>
            <FormEditInFoCart
              CustomerName={inforConsumer.name_customer}
              Address={inforConsumer.Address_Customer}
              Phone={inforConsumer.Phone_Customer}
            />
          </ModalBody>
        </Modal>
      </div>
      <div className="Menu__Cart">
        <div className="Menu__Cart__Header">
          <span>Địa Chỉ Nhận Hàng </span>
          <div className="Menu__Cart__Header__Name">
            <BsPersonFill size="1.2rem" color="#666" />
            <span>{inforConsumer.name_customer || "Chưa có thông tin..."}</span>
          </div>
          <div className="Menu__Cart__Header__Address">
            <BiMap size="1.2rem" color="#666" />
            <span>
              {inforConsumer.Address_Customer || "Chưa có thông tin..."}
            </span>
          </div>
          <div className="Menu__Cart__Header__Phone">
            <HiOutlinePhone size="1.2rem" color="#666" />
            <span>
              {inforConsumer.Phone_Customer || "Chưa có thông tin..."}
            </span>
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
            <button
              onClick={() => submitButtonCrate()}
              type="button"
              className="Menu__Cart__Content__Button"
            >
              XÁC NHẬN GIỎ HÀNG
            </button>
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
