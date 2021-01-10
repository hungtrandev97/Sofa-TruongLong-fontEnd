import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import Register from "./Register";
import { login, reloadLogin } from "../../store/actions/actions";

import "./AcountUser.css";

const loginSchema = Yup.object().shape({
  userName: Yup.string().required("Tên đăng nhập không được rỗng"),
  password: Yup.string().required("Mật khẩu không được rỗng").min(6).max(20),
});
export default function Login() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    dispatch(reloadLogin());
  }, [dispatch]);

  const { errorLogin } = useSelector((state) => state.authRedux);
  const onFinalSubmit = (value) => {
    dispatch(login(value));
  };
  return (
    <>
      {isLogin ? (
        <Formik
          initialValues={{
            userName: "",
            password: "",
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
              {errorLogin ? (
                <div className="invalid-feedback d-block AcountErrorSever">
                  Tài Khoản Hoặc Mật Khẩu Không Đúng
                </div>
              ) : (
                ""
              )}

              <FormGroup>
                <Label for="userName" className="font-ob-bold AcountLabel">
                  Tên Đăng Nhập
                </Label>
                {errors.userName && touched.userName ? (
                  <div className="invalid-feedback d-block AcountError">
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
                <div className="d-flex align-items-center justify-content-between AcountLabel">
                  <Label for="password" className="font-ob-bold AcountLabel">
                    Mật Khẩu
                  </Label>
                </div>
                {errors.password && touched.password ? (
                  <div className="invalid-feedback d-block AcountError">
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
              <div style={{ float: "left", paddingRight: "15px" }}>
                <Button type="submit" color="primary" className="AcountButton">
                  <span className="ml-50 font-ob-bold">Đăng Nhập</span>
                </Button>
              </div>
              <div style={{ float: "right" }}>
                <Button
                  onClick={() => setIsLogin(false)}
                  type="button"
                  color="primary"
                  className="AcountButton"
                >
                  <span className="ml-50 font-ob-bold">
                    Bạn Chưa Có Tài Khoản
                  </span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <Register />
      )}
    </>
  );
}
