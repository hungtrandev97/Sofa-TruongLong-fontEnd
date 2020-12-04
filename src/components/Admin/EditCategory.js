import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import FormEditCategory from "./FormEditCategory";
import "./CategoryPage.css";

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
      <div className="EditCategoryForm">
        <FormEditCategory match={match} location={location} />
      </div>
    </div>
  );
}
