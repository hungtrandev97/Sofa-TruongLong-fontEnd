import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";

export default function FormEditCategory() {
  return (
    <Formik
      initialValues={{
        category_title: "",
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
          <Button type="submit" color="primary" className="Create__Button">
            <span className="ml-50 font-ob-bold"> Chỉnh Sửa </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
