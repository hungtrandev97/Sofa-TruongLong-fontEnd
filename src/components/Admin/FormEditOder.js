import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";

export default function FormEditOder() {
  return (
    <Formik
      initialValues={{
        category_title: "",
        Product_title: "",
        Date_Oder: "",
      }}
      // validationSchema={createCategorySchema}
      onSubmit={(values) => {
        // onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="category_title" className="font-ob-bold">
              Danh Mục Sản Phẩm
            </Label>
            {errors.category_title && touched.category_title ? (
              <div className="invalid-feedback d-block">
                {errors.category_title}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="category_title"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="categoryTille"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Product_title" className="font-ob-bold">
              Sản Phẩm
            </Label>
            {errors.Product_title && touched.Product_title ? (
              <div className="invalid-feedback d-block">
                {errors.Product_title}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="Product_title"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="ProductTitle"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Date_Oder" className="font-ob-bold">
              Thời Gian Tạo Đơn Hàng
            </Label>
            {errors.Date_Oder && touched.Date_Oder ? (
              <div className="invalid-feedback d-block">{errors.Date_Oder}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="Date_Oder"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="DateOder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Customer__Address" className="font-ob-bold">
              Thời Gian Tạo Đơn Hàng
            </Label>
            {errors.Customer__Address && touched.Customer__Address ? (
              <div className="invalid-feedback d-block">
                {errors.Customer__Address}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="Customer__Address"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="CustomerAddress"
            />
          </FormGroup>

          <Button type="submit" color="primary" className="Create__Button">
            <span className="ml-50 font-ob-bold"> Chỉnh Sửa </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
