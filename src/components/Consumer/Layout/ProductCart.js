import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";
import "./ProductCart.css";

const ProductCart = ({
  titlePage,
  titleProduct,
  SouceProduct,
  price,
  imageMain,
  pageMain,
}) => {
  const [quatity, setQuatity] = useState(1);
  return (
    <div>
      <div style={{ paddingBottom: "15px" }}>
        <div className="Header__Cart">
          {pageMain === "cartMe" ? (
            <input type="checkbox" className="Header__Cart__input" />
          ) : (
            ""
          )}
          <div className="Header__Cart__Title">{titlePage}</div>
          {pageMain === "cartMe" ? (
            <div className="Header__Cart__Remove">
              <RiDeleteBinLine size="1.2rem" style={{ marginBottom: "5px" }} />
              <span>Xóa</span>
            </div>
          ) : (
            <div>
              <span>MĐH-10000</span>
            </div>
          )}
        </div>
      </div>
      <div className="Content__Cart">
        <div className="Content__Cart__Image">
          {pageMain === "cartMe" ? (
            <input
              type="checkbox"
              className="Content__Cart__input"
              style={{ marginTop: "40px" }}
            />
          ) : (
            ""
          )}

          <img
            className="Content__Cart__img"
            src={`${imageMain}`}
            alt="img"
            style={{ width: "100px", paddingLeft: "15px" }}
          />
        </div>
        <div className="Content__Cart__content">
          <div className="Content__Cart__content__title">{titleProduct}</div>
          <div className="Content__Cart__content__Source">
            <span>MSP-</span>
            <span>{SouceProduct}</span>
          </div>
          <div className="Content__Cart__content__Price">
            <div className="Content__Cart__content__Price__promotional">
              <span>{price}</span>
            </div>
          </div>
          <div className="quantity-input">
            <button
              type="button"
              disabled={`${quatity < 2 ? "disabled" : ""}`}
              className="quantity-input__modifier quantity-input__modifier--left"
              onClick={() => {
                setQuatity(quatity - 1);
              }}
            >
              &mdash;
            </button>
            <input
              className="quantity-input__screen"
              type="text"
              value={quatity}
              readOnly
            />
            <button
              type="button"
              className="quantity-input__modifier quantity-input__modifier--right"
              onClick={() => {
                setQuatity(quatity + 1);
              }}
            >
              &#xff0b;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductCart.propTypes = {
  titlePage: PropTypes.string,
  titleProduct: PropTypes.string,
  SouceProduct: PropTypes.number,
  price: PropTypes.string,
  imageMain: PropTypes.string,
  pageMain: PropTypes.string,
};
ProductCart.defaultProps = {
  titlePage: "",
  titleProduct: "",
  SouceProduct: 1,
  price: "",
  imageMain: "",
  pageMain: "",
};
export default ProductCart;
