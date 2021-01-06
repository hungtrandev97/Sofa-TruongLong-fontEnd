import React from "react";
import "./Consulting.css";
import { Row, Col } from "reactstrap";

function Consulting() {
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
          <p style={{ paddingLeft: "20px" }}>
            Khung sofa được làm từ các loại gỗ cứng như gỗ dầu đã được qua công
            đoạn xử lý chống mối mọt và chống cong vênh sẽ giúp ghế chắc chắn và
            sử dụng bền lâu. Loại gỗ mềm hơn như gỗ thông là một lựa chọn phổ
            biến và giá cả phải chăng, nhưng nó có thể cong vênh hoặc gãy sau
            một thời gian ngắn hoặc khi gặp lực tác động mạnh trong quá trình sử
            dụng. Còn nếu khung ghế sofa làm bằng ván dăm, nhựa hoặc kim loại
            thì tốt nhất là không nên mua, vì nó chắc chắn sẽ bị cong vênh hoặc
            nứt và thường không thoải mái.
          </p>
          <b>BƯỚC 2: KIỂM TRA NÚT ĐỆM</b>
          <p style={{ paddingLeft: "20px" }}>
            Nệm mút D40 là loại thường dùng phổ biến trong sản xuất ghế sofa.
            Đây là loại nệm mút cao cấp hiện nay, chúng có màu trắng, độ bền
            cao, có khả năng chống xẹp lún tốt và không bị biến dạng sau thời
            gian sử dụng lâu dài. Đặc biệt hơn là chúng có thể chịu sức ép lớn.
            Bạn có thể kiểm tra khi ngồi xuống và đứng dậy, mặt ghế sẽ bung căng
            trở lại như ban đầu.
          </p>
          <b>BƯỚC 3: CHẤT LIỆU VẢI BỌC SOFA</b>
          <p style={{ paddingLeft: "20px" }}>
            Ghế sofa bằng vải bố, vải nỉ và ghế sofa da là những chất liệu bọc
            được sử dụng phổ biến nhất hiện nay. Các loại vải sợi nhỏ có thể là
            lựa chọn tuyệt vời, bởi nó khá đẹp, bền và dễ làm sạch. Tùy theo
            phong cách bạn muốn, vải sợi to sẽ thể hiện sự cứng cáp, mạnh mẽ và
            thoáng khí hơn. Vải có hoa văn nhỏ hoặc trơn với gam màu tối sẽ tốt
            hơn trong việc che giấu bụi bẩn
          </p>
        </div>
      </div>
    </div>
  );
}
export default Consulting;
