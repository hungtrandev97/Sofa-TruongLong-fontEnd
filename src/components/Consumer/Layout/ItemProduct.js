import React from "react";
import PropTypes from "prop-types";
import "./ItemProduct.css";

const ItemProduct = ({ title, SouceProduct, price, pricePromotional }) => {
  return (
    <div className="ItemProduct">
      <div className="ItemProduct__Content">
        <img
          src="/img/product/imageProduct.jpg"
          style={{ width: "100%", height: "200px" }}
          alt="product"
        />
      </div>
      <div className="ItemProduct__Content__title">{title}</div>
      <div className="ItemProduct__Content__Source">
        <span>MSP-</span>
        <span>{SouceProduct}</span>
      </div>
      <div className="ItemProduct__Content__Price">
        <del className="ItemProduct__Content__Price__del">
          <span>{price}</span>
          <span>₫</span>
        </del>
        <span className="ItemProduct__Content__Price__span">-</span>
        <div className="ItemProduct__Content__Price__promotional">
          <span>{pricePromotional}</span>
        </div>
      </div>
      <div className="ItemProduct__Content__button">
        <button type="button"> Thêm Giỏ Hàng</button>
      </div>
    </div>
  );
};

ItemProduct.propTypes = {
  title: PropTypes.string,
  SouceProduct: PropTypes.number,
  price: PropTypes.string,
  pricePromotional: PropTypes.string,
};
ItemProduct.defaultProps = {
  title: "",
  SouceProduct: 1,
  price: "",
  pricePromotional: "",
};

export default ItemProduct;
