import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormEditCategory from "./FormEditCategory";

export default function EditCategory({ match, location }) {
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
          <BreadcrumbItem active>Chỉnh Sửa Danh Mục</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <FormEditCategory match={match} location={location} />
      </div>
    </div>
  );
}
