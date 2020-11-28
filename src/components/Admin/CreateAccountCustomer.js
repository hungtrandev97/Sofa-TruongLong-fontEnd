import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FromCreateAccountCustomer from "./FromCreateAccountCustomer";

export default function CreateAccountCustomer() {
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
          <BreadcrumbItem active>Thêm Mới Tài Khoản</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <FromCreateAccountCustomer />
      </div>
    </div>
  );
}
