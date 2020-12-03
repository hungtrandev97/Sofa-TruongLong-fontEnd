import React, { useState } from "react";
// import io from "socket.io-client";
import { Row, Col } from "reactstrap";
import { RiContactsLine, RiArrowRightSFill } from "react-icons/ri";
import { ImHome3, ImPhone } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { SiInternetexplorer } from "react-icons/si";
import { BsCheckBox } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import "./FooterConsumer.css";

// let socket;
function FooterConsumer() {
  const [numberOnline, setNumberOnline] = useState(2);
  const [numberCountOnline, setNumberCountOnline] = useState(97);
  // const ENDPOINT = "http://localhost:3002/";
  // socket = io(ENDPOINT);
  // socket.on("numberOnline", (numberIo) => {
  //   setNumber(numberIo);
  //   console.log(numberIo, "check");
  // });
  // console.log(number);

  // useEffect(() => {
  //   const socket = io("http://192.168.1.155:3002");
  //   socket.on("timer", (time) => {
  //     setTimer(time);
  //   });
  // });
  const year = new Date().getFullYear();
  sessionStorage.setItem("name", "Ted Mosby");
  const a = window.sessionStorage;

  return (
    <div className="FooterCosumer">
      <div className="FooterCosumer__content screen__Wep">
        <Row className="FooterCosumer__content__Content">
          <Col lg={6} md={6} sm={12} className="FooterCosumer__Left">
            <div className="FooterCosumer_Left_Header">
              <div className="FooterCosumer_Left_Header_Icon">
                <RiContactsLine size="1rem" color="#23b7e5" />
              </div>
              <div className="FooterCosumer_Left_Header_span">
                <h1>LIÊN HỆ</h1>
              </div>
            </div>
            <div className="FooterCosumer_left_Content">
              <h1 style={{ color: "rgb(35, 183, 229)" }}> SOFA TRƯỜNG LONG</h1>
              <div className="FooterCosumer_left_Content_Address">
                <ImHome3 size="0.8rem" color="#23b7e5" />
                <span>
                  Địa Chỉ: 289/36 Nguyễn Thị Tú, P.Bình Hưng Hòa B, Q.Bình Tân,
                  TPHCM
                </span>
              </div>
              <div className="FooterCosumer_left_Content_Phone">
                <Col>
                  <ImPhone size="0.8rem" color="#23b7e5" />
                  <span> 0966 484 484 </span>
                </Col>
                <Col>
                  <MdPhoneIphone size="0.8rem" color="#23b7e5" />
                  <span> 0762 607 636 </span>
                </Col>
              </div>
              <div className="FooterCosumer_left_Content_Email">
                <Col>
                  <CgMail size="1rem" color="#23b7e5" />
                  <span> @xuongsofa.truonglong </span>
                </Col>
                <Col>
                  <SiInternetexplorer size="0.8rem" color="#23b7e5" />
                  <span> Sofatruonglong.com </span>
                </Col>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} className="FooterCosumer__center">
            <div className="FooterCosumer__center__header">
              <div>
                <BsCheckBox size="1rem" color="#23b7e5" />
              </div>
              <div className="FooterCosumer_Center_Header_span">
                <h1>CHÍNH SÁCH</h1>
              </div>
            </div>
            <div className="FooterCosumer__center__FBandZL">
              <a href="https://www.facebook.com/xuongsofa.truonglong/">
                <img
                  className="Footer_facebook"
                  src="/img/default/facebook_logo.png"
                  alt="facebook"
                />
              </a>
              <a
                href="http://zalo.me/0966284484"
                className="FooterCosumer__center__Zalo"
              >
                <img
                  className="Footer_Zalo"
                  src="/img/default/icon-zalo.png"
                  alt="zalo"
                />
              </a>
            </div>
            <div className="FooterCosumer__center__Tutorial">
              <RiArrowRightSFill size="1.3rem" color="#23b7e5" />
              <span> Hướng dẫn đặt hàng</span>
            </div>
            <div className="FooterCosumer__center__Tutorial">
              <RiArrowRightSFill size="1.3rem" color="#23b7e5" />
              <span> Chính Sách Vẫn Chuyển</span>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} className="FooterCosumer__right">
            <div className="FooterCosumer_Right_Header">
              <div className="FooterCosumer_Right_Header_Icon">
                <BiWrench size="1rem" color="#23b7e5" />
              </div>
              <div className="FooterCosumer_Right_Header_span">
                <h1>BẢO TRÌ</h1>
              </div>
            </div>
            <div className="FooterCosumer__center__Tutorial">
              <RiArrowRightSFill size="1.3rem" color="#23b7e5" />
              <span> Vệ Sinh SOFA</span>
            </div>
            <div className="FooterCosumer__center__Tutorial">
              <RiArrowRightSFill size="1.3rem" color="#23b7e5" />
              <span> Sửa Chữa SOFA</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer_year">
        <span>
          &copy;&nbsp;
          {year}
          &nbsp;-&nbsp;SOFA TRƯỜNG LONG
        </span>
      </div>
    </div>
  );
}
export default FooterConsumer;
