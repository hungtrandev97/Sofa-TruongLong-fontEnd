import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { createCategorySuccess } from "../../store/actions/actions";
import { apiEditCategory } from "../../services/category";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";

const eidtCategorySchema = Yup.object().shape({
  category_title: Yup.string().required("Danh Mục Không Được Rỗng"),
});
export default function FormEditCategory({ match }) {
  const dispatch = useDispatch();
  const idCategoryUrl = match.params.idCategory;
  const onFinalSubmit = async (value) => {
    const req = await apiEditCategory(value, idCategoryUrl);
    if (req.status) {
      NotifySuccess("Chỉnh Sửa Danh Mục", "Chỉnh Sửa Thành Công");
      dispatch(createCategorySuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Chỉnh Sửa Danh Mục", `${req.message}`);
    } else {
      NotifyError("Chỉnh Sửa Danh Mục", `${req.message}`);
    }
  };
  return (
    <Formik
      initialValues={{
        category_title: "",
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
          <Button type="submit" color="primary" className="Create__Button">
            <span className="ml-50 font-ob-bold"> Chỉnh Sửa </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
