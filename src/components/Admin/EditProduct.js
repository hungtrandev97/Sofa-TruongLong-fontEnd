import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormEditProduct from "./FormEditProduct";

export default function EditProduct({ match, location }) {
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
          <BreadcrumbItem active>Chỉnh Sửa Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <FormEditProduct match={match} location={location} />
      </div>
    </div>
  );
}
