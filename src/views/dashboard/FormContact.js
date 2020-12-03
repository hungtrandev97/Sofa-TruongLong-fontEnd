import React from "react";
import { Row, Col } from "reactstrap";
import { ImHome3, ImPhone } from "react-icons/im";
import { FaAddressCard, FaUserAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { SiInternetexplorer } from "react-icons/si";
import { BiMap } from "react-icons/bi";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import "./FormContact.css";

export default function FormContact() {
  return (
    <div className="FormContact screen__Wep" style={{ paddingTop: "143px" }}>
      <ChatBox />
      <div className="FromContact__Header">
        <p>Liên Hệ</p>
        <p>
          <AiOutlineContacts size="1.5rem" color="#122f5b" />
        </p>
      </div>
      <div className="FromContact__Content">
        <Row style={{ paddingBottom: "50px" }}>
          <Col lg={6} md={12} sm={12}>
            <div className="Content__Left">
              <ImHome3 size="1rem" color="rgb(35, 183, 229)" />
              <span>SOFA GIÁ RẺ TRƯỜNG LONG</span>
            </div>
            <div className="Content__Left Content__Left__Address">
              <FaAddressCard size="1rem" color="rgb(35, 183, 229)" />
              <span>
                Địa Chỉ: 289/36 Nguyễn Thị Tú, P.Bình Hưng Hòa B, Q.Bình Tân,
                TPHCM
              </span>
            </div>
            <div className="Content__Left Content__Left__Phone">
              <ImPhone size="1rem" color="rgb(35, 183, 229)" />
              <span>0966 484 484</span>
            </div>
            <div className="Content__Left Content__Left__Email">
              <MdEmail size="1rem" color="rgb(35, 183, 229)" />
              <span>@xuongsofa.truonglong</span>
            </div>
            <div className="Content__Left Content__Left__Website">
              <SiInternetexplorer size="1rem" color="#23b7e5" />
              <span>Sofatruonglong.com</span>
            </div>

            <div className="Content__Left Content__Left__Map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.93567103311!2d106.59732931462285!3d10.816234992294547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b9600cfc4f5%3A0xb0d82bbaa6c901e!2zMjg5LCAzNiDEkC4gTmd1eeG7hW4gVGjhu4sgVMO6LCBCw6xuaCBIxrBuZyBIw7JhIEIsIELDrG5oIFTDom4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1606748512259!5m2!1svi!2s"
                width="600"
                height="450"
                frameBorder="0"
                style={{
                  border: 0,
                  width: "100%",
                  height: "300px",
                  paddingTop: "30px",
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="Content__Right">
              <div className="Content__Right__Name Input__Style">
                <FaUserAlt size="1rem" color="rgb(35, 183, 229)" />
                <input type="text" placeholder="Họ và tên (*)" />
              </div>
              <div className="Content__Right__Phone Input__Style">
                <FaPhoneSquareAlt size="1rem" color="rgb(35, 183, 229)" />
                <input type="number" placeholder="Điện thoại (*)" />
              </div>
              <div className="Content__Right__Email Input__Style">
                <MdEmail size="1rem" color="rgb(35, 183, 229)" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="Content__Right__Address Input__Style">
                <BiMap size="1rem" color="rgb(35, 183, 229)" />
                <input type="text" placeholder="Địa Chỉ" />
              </div>
              <div
                className="Content__Right__Button"
                style={{ paddingTop: "20px" }}
              >
                <button to="/">Gửi</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
