/* eslint-disable react/prop-types */
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { ReactSelect } from "../Forms/select/select";
import { CategorySuccess } from "../../store/actions/actions";
import { apiEditCategory } from "../../services/category";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";

const eidtCategorySchema = Yup.object().shape({
  category_title: Yup.string().required("Danh Mục Không Được Rỗng"),
});

export default function FormEditCategory({ match, location }) {
  const [checkProduct, setCheckProduct] = useState(location.state.checkProduct);
  const CategoryTitle = location.state.category_title;
  const dispatch = useDispatch();
  const idCategoryUrl = match.params.idCategory;

  const onFinalSubmit = async (value) => {
    const concatData = {
      category_title: value.category_title,
      checkProduct,
    };
    const req = await apiEditCategory(concatData, idCategoryUrl);
    if (req.status) {
      NotifySuccess("Thông Báo", "Chỉnh Sửa Thành Công");
      dispatch(CategorySuccess(req));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thông Báo", `${req.message}`);
    } else {
      NotifyError("Thông Báo", `${req.message}`);
    }
  };
  return (
    <Formik
      initialValues={{
        category_title: CategoryTitle,
      }}
      validationSchema={eidtCategorySchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
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
            <ReactSelect
              label="Hiện thị trên trang chủ"
              options={[
                { value: 1, label: "Có" },
                { value: 2, label: "Không" },
              ]}
              nameSelect="checkProduct"
              optionsPlaceholder="Hiện thị trên trang chủ"
              isClearable={false}
              onHandleChange={(selectedOpt) => {
                setCheckProduct(selectedOpt.value);
              }}
              selectedValue={checkProduct}
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
