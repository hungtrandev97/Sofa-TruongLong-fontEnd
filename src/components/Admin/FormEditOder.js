import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import { apiEditOder } from "../../services/Cart";

const editOderSchema = Yup.object().shape({
  address_title: Yup.string().required("Địa chỉ không được rỗng"),
});
export default function FormEditOder({ match, location }) {
  const idOderUrl = match.params.id;
  const addressEdit = location.state.address;
  const numberPhoneEdit = location.state.numberPhone;
  const onFinalSubmit = async (value) => {
    const DataEditOder = {
      address: value.address_title,
      numberPhone: value.Phone,
    };
    const req = await apiEditOder(idOderUrl, DataEditOder);
    if (req.status) {
      NotifySuccess("Chỉnh Sửa Đơn Hàng", "Chỉnh Sửa Thành Công");
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Chỉnh Sửa Đơn Hàng", `${req.message}`);
    } else {
      NotifyError("Chỉnh Sửa Đơn Hàng", `${req.message}`);
    }
  };
  return (
    <Formik
      initialValues={{
        address_title: addressEdit,
        Phone: numberPhoneEdit,
      }}
      validationSchema={editOderSchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="address_title" className="font-ob-bold">
              Địa Chỉ
            </Label>
            {errors.address_title && touched.address_title ? (
              <div className="invalid-feedback d-block">
                {errors.address_title}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="address_title"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="addressTitle"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Phone" className="font-ob-bold">
              Số điện thoại
            </Label>
            {errors.Phone && touched.Phone ? (
              <div className="invalid-feedback d-block">{errors.Phone}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="Phone"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="Phone"
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
