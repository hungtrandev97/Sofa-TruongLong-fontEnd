import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../store/actions/actions";
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
}) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartRedux);
  const addCartInRedux = () => {
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
    dispatch(addCart(data));
  };
  return (
    <div className="ItemProduct">
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
      <div className="ItemProduct__Content__title">{title}</div>
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

        <span className="ItemProduct__Content__Price__span">-</span>
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
