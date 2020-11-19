import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../services/auth";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import { NotifySuccess, NotifyWarning } from "../Notify/Toast";
import { registerSuccess } from "../../store/actions/actions";

const createAccountSchema = Yup.object().shape({
  Account_title: Yup.string().required("Tên Tài Khoản Không Được Rỗng"),
  PassWord: Yup.string().required("Mật Khẩu Không Được Rỗng"),
  email: Yup.string().email().required("Email không được rỗng"),
  gender: Yup.number().required("Giới tính không được rỗng"),
  address: Yup.string().required("Địa chỉ không được rỗng"),
  numberPhone: Yup.string().required("Số điện thoại không được rỗng"),
});

export default function FromCreateAccountManagement() {
  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    const req = await apiRegister(value);
    if (req.status) {
      NotifySuccess("Đăng Ký Tài Khoản", "Đăng Ký Thành Công");
      dispatch(registerSuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Đăng Ký Tài Khoản", `${req.message}`);
    } else {
      NotifyWarning("Đăng Ký Tài Khoản", `${req.message}`);
    }
  };
  return (
    <Formik
      initialValues={{
        Account_title: "",
        PassWord: "",
        email: "",
        gender: "",
        address: "",
        numberPhone: "",
      }}
      validationSchema={createAccountSchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="Account_title" className="font-ob-bold">
              Thêm tên tài Khoản
            </Label>
            {errors.Account_title && touched.Account_title ? (
              <div className="invalid-feedback d-block">
                {errors.Account_title}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="Account_title"
              placeholder="Nhập tên tài khoản"
              autoComplete="Accounttitle"
            />
          </FormGroup>
          <FormGroup>
            <Label for="PassWord" className="font-ob-bold">
              Mật Khẩu
            </Label>
            {errors.PassWord && touched.PassWord ? (
              <div className="invalid-feedback d-block">{errors.PassWord}</div>
            ) : null}
            <Field
              className="form-control"
              type="password"
              name="PassWord"
              placeholder="Nhập mật khẩu"
              autoComplete="Password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="font-ob-bold ">
              Email
            </Label>
            {errors.email && touched.email ? (
              <div className="invalid-feedback d-block  ">{errors.email}</div>
            ) : null}
            <Field
              className="form-control "
              type="email"
              name="email"
              placeholder="Nhập Email"
              autoComplete="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="gender" className="font-ob-bold ">
              Giới Tính
            </Label>
            {errors.gender && touched.gender ? (
              <div className="invalid-feedback d-block  ">{errors.gender}</div>
            ) : null}
            <Field
              className="form-control "
              type="number"
              name="gender"
              placeholder="Chọn Giới Tính"
              autoComplete="gender"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address" className="font-ob-bold ">
              Địa Chỉ
            </Label>
            {errors.address && touched.address ? (
              <div className="invalid-feedback d-block  ">{errors.address}</div>
            ) : null}
            <Field
              className="form-control "
              type="text"
              name="address"
              placeholder="Nhập Địa Chỉ"
              autoComplete="address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="numberPhone" className="font-ob-bold ">
              Số Điện Thoại
            </Label>
            {errors.numberPhone && touched.numberPhone ? (
              <div className="invalid-feedback d-block  ">
                {errors.numberPhone}
              </div>
            ) : null}
            <Field
              className="form-control "
              type="text"
              name="numberPhone"
              placeholder="Nhập Số Điện Thoại"
              autoComplete="numberPhone"
            />
          </FormGroup>
          <Button type="submit" color="primary" className="Account__Button">
            <span className="ml-50 font-ob-bold"> Tạo Mới </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
