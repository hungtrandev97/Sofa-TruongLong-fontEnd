/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { BiStar } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { IoIosInformationCircle, IoMdCart } from "react-icons/io";
import { AiFillGift } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";
import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import {
  apiGetAllDetail,
  apiGetAllGetAllCustomerBought,
} from "../../services/Details";
import { apiGetAllProductCategory } from "../../services/product";
import "./Details.css";

export default function FormDetails({ match }) {
  const idCegory = match.match.params.idCategory;
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCustomerBought, setCustomerBought] = useState([]);
  const [numberIdProduct, setNumberIdProduct] = useState();
  const [dataGetAllDetail, setDataGetAllDetail] = useState([]);
  const [imageMain, setImageMain] = useState("");
  const [filte, setFilte] = useState();

  const GetAllProductCategory = async () => {
    const response = await apiGetAllProductCategory(idCegory);
    setDataProduct(response.data);
  };
  const GetAllProduct = async () => {
    const response = await apiGetAllProductCategory(idCegory);
    setDataProduct(response.data);
  };
  if (numberIdProduct !== idCegory) {
    setNumberIdProduct(idCegory);
    if (!idCegory) {
      GetAllProduct();
    } else {
      GetAllProductCategory();
    }
  }

  useEffect(() => {
    setFilte(1);
    const idProductOneURL = match.match.params.id;
    const GetAllDetail = async () => {
      const GetAllCustomerBought = async () => {
        const getAllCustomerBought = await apiGetAllGetAllCustomerBought(
          idProductOneURL
        );
        if (getAllCustomerBought && getAllCustomerBought.data) {
          setCustomerBought(getAllCustomerBought.data);
        }
      };
      GetAllCustomerBought();
      const getAllDataDetail = await apiGetAllDetail(idProductOneURL);
      if (getAllDataDetail && getAllDataDetail.data[0]) {
        setDataGetAllDetail(getAllDataDetail.data[0]);
        setImageMain(getAllDataDetail.data[0].product_imageMain);
      }
    };
    GetAllDetail();
  }, []);
  const setimage = (value, number) => {
    setImageMain(value);
    setFilte(number);
  };
  return (
    <div
      className="screen__Wep"
      style={{ paddingTop: "143px", background: "#ffffff" }}
    >
      <div className="Details__Form">
        <ChatBox />
        <Row>
          <Col
            lg={7}
            md={7}
            ms={12}
            xs={12}
            className="Details__Form__Col__Left"
          >
            <div className="Details__Form__Img__Left">
              <img src={`${imageMain}`} alt="img" width="100%" height="auto" />
            </div>
            <div className="Details__Form__ImgP__Left">
              <Row>
                <Col
                  lg={3}
                  md={3}
                  ms={3}
                  xs={3}
                  className={`${
                    filte === 1
                      ? "Details__Form__ImgP__ColOpacity"
                      : "Details__Form__ImgP__Col"
                  }`}
                >
                  <img
                    onClick={() =>
                      setimage(dataGetAllDetail.product_imageMain, 1)
                    }
                    className="Details__Form__ImgP__Col__img"
                    src={`${dataGetAllDetail.product_imageMain}`}
                    alt="img"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={3}
                  xs={3}
                  className={`${
                    filte === 2
                      ? "Details__Form__ImgP__ColOpacity"
                      : "Details__Form__ImgP__Col"
                  }`}
                >
                  <img
                    onClick={() => setimage(dataGetAllDetail.product_image1, 2)}
                    className="Details__Form__ImgP__Col__img"
                    src={`${dataGetAllDetail.product_image1}`}
                    alt="img"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={3}
                  xs={3}
                  className={`${
                    filte === 3
                      ? "Details__Form__ImgP__ColOpacity"
                      : "Details__Form__ImgP__Col"
                  }`}
                >
                  <img
                    onClick={() => setimage(dataGetAllDetail.product_image2, 3)}
                    className="Details__Form__ImgP__Col__img"
                    src={`${dataGetAllDetail.product_image2}`}
                    alt="img"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={3}
                  xs={3}
                  className={`${
                    filte === 4
                      ? "Details__Form__ImgP__ColOpacity"
                      : "Details__Form__ImgP__Col"
                  }`}
                >
                  <img
                    onClick={() => setimage(dataGetAllDetail.product_image3, 4)}
                    className="Details__Form__ImgP__Col__img"
                    src={`${dataGetAllDetail.product_image3}`}
                    alt="img"
                  />
                </Col>
              </Row>
            </div>
            <div className="Details__Form__Customer__Left">
              <div className="Details__Form__Customer__icon">
                <BiStar size="1rem" color="rgb(250, 62, 63)" />
                <span style={{ color: "rgb(250, 62, 63)" }}>
                  {dataCustomerBought.length < 10 ? 0 : ""}
                  {dataCustomerBought.length}
                </span>
                <span>Khách hàng </span>
                <span style={{ color: "rgb(250, 62, 63)" }}> đã mua</span>
              </div>
              <div className="Details__Form__Customer__Ul">
                {dataCustomerBought.length > 0 ? (
                  <ul>
                    {dataCustomerBought.map((dataBought, index) => (
                      <li key={index}>
                        <FcCheckmark size="1rem" />
                        <span
                          style={{ fontWeight: "bold", paddingLeft: "5px" }}
                        >
                          {dataBought._cart.name}
                        </span>
{" "}
                        <span>{dataBought._cart.numberPhone}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>
          <Col
            lg={5}
            md={5}
            ms={12}
            xs={12}
            className="Details__Form__Col__Right"
          >
            <div className="Details__Form__Right__Tittle">
              <p>{dataGetAllDetail.product_title}</p>
            </div>
            <div style={{ paddingTop: "20px", color: "#757575" }}>
              <div className="Details__Form__Right__Price">
                <p>{dataGetAllDetail.product_price_sale}</p>
                <del>{dataGetAllDetail.product_price}</del>
              </div>
              <div className="Details__Form__Right__Info">
                <IoIosInformationCircle size="20px" color="rgba(219,0,7,.7)" />
                <p>THÔNG SỐ:</p>
              </div>
              <div className="Details__Form__Right__Info__Ul">
                <ul>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Kích thước: </p>
                    <span> 3.3m x 1.7m x 0.9m </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Chất liệu: </p>
                    <span>
                      giả da Hàn Quốc cao cấp (có thể thay vải bố, nỉ, nhung)
                    </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Khung: </p>
                    <span>gỗ dầu (xử lý chống mối mọt, cong vênh)</span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Nệm: </p>
                    <span> mút D40 chống xẹp lún cao cấp </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Bảo hành: </p>
                    <span> 5 năm</span>
                  </li>
                </ul>
              </div>
              <div className="Details__Form__Right__Sale">
                <AiFillGift size="20px" color="rgba(219,0,7,.7)" />
                <p>KHUYẾN MÃI:</p>
              </div>
              <div className="Details__Form__Right__Info__Ul">
                <ul>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <span>
                      Tặng ngay 05 gối ôm + 02 ghế đôn nhỏ vuông / tròn + 01 bàn
                      kiếng H3
                    </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <span>Giảm 10% khi mua kèm thảm Châu Âu cao cấp </span>
                  </li>
                </ul>
              </div>
              <div className="Details__Form__Right__Order">
                <button type="button">
                  <IoMdCart size="16px" />
                  <span>Đặt Hàng</span>
                </button>
                <div className="Details__Form__Right__Phone">
                  <b>
                    <FaPhoneSquareAlt
                      className="Details__Form__Right__Phone__Icon"
                      size="35px"
                      color="#f57224"
                    />
                  </b>
                  <p>0966 484 484</p>
                </div>
              </div>
              <div className="Details__Form__Right__Address">
                <b>
                  <FaMapMarkerAlt size="20px" color="rgba(219,0,7,.7)" />
                </b>
                <span>
                  Xưởng sản xuất: 289/36 Nguyễn Thị Tú, P.Bình Hưng Hòa B,
                  Q.Bình Tân, TPHCM
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="Details__Form__Nav">
        <p>{dataGetAllDetail.product_title}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: dataGetAllDetail.product_discript,
          }}
        />
        {/* <xmp>{dataGetAllDetail.product_discript}</xmp> */}
      </div>
      <div className="Details__Form__ProductCategory">
        <div className="Details__Form__ProductCategory__Tittle">
          <span>SẢN PHẨM CÙNG DANH MỤC</span>
        </div>
        <Row className="Cart__Relate__Product">
          {dataProduct.map((DataProduct, index) => {
            return (
              <Col lg={3} md={4} ms={6} xs={6} key={index}>
                <ItemProduct
                  className="Sale__Product__Data"
                  idProduct={DataProduct._id}
                  title={DataProduct.product_title}
                  SouceProduct={DataProduct.product_code}
                  price={DataProduct.product_price}
                  pricePromotional={DataProduct.product_price_sale}
                  imageMain={DataProduct.product_imageMain}
                  product_priceNumber={DataProduct.product_priceNumber}
                  product_priceNumber_sale={
                    DataProduct.product_priceNumber_sale
                  }
                  idCategory={DataProduct._category._id}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
