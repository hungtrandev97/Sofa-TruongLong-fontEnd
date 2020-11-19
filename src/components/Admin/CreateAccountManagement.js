import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FromCreateAccountManagement from "./FromCreateAccountManagement";

export default function CreateAccountManagement() {
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
        <FromCreateAccountManagement />
      </div>
    </div>
  );
}
