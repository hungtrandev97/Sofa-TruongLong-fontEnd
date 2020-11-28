import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Button, FormGroup, Label } from "reactstrap";
import * as Yup from "yup";
import { ReactSelect } from "../Forms/select/select";
import { apiEditAccountAdmin } from "../../services/auth";
import { CategorySuccess } from "../../store/actions/actions";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";

const createAccountAdminSchema = Yup.object().shape({
  userName: Yup.string().required("Tên Tài Khoản Không Được Rỗng"),
  password: Yup.string().required("Mật Khẩu Không Được Rỗng"),
  email: Yup.string().email().required("Email không được rỗng"),
  address: Yup.string().required("Địa chỉ không được rỗng"),
  numberPhone: Yup.string().required("Số điện thoại không được rỗng"),
});
export default function FromEditAccount({ match }) {
  const dispatch = useDispatch();
  const [gender, setGender] = useState(1);
  const [role, setRole] = useState(1);
  const idAcountAdminUrl = match.params.idAccount;

  const onFinalSubmit = async (value) => {
    const concatData = {
      numberPhone: value.numberPhone,
      address: value.address,
      gender: value.gender,
      email: value.email,
      password: value.password,
      userName: value.userName,
      role: value.role,
    };
    const req = await apiEditAccountAdmin(concatData, idAcountAdminUrl);
    if (req.status) {
      NotifySuccess("Chỉnh Sửa Danh Mục", "Chỉnh Sửa Thành Công");
      dispatch(CategorySuccess(req));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Chỉnh Sửa Danh Mục", `${req.message}`);
    } else {
      NotifyError("Chỉnh Sửa Danh Mục", `${req.message}`);
    }
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
        gender,
        email: "",
        address: "",
        numberPhone: "",
        role,
      }}
      validationSchema={createAccountAdminSchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="userName" className="font-ob-bold">
              Thêm tên tài Khoản
            </Label>
            {errors.userName && touched.userName ? (
              <div className="invalid-feedback d-block">{errors.userName}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="userName"
              placeholder="Nhập tên tài khoản"
              autoComplete="userName"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="font-ob-bold">
              Mật Khẩu
            </Label>
            {errors.password && touched.password ? (
              <div className="invalid-feedback d-block">{errors.password}</div>
            ) : null}
            <Field
              className="form-control"
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              autoComplete="password"
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
            <ReactSelect
              label="Phân Quyền"
              options={[
                { value: 1, label: "Admin" },
                { value: 2, label: "User" },
              ]}
              nameSelect="role"
              isClearable={false}
              onHandleChange={(selectedOpt) => {
                setRole(selectedOpt.value);
              }}
              selectedValue={role}
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

          <Button
            // disabled={isLoading}
            type="submit"
            color="primary"
            className="Account__Button"
          >
            {/* {isLoading ? <Spinner size="sm" color="light" /> : ""} */}
            <span className="ml-50 font-ob-bold"> Chỉnh Sửa </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
