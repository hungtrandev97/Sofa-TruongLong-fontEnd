import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { ReactSelect } from "./select/select";
import { registerSuccess } from "../../store/actions/actions";
import { apiRegister } from "../../services/auth";
import { NotifySuccess, NotifyWarning } from "../Notify/Toast";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import Login from "./Login";
import "./AcountUser.css";

const loginSchema = Yup.object().shape({
  userName: Yup.string().required("Tên đăng nhập không được rỗng"),
  password: Yup.string().required("Mật khẩu không được rỗng").min(6).max(20),
  email: Yup.string().email().required("Email không được rỗng"),
  address: Yup.string().required("Địa chỉ không được rỗng"),
  numberPhone: Yup.string().required("Số điện thoại không được rỗng"),
});

export default function Register() {
  const [gender, setGender] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    const concatData = {
      numberPhone: value.numberPhone,
      address: value.address,
      gender,
      email: value.email,
      password: value.password,
      userName: value.userName,
    };
    const req = await apiRegister(concatData);
    if (req.status) {
      NotifySuccess("Thông Báo", "Đăng Ký Thành Công");
      window.location.href = "/trang-chu";
      dispatch(registerSuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thông Báo", `${req.message}`);
    } else {
      NotifyWarning("Thông Báo", `${req.message}`);
    }
  };
  return (
    <>
      {!isLogin ? (
        <div className="AcountForm">
          <Formik
            initialValues={{
              userName: "",
              password: "",
              email: "",
              address: "",
              numberPhone: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              onFinalSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="FormLogin__Form" noValidate>
                <FormGroup>
                  <Label for="userName" className="font-ob-bold AcountLabel">
                    Tên Đăng Nhập
                  </Label>
                  {errors.userName && touched.userName ? (
                    <div className="invalid-feedback d-block  AcountError">
                      {errors.userName}
                    </div>
                  ) : null}
                  <Field
                    className="form-control AcountInput"
                    type="text"
                    name="userName"
                    placeholder="Nhập Tên Tài Khoản"
                    autoComplete="userName"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password" className="font-ob-bold AcountLabel">
                    Mật Khẩu
                  </Label>
                  {errors.password && touched.password ? (
                    <div className="invalid-feedback d-block  AcountError">
                      {errors.password}
                    </div>
                  ) : null}
                  <Field
                    className="form-control AcountInput"
                    type="password"
                    name="password"
                    placeholder="**********"
                    autoComplete="current-password"
                  />
                </FormGroup>
                <FormGroup>
                  <ReactSelect
                    label="Giới Tính"
                    options={[
                      { value: 1, label: "Nam" },
                      { value: 2, label: "Nữ" },
                    ]}
                    nameSelect="gender"
                    isClearable={false}
                    onHandleChange={(selectedOpt) => {
                      setGender(selectedOpt.value);
                    }}
                    selectedValue={gender}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="numberPhone" className="font-ob-bold AcountLabel">
                    Số Điện Thoại
                  </Label>
                  {errors.numberPhone && touched.numberPhone ? (
                    <div className="invalid-feedback d-block  AcountError">
                      {errors.numberPhone}
                    </div>
                  ) : null}
                  <Field
                    className="form-control AcountInput"
                    type="text"
                    name="numberPhone"
                    placeholder="Nhập Tên Tài Khoản"
                    autoComplete="numberPhone"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email" className="font-ob-bold AcountLabel">
                    Email
                  </Label>
                  {errors.email && touched.email ? (
                    <div className="invalid-feedback d-block  AcountError">
                      {errors.email}
                    </div>
                  ) : null}
                  <Field
                    className="form-control AcountInput"
                    type="email"
                    name="email"
                    placeholder="Nhập Tên Tài Khoản"
                    autoComplete="email"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="address" className="font-ob-bold AcountLabel">
                    Địa Chỉ
                  </Label>
                  {errors.address && touched.address ? (
                    <div className="invalid-feedback d-block  AcountError">
                      {errors.address}
                    </div>
                  ) : null}
                  <Field
                    className="form-control AcountInput"
                    type="text"
                    name="address"
                    placeholder="Nhập Tên Tài Khoản"
                    autoComplete="address"
                  />
                </FormGroup>
                <div style={{ float: "left" }}>
                  <Button
                    type="submit"
                    color="primary"
                    className="AcountButton"
                  >
                    <span className="ml-50 font-ob-bold">Đăng Ký</span>
                  </Button>
                </div>
                <div style={{ float: "right" }}>
                  <Button
                    onClick={() => setIsLogin(true)}
                    type="button"
                    color="primary"
                    className="AcountButton"
                  >
                    <span className="ml-50 font-ob-bold">
                      Bạn Đã Có Tài Khoản
                    </span>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
