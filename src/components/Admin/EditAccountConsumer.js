import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormEditAccountConsumer from "./FormEditAccountConsumer";

export default function EditAccountConsumer({ match, location }) {
  return (
    <div>
      <div
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Chỉnh Sửa Tài Khoản</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <FormEditAccountConsumer match={match} location={location} />
      </div>
    </div>
  );
}