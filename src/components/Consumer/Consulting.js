import React from "react";
import "./Consulting.css";
import { GiDividedSquare } from "react-icons/gi";
import { Row, Col } from "reactstrap";

function Consulting() {
  return (
    <div className="Consulting screen__Wep">
      <div className="Consulting__Header">
        <h3>TƯ VẤN SOFA</h3>
        <GiDividedSquare className="Consulting__Header__icon" />
      </div>
      <Row className="Consulting__Header__img">
        <Col lg={6} md={6} sm={12}>
          <img
            src="/img/default/tuvan.png"
            width="100%"
            height="200px"
            alt="tuvan"
          />
        </Col>
        <Col lg={3} md={3} sm={12}>
          <img
            src="/img/default/iloveu.png"
            width="100%"
            height="200px"
            alt="iloveu"
          />
        </Col>
        <Col lg={3} md={3} sm={12}>
          <img
            src="/img/default/tuvan1.png"
            width="100%"
            height="200px"
            alt="tuvan1"
          />
        </Col>
      </Row>
      <div className="Consulting__Header__Content">
        <h4>LỜI KHUYÊN KHI MUA GHẾ SOFA</h4>
        <b>BƯỚC 1: CHỌN KHUNG GHẾ SOFA</b>
        <p>
          Khung sofa được làm từ các loại gỗ cứng như gỗ dầu đã được qua công
          đoạn xử lý chống mối mọt và chống cong vênh sẽ giúp ghế chắc chắn và
          sử dụng bền lâu. Loại gỗ mềm hơn như gỗ thông là một lựa chọn phổ biến
          và giá cả phải chăng, nhưng nó có thể cong vênh hoặc gãy sau một thời
          gian ngắn hoặc khi gặp lực tác động mạnh trong quá trình sử dụng. Còn
          nếu khung ghế sofa làm bằng ván dăm, nhựa hoặc kim loại thì tốt nhất
          là không nên mua, vì nó chắc chắn sẽ bị cong vênh hoặc nứt và thường
          không thoải mái.
        </p>
        <b>BƯỚC 2: KIỂM TRA NÚT ĐỆM</b>
        <p>
          Khung sofa được làm từ các loại gỗ cứng như gỗ dầu đã được qua công
          đoạn xử lý chống mối mọt và chống cong vênh sẽ giúp ghế chắc chắn và
          sử dụng bền lâu. Loại gỗ mềm hơn như gỗ thông là một lựa chọn phổ biến
          và giá cả phải chăng, nhưng nó có thể cong vênh hoặc gãy sau một thời
          gian ngắn hoặc khi gặp lực tác động mạnh trong quá trình sử dụng. Còn
          nếu khung ghế sofa làm bằng ván dăm, nhựa hoặc kim loại thì tốt nhất
          là không nên mua, vì nó chắc chắn sẽ bị cong vênh hoặc nứt và thường
          không thoải mái.
        </p>
        <b>BƯỚC 3: CHẤT LIỆU VẢI BỌC SOFA</b>
        <p>
          Ghế sofa bằng vải bố, vải nỉ và ghế sofa da là những chất liệu bọc
          được sử dụng phổ biến nhất hiện nay. Các loại vải sợi nhỏ có thể là
          lựa chọn tuyệt vời, bởi nó khá đẹp, bền và dễ làm sạch. Tùy theo phong
          cách bạn muốn, vải sợi to sẽ thể hiện sự cứng cáp, mạnh mẽ và thoáng
          khí hơn. Vải có hoa văn nhỏ hoặc trơn với gam màu tối sẽ tốt hơn trong
          việc che giấu bụi bẩn
        </p>
      </div>
    </div>
  );
}
export default Consulting;
