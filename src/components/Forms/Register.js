import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { apiRegister } from "../../services/auth";
import "./AcountUser.css";

const loginSchema = Yup.object().shape({
  userName: Yup.string().required("Tên đăng nhập không được rỗng"),
  password: Yup.string().required("Mật khẩu không được rỗng").min(6).max(20),
  email: Yup.string().email().required(),
  gender: Yup.number().required(),
  address: Yup.string().required(),
  numberPhone: Yup.number().required(),
});
export default function Register() {
  const onFinalSubmit = async (value) => {
    const req = await apiRegister(value);
    if (req.status) {
      console.log("true");
    } else {
      console.log("flase");
    }
  };
  return (
    <Formik
      initialValues={{
        userName: "hungtrandev97",
        password: "123456",
        email: "hungtrandev97@gmail.com.vn",
        gender: 1,
        address: "duong quang ham - go vap",
        numberPhone: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="FormLogin__Form"
          // style={{ marginTop: `${errorLogin ? "24px" : "53px"}` }}
          noValidate
        >
          <FormGroup>
            <Label for="userName" className="font-ob-bold">
              Tên Đăng Nhập
            </Label>
            <Field
              className="form-control"
              type="text"
              name="userName"
              placeholder="Nhập Tên Tài Khoản"
              autoComplete="userName"
            />
            {errors.userName && touched.userName ? (
              <div className="invalid-feedback d-block">{errors.userName}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <div className="d-flex align-items-center justify-content-between">
              <Label for="password" className="font-ob-bold">
                Nhập Mật Khẩu
              </Label>
            </div>
            <Field
              className="form-control"
              type="password"
              name="password"
              placeholder="**********"
              autoComplete="current-password"
            />
            {errors.password && touched.password ? (
              <div className="invalid-feedback d-block">{errors.password}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="email" className="font-ob-bold">
              Email
            </Label>
            <Field
              className="form-control"
              type="email"
              name="email"
              placeholder="Nhập Tên Tài Khoản"
              autoComplete="email"
            />
            {errors.email && touched.email ? (
              <div className="invalid-feedback d-block">{errors.userName}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="gender" className="font-ob-bold">
              Giới Tính
            </Label>
            <Field
              className="form-control"
              type="number"
              name="gender"
              placeholder="Nhập Tên Tài Khoản"
              autoComplete="gender"
            />
            {errors.gender && touched.gender ? (
              <div className="invalid-feedback d-block">{errors.userName}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="address" className="font-ob-bold">
              Địa Chỉ
            </Label>
            <Field
              className="form-control"
              type="text"
              name="address"
              placeholder="Nhập Tên Tài Khoản"
              autoComplete="address"
            />
            {errors.address && touched.address ? (
              <div className="invalid-feedback d-block">{errors.userName}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="numberPhone" className="font-ob-bold">
              Số Điện Thoại
            </Label>
            <Field
              className="form-control"
              type="text"
              name="numberPhone"
              placeholder="Nhập Tên Tài Khoản"
              autoComplete="numberPhone"
            />
            {errors.numberPhone && touched.numberPhone ? (
              <div className="invalid-feedback d-block">{errors.userName}</div>
            ) : null}
          </FormGroup>
          <Button type="submit" color="primary">
            <span className="ml-50 font-ob-bold">Đăng Ký</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
