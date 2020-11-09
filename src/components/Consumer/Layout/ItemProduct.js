import React from "react";
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
        <span>mã sản phẩm : - </span>
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
          <span>₫</span>
        </div>
      </div>
      <div className="ItemProduct__Content__button">
        <button type="button"> Thêm Giỏ Hàng</button>
      </div>
    </div>
  );
};

export default ItemProduct;
