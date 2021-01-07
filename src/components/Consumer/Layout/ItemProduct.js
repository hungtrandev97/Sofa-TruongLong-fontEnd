import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NotifySuccess } from "../../Notify/Toast";
import {
  addCart
  moreQuatitys,
  updateValueProduct,
} from "../../../store/actions/actions";
import "./ItemProduct.css";

const ItemProduct = ({
  idProduct,
  title,
  SouceProduct,
  price,
  pricePromotional,
  imageMain,
  product_priceNumber,
  product_priceNumber_sale,
  idCategory,
}) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartRedux);
  const addCartInRedux = () => {
    NotifySuccess("Thông Báo", "Thêm vào giỏ hàng thành công");
    const data = [
      ...cartData,
      {
        idProduct,
        title,
        SouceProduct,
        price,
        pricePromotional,
        imageMain,
        product_priceNumber,
        product_priceNumber_sale,
        quanity: 1,
      },
    ];
    let checkItemProduct = false;
    let moreQuatity = 1;
    if (cartData.length > 0) {
      cartData.forEach((element) => {
        if (element.idProduct === idProduct) {
          checkItemProduct = true;
          moreQuatity += element.quanity;
        }
      });
    } else {
      dispatch(addCart(data));
    }
    if (checkItemProduct === true) {
      const dataUpdateQuatity = [idProduct, moreQuatity];
      dispatch(moreQuatitys(dataUpdateQuatity));
    } else {
      dispatch(addCart(data));
    }
  };
  const setValueProduct = () => {
    const dataValue = {
      idCategory,
      idProduct,
    };
    dispatch(updateValueProduct(dataValue));
  };
  return (
    <div className="ItemProduct">
      <Link onClick={() => setValueProduct()} to="/chi-tiet-san-pham">
        <div className="ItemProduct__Content">
          <img
            src={`${imageMain}`}
            style={{
              width: "100%",
              height: "200px",
              padding: "5px",
              objectFit: "contain",
            }}
            alt="product"
          />
        </div>
        <div className="ItemProduct__Content__title" style={{ color: "black" }}>
          {title}
        </div>
      </Link>
      <div className="ItemProduct__Content__Source">
        <span>MSP-</span>
        <span>{SouceProduct}</span>
      </div>
      <div className="ItemProduct__Content__Price">
        {pricePromotional !== "" ? (
          <del className="ItemProduct__Content__Price__del">
            <span>{price}</span>
          </del>
        ) : (
          <div className="ItemProduct__Content__Price__promotional">
            <span>{price}</span>
          </div>
        )}
        {pricePromotional ? (
          <span className="ItemProduct__Content__Price__span">-</span>
        ) : (
          ""
        )}

        <div className="ItemProduct__Content__Price__promotional">
          <span>{pricePromotional}</span>
        </div>
      </div>

      <div className="ItemProduct__Content__button">
        <button type="button" onClick={() => addCartInRedux()}>
          Thêm Giỏ Hàng
        </button>
      </div>
    </div>
  );
};

ItemProduct.propTypes = {
  idProduct: PropTypes.string,
  title: PropTypes.string,
  SouceProduct: PropTypes.number,
  price: PropTypes.string,
  pricePromotional: PropTypes.string,
  imageMain: PropTypes.string,
  product_priceNumber: PropTypes.number,
  product_priceNumber_sale: PropTypes.number,
};
ItemProduct.defaultProps = {
  idProduct: "",
  title: "",
  SouceProduct: 1,
  price: "",
  pricePromotional: "",
  imageMain: "",
  product_priceNumber: 0,
  product_priceNumber_sale: 0,
};

export default ItemProduct;
