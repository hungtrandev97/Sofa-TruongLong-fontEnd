import React from 'react';
import { Row, Col } from "reactstrap"
import { FaHome } from "react-icons/fa";
import {MdAttachMoney, MdSecurity } from "react-icons/md";
import {GiCutDiamond } from "react-icons/gi";
import './Introduce.css'

function Introduce() {
    return (
        <div className="Introduce screen__Wep">
            <Row className="Introduce__content">
                <Col lg={3} md={6} sm={12}  className=" Introduce__content__Nav">
                    <div className="Introduce__content__product" style={{ backgroundColor: "#fff"}}>
                        <div className="Introduce__content__icon"> <FaHome size="2.5rem" color="rgb(97, 192, 93)" /></div>
                        <div className="Introduce__content__span">
                            <span style={{ fontWeight: "bold", fontSize:"15px"}}>Sản phẩm chính hãng</span>
                            <span style={{fontSize:"14px", color:"#3a3f51db"}}>Cam kết về chất lượng</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}  className=" Introduce__content__Nav">
                    <div className="Introduce__content__product" style={{ backgroundColor: "#fff"}}>
                        <div className="Introduce__content__icon"> <MdSecurity size="2.5rem" color="rgb(97, 192, 93)" /></div>
                        <div className="Introduce__content__span">
                            <span style={{ fontWeight: "bold", fontSize:"15px"}}>An toàn tài chính</span>
                            <span style={{fontSize:"14px", color:"#3a3f51db"}}>Free Ship nội thành</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}  className=" Introduce__content__Nav">
                    <div className="Introduce__content__product" style={{ backgroundColor: "#fff"}}>
                        <div className="Introduce__content__icon"> <MdAttachMoney size="2.5rem" color="rgb(97, 192, 93)" /></div>
                        <div className="Introduce__content__span">
                            <span style={{ fontWeight: "bold",fontSize:"15px"}}>Giá thành hợp lý </span>
                            <span style={{fontSize:"14px", color:"#3a3f51db"}}>Phân phối trực tiếp</span>
                        </div>
                    </div>
                    
                </Col>
                <Col lg={3} md={6} sm={12}  className=" Introduce__content__Nav">
                    <div className="Introduce__content__product" style={{ backgroundColor: "#fff"}}>
                        <div className="Introduce__content__icon"> <GiCutDiamond size="2.5rem" color="rgb(97, 192, 93)" /></div>
                        <div className="Introduce__content__span">
                            <span style={{ fontWeight: "bold",fontSize:"15px"}}>Tư vấn nhiệt tình 24/7</span>
                            <span style={{fontSize:"14px", color:"#3a3f51db"}}>Tư vấn có chuyên môn</span>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </div>
    )
}

export default Introduce;
