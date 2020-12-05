/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ConsumerHeader from "../../components/Layout/Consumer/ConsumerHeader";
import ConsumerFooter from "../../components/Layout/Consumer/ConsumerFooter";
import { ROLE } from "../../constants/DefaultValues";
import "./404.css";

function ErrorPage() {
  const history = useHistory();
  const { loginUser } = useSelector((state) => state.authRedux);
  let Header = <></>;
  let goBack = (
    <a className="errorPage__btnBack" href="/home">
      Sofatruonglong.com
    </a>
  );
  if (loginUser && loginUser.role) {
    if (loginUser.role === ROLE.PATIENT) {
      Header = <ConsumerHeader />;
      goBack = (
        <a className="errorPage__btnBack" href="/consumer/profiles">
          Sofatruonglong.com
        </a>
      );
    } else if (loginUser.role === ROLE.HCP) {
      goBack = (
        <a className="errorPage__btnBack" href="/hcp">
          Sofatruonglong.com
        </a>
      );
    }
  }
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
          {/* hoặc trở lại
          {goBack}
          để chọn một trang mới. */}
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
