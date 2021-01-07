import React, { useEffect, useState } from "react";
import "./Consulting.css";
import { Row, Col } from "reactstrap";
import { apiGetAllSetting } from "../../services/setting";

function Consulting() {
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
  return (
    <div className="Consulting">
      <div className="Consulting__All screen__Wep">
        <h3 className="Consulting__Header">TƯ VẤN SOFA</h3>

        <Row className="Consulting__Header__img">
          <Col lg={6} md={6} sm={12}>
            <img src="/img/default/tuvan.png" width="100%" alt="tuvan" />
          </Col>
          <Col lg={3} md={3} sm={12}>
            <img src="/img/default/iloveu.png" width="100%" alt="iloveu" />
          </Col>
          <Col lg={3} md={3} sm={12}>
            <img src="/img/default/tuvan1.png" width="100%" alt="tuvan1" />
          </Col>
        </Row>
        <div className="Consulting__Header__Content">
          <h4>LỜI KHUYÊN KHI MUA GHẾ SOFA</h4>
          <b>BƯỚC 1: CHỌN KHUNG GHẾ SOFA</b>
          <p style={{ paddingLeft: "20px" }}>{dataSetting.support1}</p>
          <b>BƯỚC 2: KIỂM TRA NÚT ĐỆM</b>
          <p style={{ paddingLeft: "20px" }}>{dataSetting.support2}</p>
          <b>BƯỚC 3: CHẤT LIỆU VẢI BỌC SOFA</b>
          <p style={{ paddingLeft: "20px" }}>{dataSetting.support3}</p>
        </div>
      </div>
    </div>
  );
}
export default Consulting;
