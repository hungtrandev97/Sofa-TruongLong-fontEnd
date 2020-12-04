import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormCreateProduct from "./FormCreateProduct";
import "./Product.css";

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
      <div className="FromCreateProduct">
        <FormCreateProduct />
      </div>
    </div>
  );
}
