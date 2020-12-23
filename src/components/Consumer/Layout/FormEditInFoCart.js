import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";

const EditInfoCartSchema = Yup.object().shape({
  name_customer: Yup.string().required("Tên người nhận không được rỗng"),
  Address_Customer: Yup.string().required("Địa chỉ người nhận không được rỗng"),
  Phone_Customer: Yup.string().required("Số điện thoại không được rỗng"),
});

export default function FormEditInFoCart() {
  return (
    <Formik
      initialValues={{
        name_customer: "",
        Address_Customer: "",
        Phone_Customer: "",
      }}
      validationSchema={EditInfoCartSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="name_customer" className="font-ob-bold">
              Tên Người Nhận
            </Label>
            {errors.name_customer && touched.name_customer ? (
              <div className="invalid-feedback d-block">
                {errors.name_customer}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="name_customer"
              placeholder="Nhập tên người nhận"
              autoComplete="namecustomer"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Address_Customer" className="font-ob-bold">
              Địa chỉ người nhận
            </Label>
            {errors.Address_Customer && touched.Address_Customer ? (
              <div className="invalid-feedback d-block">
                {errors.Address_Customer}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="Address_Customer"
              placeholder="Nhập địa chỉ người nhận"
              autoComplete="AddressCustomer"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Phone_Customer" className="font-ob-bold">
              Số điện thoại người nhận
            </Label>
            {errors.Phone_Customer && touched.Phone_Customer ? (
              <div className="invalid-feedback d-block">
                {errors.Phone_Customer}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="string"
              name="Phone_Customer"
              placeholder="Nhập số điện thoại người nhận"
              autoComplete="PhoneCustomer"
            />
          </FormGroup>
          <Button type="submit" color="primary" className="Edit__Button">
            <span className="ml-50 font-ob-bold">Chỉnh Sửa</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
