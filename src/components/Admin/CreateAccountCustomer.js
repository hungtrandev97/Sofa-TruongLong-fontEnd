import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FromCreateAccountCustomer from "./FromCreateAccountCustomer";
import "./AccountCustomer.css";

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
      <div className="CreateAccountCustomer">
        <FromCreateAccountCustomer />
      </div>
    </div>
  );
}
