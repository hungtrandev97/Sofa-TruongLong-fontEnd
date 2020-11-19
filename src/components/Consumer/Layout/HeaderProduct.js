import React from "react";
import { Link } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import "./HeaderProduct.css";

function HeaderProduct({ title, link }) {
  return (
    <div className="HeaderProduct">
      <div className="HeaderProduct__title">
        <span>{title}</span>
      </div>
      <div className="HeaderProduct__link">
        <Link to={`${link}`}>Xem Tất Cả</Link>
        <CgChevronRight />
      </div>
    </div>
  );
}

export default HeaderProduct;
