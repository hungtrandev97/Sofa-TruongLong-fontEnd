import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import { UpdateIdProduct } from "../../../store/actions/actions";
import "./HeaderProduct.css";

function HeaderProduct({ title, category }) {
  const dispatch = useDispatch();
  const GetAllProduct = (id, category_title) => {
    const data = {
      id,
      category_title,
    };
    dispatch(UpdateIdProduct(data));
  };
  return (
    <div className="HeaderProduct">
      <div className="HeaderProduct__title">
        <span>{title}</span>
      </div>
      <div className="HeaderProduct__link">
        <Link onClick={() => GetAllProduct(category, title)} to="/san-pham">
          Xem Tất Cả
        </Link>
        <CgChevronRight />
      </div>
    </div>
  );
}

export default HeaderProduct;
