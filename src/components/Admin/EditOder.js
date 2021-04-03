import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormEditOder from "./FormEditOder";

export default function EditOder({ match, location }) {
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
          <BreadcrumbItem active>Chỉnh Sửa Đơn Hàng</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <FormEditOder match={match} location={location} />
      </div>
    </div>
  );
}
