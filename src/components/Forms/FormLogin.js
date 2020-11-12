import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import LabelLine from "../Labels/LabelLine";
import LabelLink from "../Labels/LabelLink";
import { loginUser } from "../../store/actions/auth.actions";
import "./FormLogin.css";

const loginSchema = Yup.object().shape({
  userName: Yup.string().required("Tên đăng nhập không được rỗng"),
  password: Yup.string().required("Mật khẩu không được rỗng").min(6).max(20),
});

const FormLogin = () => {
  const dispatch = useDispatch();
  const onFinalSubmit = (values) => {
    dispatch(loginUser(values));
  };
  return (
    <div className="FormLogin ">
      <LabelLine
        title="Đăng Nhập"
        styles={{
          marginBottom: "13px",
        }}
      />
      {/* {errorLogin && (
        <Alert
          color="danger"
          text="Your Email Address or password is incorrect. Please try again."
        />
      )} */}
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
            // errorlogin={errorLogin.toString()}
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
                <div className="invalid-feedback d-block">
                  {errors.userName}
                </div>
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
                <div className="invalid-feedback d-block">
                  {errors.password}
                </div>
              ) : null}
            </FormGroup>
            <Button type="submit" color="primary">
              <span className="ml-50 font-ob-bold">Đăng Nhập</span>
            </Button>
          </Form>
        )}
      </Formik>
      <LabelLink
        normalSentence="Chưa có tài khoản?"
        linkSentence="Tạo mới tài khoản ngay bây giờ."
        onLinkClick={() => {
          // authConsumerChangeView(AUTH_CONSUMER_VIEWS.REGISTER);
        }}
      />
    </div>
  );
};

export default FormLogin;
