import React from "react";
import { Row, Col } from "reactstrap";
import { FaHome } from "react-icons/fa";
import { MdAttachMoney, MdSecurity } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import IntroduceContent from "./IntroduceContent";
import "./Introduce.css";

const Introduce = () => {
  return (
    <div className="Introduce screen__Wep">
      <Row className="Introduce__content">
        <Col lg={3} md={6} sm={12} className=" Introduce__content__Nav">
          <IntroduceContent
            Icon={<FaHome size="2.5rem" color="rgb(97, 192, 93)" />}
            Title="Sản phẩm chính hãng"
            Descript="Cam kết về chất lượng"
          />
        </Col>
        <Col lg={3} md={6} sm={12} className=" Introduce__content__Nav">
          <IntroduceContent
            Icon={<MdSecurity size="2.5rem" color="rgb(97, 192, 93)" />}
            Title="Bảo hành sản phẩm"
            Descript="Từ 3 năm đến 5 năm"
          />
        </Col>
        <Col lg={3} md={6} sm={12} className=" Introduce__content__Nav">
          <IntroduceContent
            Icon={<MdAttachMoney size="2.5rem" color="rgb(97, 192, 93)" />}
            Title="An toàn tài chính"
            Descript="Free Ship nội thành"
          />
        </Col>
        <Col lg={3} md={6} sm={12} className=" Introduce__content__Nav">
          <IntroduceContent
            Icon={<GiCutDiamond size="2.5rem" color="rgb(97, 192, 93)" />}
            Title="Tư vấn nhiệt tình 24/7"
            Descript="Tư vấn có chuyên môn"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Introduce;
