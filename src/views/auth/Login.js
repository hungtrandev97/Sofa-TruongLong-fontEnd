import React from "react";
import { Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import FormLogin from "../../components/Forms/FormLogin";
import BackToHome from "../../components/User/BackToHome";
import "./Login.css";

function UserLogin() {
  return (
    <div className="UserLogin">
      <Row className="h-100 p-0 m-0">
        <Col sm={12} className="p-0 m-0">
          <div className="UserLogin__header">
            <BackToHome text="Home Page" />
            <div className="UserLogin__header__ToggleHeader">
              <div>Consumer</div>
              <div style={{ color: "#9da4af" }}>|</div>
              <div>Health Care professional</div>
            </div>
          </div>
          <div className="UserLogin__FormContainer">
            <FormLogin />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserLogin;
