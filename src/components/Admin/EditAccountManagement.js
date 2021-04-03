import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormEditAccountAdmin from "./FormEditAccountAdmin";
import "./AccountManagement.css";

export default function EditAccountManagement({ match, location }) {
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
      <div className="EditAccountManagement">
        <FormEditAccountAdmin match={match} location={location} />
      </div>
    </div>
  );
}
