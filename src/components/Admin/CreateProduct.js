import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormCreateProduct from "./FormCreateProduct";

export default function CreateProduct() {
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
          <BreadcrumbItem active>Thêm Mới Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <FormCreateProduct />
      </div>
    </div>
  );
}
