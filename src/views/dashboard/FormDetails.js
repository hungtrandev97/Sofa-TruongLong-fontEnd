import React from "react";
import { Col, Row } from "reactstrap";
import { BiStar } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { IoIosInformationCircle, IoMdCart } from "react-icons/io";
import { AiFillGift } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";
import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import ItemProduct from "../../components/Consumer/Layout/ItemProduct";
import "./Details.css";

export default function FormDetails() {
  return (
    <div
      className="screen__Wep"
      style={{ paddingTop: "143px", background: "#ffffff" }}
    >
      <div className="Details__Form">
        <ChatBox />
        <Row>
          <Col
            lg={7}
            md={7}
            ms={12}
            xs={12}
            className="Details__Form__Col__Left"
          >
            <div className="Details__Form__Img__Left">
              <img
                src="/img/product/imageProduct.jpg"
                alt="img"
                width="100%"
                height="500px"
              />
            </div>
            <div className="Details__Form__ImgP__Left">
              <Row>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="85px"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="85px"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="85px"
                  />
                </Col>
                <Col
                  lg={3}
                  md={3}
                  ms={6}
                  xs={6}
                  className="Details__Form__ImgP__Col"
                >
                  <img
                    src="/img/product/imageProduct.jpg"
                    alt="img"
                    width="100%"
                    height="85px"
                  />
                </Col>
              </Row>
            </div>
            <div className="Details__Form__Customer__Left">
              <div className="Details__Form__Customer__icon">
                <BiStar size="1rem" color="rgb(250, 62, 63)" />
                <span style={{ color: "rgb(250, 62, 63)" }}>02</span>
                <span>Khách hàng </span>
                <span style={{ color: "rgb(250, 62, 63)" }}> đã mua</span>
              </div>
              <div className="Details__Form__Customer__Ul">
                <ul>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                  <li>
                    <FcCheckmark size="1rem" />
                    <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
                      Hưng Khánh Trần-
                    </span>
                    <span>0989564***</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            lg={5}
            md={5}
            ms={12}
            xs={12}
            className="Details__Form__Col__Right"
          >
            <div className="Details__Form__Right__Tittle">
              <p>Bàn Ghế Ăn</p>
            </div>
            <div style={{ paddingTop: "20px", color: "#757575" }}>
              <div className="Details__Form__Right__Price">
                <p>10.000.000đ</p>
                <del>12.000.00đ</del>
              </div>
              <div className="Details__Form__Right__Info">
                <IoIosInformationCircle size="20px" color="rgba(219,0,7,.7)" />
                <p>THÔNG SỐ:</p>
              </div>
              <div className="Details__Form__Right__Info__Ul">
                <ul>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Kích thước: </p>
                    <span> 3.3m x 1.7m x 0.9m </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Chất liệu: </p>
                    <span>
                      giả da Hàn Quốc cao cấp (có thể thay vải bố, nỉ, nhung)
                    </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Khung: </p>
                    <span>gỗ dầu (xử lý chống mối mọt, cong vênh)</span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Nệm: </p>
                    <span> mút D40 chống xẹp lún cao cấp </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <p>Bảo hành: </p>
                    <span> 5 năm</span>
                  </li>
                </ul>
              </div>
              <div className="Details__Form__Right__Sale">
                <AiFillGift size="20px" color="rgba(219,0,7,.7)" />
                <p>KHUYẾN MÃI:</p>
              </div>
              <div className="Details__Form__Right__Info__Ul">
                <ul>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <span>
                      Tặng ngay 05 gối ôm + 02 ghế đôn nhỏ vuông / tròn + 01 bàn
                      kiếng H3
                    </span>
                  </li>
                  <li>
                    <b>
                      <BsCheckBox size="1rem" color="#23af4b" />
                    </b>
                    <span>Giảm 10% khi mua kèm thảm Châu Âu cao cấp </span>
                  </li>
                </ul>
              </div>
              <div className="Details__Form__Right__Order">
                <button type="button">
                  <IoMdCart size="16px" />
                  <span>Đặt Hàng</span>
                </button>
                <div className="Details__Form__Right__Phone">
                  <b>
                    <FaPhoneSquareAlt
                      className="Details__Form__Right__Phone__Icon"
                      size="35px"
                      color="#f57224"
                    />
                  </b>
                  <p>0966 484 484</p>
                </div>
              </div>
              <div className="Details__Form__Right__Address">
                <b>
                  <FaMapMarkerAlt size="20px" color="rgba(219,0,7,.7)" />
                </b>
                <span>
                  Xưởng sản xuất: 289/36 Nguyễn Thị Tú, P.Bình Hưng Hòa B,
                  Q.Bình Tân, TPHCM
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="Details__Form__Nav">
        <p>Bàn Ghế Ăn</p>
        <span>
          Với kiểu dáng hình chữ L hiện đại khi nhìn từ trên cao xuống, sofa
          phòng khách chung cư mã số SDT 018 sẽ giúp hoàn thện không gian sống
          của bạn một cách hoàn hảo. Mẫu ghế sofa giá rẻ này sẽ tận dụng tối đa
          diện tích căn phòng của bạn, giúp không gian rộng rãi, thông thoáng
          hơn. Nếu bạn cũng đang có nhu cầu mua một bộ sofa thiết thực cho chung
          cư thì không nên bỏ qua mẫu ghế sofa nhỏ đẹp này. Giới thiệu mẫu ghế
          sofa chữ L nhỏ đẹp mã SDT 018 So với các mẫu ghế sofa giá rẻ đến cao
          cấp đang được bày bán và phổ biến trên thị trường thì mẫu sofa chữ L
          SDT 018 cũng là một sự lựa chọn hoàn hảo dành cho những ai đang có nhu
          cầu. Sản phẩm mang nhiều ưu điểm vượt trội về chất liệu, kiểu dáng,
          màu sắc, cụ thể: - Chất liệu Sofa chữ L SDT 018 lựa chọn chất liệu gỗ
          dầu để sản xuất khung xương và làm trụ cột của bộ ghế sofa. Nhà sản
          xuất đã tính toán kỹ lưỡng về kết cấu và đảm bảo tỉ lệ để đảm bảo hệ
          khung xương của ghế luôn bền và đáp ứng đầy đủ công năng sử dụng vốn
          có của nó giúp hỗ trợ tốt tư thế của người ngồi. Khung gỗ dầu của ghế
          đã được sơn tĩnh điện giảm tối đa tình trạng mối mọt, côn trùng cắn
          phá và có khả năng chống ẩm cao. Do đó mẫu ghế này có thể được sử dụng
          trong nhiều môi trường khác nhau, đặc biệt thích hợp với khí hậu nóng
          ẩm tại Việt Nam và đảm bảo tuổi thọ ghế cao hơn khi chưa được xử lý.
          Đệm tựa ghế có độ cứng lý tưởng, được làm từ chất liệu mút D40 dẻo
          dai, có khả năng chống chảy xệ và độ đàn hồi vừa phải giúp ghế luôn êm
          ái, mang đến cảm giác thoải mái nhất cho người sử dụng. Lớp ngoài của
          nệm là chất liệu vải bọc bằng bố đã qua xử lý khử mùi và xử lý kỹ càng
          luôn đem lại vẻ đẹp mềm mại và sang trọng. Chất liệu vải bố được sản
        </span>
      </div>
      <div className="Details__Form__ProductCategory">
        <div className="Details__Form__ProductCategory__Tittle">
          <span>SẢN PHẨM CÙNG DANH MỤC</span>
        </div>
        <Row className="Cart__Relate__Product">
          {/* {dataProductSale.map((DataSale, index) => {
            return ( */}
          <Col lg={3} md={4} ms={6} xs={6}>
            <img className="Sale__Product__img" src="/img/Hot .gif" alt="img" />
            <ItemProduct
              className="Sale__Product__Data"
              idProduct=""
              title=""
              SouceProduct=""
              price=""
              pricePromotional=""
              imageMain=""
              product_priceNumber=""
              product_priceNumber_sale=""
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <img className="Sale__Product__img" src="/img/Hot .gif" alt="img" />
            <ItemProduct
              className="Sale__Product__Data"
              idProduct=""
              title=""
              SouceProduct=""
              price=""
              pricePromotional=""
              imageMain=""
              product_priceNumber=""
              product_priceNumber_sale=""
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <img className="Sale__Product__img" src="/img/Hot .gif" alt="img" />
            <ItemProduct
              className="Sale__Product__Data"
              idProduct=""
              title=""
              SouceProduct=""
              price=""
              pricePromotional=""
              imageMain=""
              product_priceNumber=""
              product_priceNumber_sale=""
            />
          </Col>
          <Col lg={3} md={4} ms={6} xs={6}>
            <img className="Sale__Product__img" src="/img/Hot .gif" alt="img" />
            <ItemProduct
              className="Sale__Product__Data"
              idProduct=""
              title=""
              SouceProduct=""
              price=""
              pricePromotional=""
              imageMain=""
              product_priceNumber=""
              product_priceNumber_sale=""
            />
          </Col>
          {/* );
          })} */}
        </Row>
      </div>
    </div>
  );
}
