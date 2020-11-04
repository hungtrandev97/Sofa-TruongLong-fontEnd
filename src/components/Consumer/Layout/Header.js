import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css"

export default function Header() {
  return (
    <div className="HeaderConsumer">
        <div className="HeaderConsumer__user">
          <Container>
              Tai Khoan
          </Container>
        </div>
        <div className="HeaderConsumer__Nav">
          Tài Khoản
        </div>
    </div>
  )
}
