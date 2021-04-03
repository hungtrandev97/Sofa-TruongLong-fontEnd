/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ConsumerFooter from "../../components/Layout/Consumer/ConsumerFooter";
import "./404.css";

function ErrorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const Header = <></>;
  return (
    <div className="errorPage">
      {Header}
      <div className="errorPage__content">
        <img
          src="/img/errorPage.png"
          className="errorPage__content__image"
          alt="Logo"
        />
        <h2
          className="errorPage__content__Title font-ob-bold"
          style={{ color: "rgb(250, 62, 63)" }}
        >
          KHÔNG TÌM THẤY TRANG
        </h2>
        <p className="errorPage__content__descript">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã xảy ra lỗi. Xin vui lòng
          nhấp chuột
          <button
            type="button"
            className="errorPage__content__descript__btn"
            onClick={() => {
              history.goBack();
            }}
          >
            "Quay Lại"
          </button>
        </p>
        <button
          type="button"
          className="errorPage__content__btnBack"
          onClick={() => {
            history.goBack();
          }}
        >
          Quay Lại
        </button>
        <ConsumerFooter />
      </div>
    </div>
  );
}

export default ErrorPage;
