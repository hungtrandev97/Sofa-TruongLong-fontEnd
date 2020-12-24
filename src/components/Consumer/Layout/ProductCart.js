import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeCart, moreQuatitys } from "../../../store/actions/actions";
import "./ProductCart.css";

const ProductCart = ({ titlePage, cartData, pageMain }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeCart(id));
  };
  const updateQuatity = (id, moreQuatity) => {
    const data = [id, moreQuatity];
    dispatch(moreQuatitys(data));
  };
  return (
    <div>
      <div style={{ paddingBottom: "15px" }}>
        <div className="Header__Cart">
          <div className="Header__Cart__Title">{titlePage}</div>
          {pageMain === "cartMe" ? (
            ""
          ) : (
            <div>
              <span>MĐH-10000</span>
            </div>
          )}
        </div>
      </div>
      {cartData.map((item, index) => (
        <div key={index} style={{ paddingBottom: "15px" }}>
          <div className="Content__Cart">
            <div className="Content__Cart__Image">
              <img
                className="Content__Cart__img"
                src={`${item.imageMain}`}
                alt="img"
                style={{ width: "100px", paddingLeft: "15px" }}
              />
            </div>
            <div className="Content__Cart__content">
              <div className="Content__Cart__content__Nav">
                <div className="Content__Cart__content__title">
                  {item.title}
                </div>
                <div className="Content__Cart__content__Remove">
                  <RiDeleteBinLine
                    size="20px"
                    onClick={() => removeItem(item.idProduct)}
                  />
                </div>
              </div>

              <div className="Content__Cart__content__Source">
                <span>MSP-</span>
                <span>{item.SouceProduct}</span>
              </div>
              <div className="Content__Cart__content__Price">
                <div className="Content__Cart__content__Price__promotional">
                  <span>{item.pricePromotional}</span>
                </div>
              </div>
              <div className="quantity-input">
                <button
                  type="button"
                  disabled={`${item.quanity < 2 ? "disabled" : ""}`}
                  className="quantity-input__modifier quantity-input__modifier--left"
                  onClick={() =>
                    updateQuatity(item.idProduct, item.quanity - 1)}
                >
                  &mdash;
                </button>
                <input
                  className="quantity-input__screen"
                  type="text"
                  value={item.quanity}
                  readOnly
                />
                <button
                  type="button"
                  className="quantity-input__modifier quantity-input__modifier--right"
                  onClick={() =>
                    updateQuatity(item.idProduct, item.quanity + 1)}
                >
                  &#xff0b;
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
ProductCart.propTypes = {
  titlePage: PropTypes.string,
  pageMain: PropTypes.string,
};
ProductCart.defaultProps = {
  titlePage: "",
  pageMain: "",
};
export default ProductCart;
