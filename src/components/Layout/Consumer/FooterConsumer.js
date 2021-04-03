import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { RiContactsLine, RiArrowRightSFill } from "react-icons/ri";
import { ImHome3, ImPhone } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { SiInternetexplorer } from "react-icons/si";
import { BsCheckBox } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { VscEye } from "react-icons/vsc";
import { apiGetAllSetting } from "../../../services/setting";
import "./FooterConsumer.css";

function FooterConsumer() {
  const [dataSetting, setDataSetting] = useState([]);
  useEffect(() => {
    const GetAllSetting = async () => {
      const dataGetAllSetting = await apiGetAllSetting();
      if (dataGetAllSetting && dataGetAllSetting.data) {
        setDataSetting(dataGetAllSetting.data[0]);
      }
    };
    GetAllSetting();
  }, []);

  const { numberOnline, totalNumberOnline } = useSelector(
    (state) => state.authRedux
  );
  const year = new Date().getFullYear();

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
                <span>{dataSetting.address}</span>
              </div>
              <div className="FooterCosumer_left_Content_Phone">
                <Col>
                  <ImPhone size="0.8rem" color="#23b7e5" />
                  <span>{dataSetting.numberPhone}</span>
                </Col>
                <Col>
                  <MdPhoneIphone size="0.8rem" color="#23b7e5" />
                  <span>{dataSetting.numberPhone1}</span>
                </Col>
              </div>
              <div className="FooterCosumer_left_Content_Email">
                <Col>
                  <CgMail size="1rem" color="#23b7e5" />
                  <span>{dataSetting.email}</span>
                </Col>
                <Col>
                  <SiInternetexplorer size="0.8rem" color="#23b7e5" />
                  <span> sofatruonglong.com</span>
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
                <h1>LIÊN Kết</h1>
              </div>
            </div>
            <div className="FooterCosumer__center__FBandZL">
              <a href={`${dataSetting.linkFB}`}>
                <img
                  className="Footer_facebook"
                  src="/img/default/facebook_logo.png"
                  alt="facebook"
                />
              </a>
              <a
                href={`http://zalo.me/${dataSetting.numberPhoneZallo}`}
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
              <span> Đã được liên kết Facebook</span>
            </div>
            <div className="FooterCosumer__center__Tutorial">
              <RiArrowRightSFill size="1.3rem" color="#23b7e5" />
              <span> Đã được liên kết Zalo</span>
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
            <div className="numberOnline">
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                <AiFillEye size="1rem" color="#23b7e5" />
              </span>
              <span>Đang Online:</span>
              <span>{numberOnline}</span>
            </div>
            <div className="numberOnline">
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                <VscEye size="1rem" color="#23b7e5" />
              </span>
              <span>Đã Xem:</span>
              <span>{totalNumberOnline}</span>
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
