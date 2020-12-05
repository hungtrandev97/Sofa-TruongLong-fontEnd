import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FromCreateAccountManagement from "./FromCreateAccountManagement";
import "./AccountManagement.css";

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
      <div className="CreateAccountManagement">
        <FromCreateAccountManagement />
      </div>
    </div>
  );
}
