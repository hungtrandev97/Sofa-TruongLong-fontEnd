import React, { useState, useEffect } from "react";
import {
  BiMenu,
  BiCaretDown,
  BiChevronRight,
  BiPhoneCall,
  BiLogIn,
} from "react-icons/bi";
import { RiFilter2Line } from "react-icons/ri";
import { MdFiberNew } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { BsPeopleCircle } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FromAcount } from "../../../constants/DefaultValues";
import FormLogin from "../../Forms/Login";
import Register from "../../Forms/Register";
import {
  logoutUser,
  CategorySuccess,
  ProductScreening,
  UpdateIdProduct,
} from "../../../store/actions/actions";
import { apiGetAllCategory } from "../../../services/category";
import "./MenuMobile.css";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenListProduct, setIsOpenListProduct] = useState(false);
  const [isOpenListFilterPrice, setIsOpenListFilterPrice] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  const OpenListProduct = () => {
    setIsOpenListProduct(!isOpenListProduct);
  };

  const OpenListFilterPrice = () => {
    setIsOpenListFilterPrice(!isOpenListFilterPrice);
  };

  const [modal, setModal] = useState(false);
  const [typeAcount, setTypeAcount] = useState(FromAcount.LOGIN);
  const toggle = () => setModal(!modal);
  const ChangeIsModal = (ismodal, type) => {
    toggle(true);
    setTypeAcount(type);
  };
  const dispatch = useDispatch();
  const logoutAcout = () => {
    dispatch(logoutUser());
  };
  const GetAllScreeningPrice = (number) => {
    dispatch(ProductScreening(number));
  };
  const GetAllProduct = (id) => {
    dispatch(UpdateIdProduct(id));
  };
  useEffect(() => {
    const GetFromApiAllAcountCategory = async () => {
      const getDataCategory = await apiGetAllCategory();
      if (getDataCategory.status) {
        dispatch(CategorySuccess(getDataCategory));
      }
    };
    GetFromApiAllAcountCategory();
  }, [dispatch]);
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const { loginUser } = useSelector((state) => state.authRedux);
  return (
    <div className="MenuMobile">
      <div className="MenuMobile__icon">
        <BiMenu size="1.5rem" color="#fff" onClick={() => showMenu()} />
      </div>
      <div
        className="MenuMobile__content"
        style={{ display: `${isOpen ? "block" : "none"}` }}
      >
        <div className="MenuMobile__Content_UlMenuleft">
          <div className="MenuMobile__Content_UlMenuleft__Nav">
            <div className="MenuMobile__Content_UlMenuleft__Icon">
              <CgCloseO
                onClick={() => showMenu()}
                color="rgb(250, 62, 63)"
                size="1.6rem"
              />
            </div>
            <div className="MenuMobile__Content_UlMenuleft__LoginLoguot">
              <div className="HeaderConsumer__Modal">
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    {typeAcount === FromAcount.LOGIN ? "ĐĂNG NHẬP" : "Đăng Ký"}
                  </ModalHeader>
                  <ModalBody>
                    {typeAcount === FromAcount.LOGIN ? (
                      <FormLogin />
                    ) : (
                      <Register />
                    )}
                  </ModalBody>
                </Modal>
              </div>
              <div className="MenuMobile__LoginLoguot__icon">
                <BsPeopleCircle size="2rem" color="#ffff" />
              </div>
              {loginUser === null || loginUser.accessToken === undefined ? (
                <div className="MenuMobile__Acount">
                  <button
                    type="button"
                    onClick={() => ChangeIsModal(true, FromAcount.LOGIN)}
                  >
                    Đăng Nhập
                  </button>
                  <button
                    onClick={() => ChangeIsModal(true, FromAcount.REGISTER)}
                    type="button"
                  >
                    Đăng Ký
                  </button>
                </div>
              ) : (
                <div className="MenuLeft__accountSuccess">
                  Xin Chào :
                  <span
                    style={{
                      padding: "0 5px",
                      color: "009fe3",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {loginUser.userName}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="MenuMobile__Content_UlMenuleft__Data">
            <div className="MenuMobile__Content_UlMenuleft__Home">
              <FaHome size="1.3rem" color="rgb(250, 62, 63)" />
              <Link
                to="/trang-chu"
                style={{ color: "black", paddingLeft: "10px" }}
              >
                Trang Chủ
              </Link>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Product">
              <button
                type="button"
                className="m-0 p-0"
                onClick={() => OpenListProduct()}
              >
                <FaShoppingCart size="1.2rem" color="rgb(250, 62, 63)" />
                <span className="MenuMobile__Content_UlMenuleft__Product__span">
                  Danh Mục Sản Phẩm
                </span>
                <span className="MenuMobile__Content_UlMenuleft__Product__icon">
                  <BiCaretDown size="1rem" />
                </span>
              </button>

              <ul
                className="MenuMobile__Content_UlMenuleft__ProductUL"
                style={{ display: `${isOpenListProduct ? "block" : "none"}` }}
              >
                {dataCategory.map((Data, index) => {
                  return (
                    <Link
                      to="/san-pham"
                      onClick={() => GetAllProduct(Data._id)}
                      style={{ color: "black" }}
                      key={index}
                    >
                      <li style={{ paddingTop: "10px" }}>
                        <BiChevronRight size="1rem" />
                        <span>{Data.category_title}</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Contact">
              <MdFiberNew size="1.2rem" color="rgb(250, 62, 63)" />
              <Link
                to="/san-pham-moi"
                style={{ color: "black", paddingLeft: "10px" }}
              >
                Sản Phẩm Mới
              </Link>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Contact">
              <AiFillDollarCircle size="1.2rem" color="rgb(250, 62, 63)" />
              <Link
                to="/khuyen-mai"
                style={{ color: "black", paddingLeft: "10px" }}
              >
                Khuyến Mãi
              </Link>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Product">
              <button
                type="button"
                className="m-0 p-0"
                onClick={() => OpenListFilterPrice()}
              >
                <RiFilter2Line size="1.2rem" color="rgb(250, 62, 63)" />
                <span className="MenuMobile__Content_UlMenuleft__Product__span">
                  Lọc SoFa
                </span>
                <span className="MenuMobile__Content_UlMenuleft__Product__icon">
                  <BiCaretDown size="1rem" />
                </span>
              </button>

              <ul
                className="MenuMobile__Content_UlMenuleft__ProductUL"
                style={{
                  display: `${isOpenListFilterPrice ? "block" : "none"}`,
                }}
              >
                <li>
                  <BiChevronRight size="1rem" />
                  <Link
                    to="/loc-gia-san-pham"
                    onClick={() => GetAllScreeningPrice(5000001)}
                  >
                    Dưới 5 Triệu
                  </Link>
                </li>
                <li>
                  <BiChevronRight size="1rem" />
                  <Link
                    to="/loc-gia-san-pham"
                    onClick={() => GetAllScreeningPrice(10000001)}
                  >
                    Dưới 10 Triệu
                  </Link>
                </li>
                <li>
                  <BiChevronRight size="1rem" />
                  <Link
                    to="/loc-gia-san-pham"
                    onClick={() => GetAllScreeningPrice(15000001)}
                  >
                    Dưới 15 Triệu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="MenuMobile__Content_UlMenuleft__Contact">
              <BiPhoneCall size="1.2rem" color="rgb(250, 62, 63)" />
              <Link
                to="/gioi-thieu"
                style={{ color: "black", paddingLeft: "10px" }}
              >
                Liên Hệ
              </Link>
            </div>
            {loginUser === null ? (
              ""
            ) : (
              <div className="MenuLetf__AcountLogout">
                <BiLogIn color="rgb(250, 62, 63)" size="1rem" />
                <button type="button" style={{}} onClick={() => logoutAcout()}>
                  {" "}
                  Đăng Xuất
                </button>
              </div>
            )}
          </div>
        </div>
        <button
          type="button"
          className="MenuMobile__icon__Bg"
          onClick={() => showMenu()}
        >
          .
        </button>
      </div>
    </div>
  );
};
export default MenuMobile;
