import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createCategorySuccess } from "../../store/actions/actions";
import { NotifySuccess, NotifyError, NotifyWarning } from "../Notify/Toast";
import { apiCreateCategory } from "../../services/category";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";

const createCategorySchema = Yup.object().shape({
  category_title: Yup.string().required("Tên Danh Mục Không Được Rỗng"),
});
function FormCreateCategory() {
  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    const req = await apiCreateCategory(value);
    if (req.status) {
      NotifySuccess("Tạo Thư Mục", "Thêm Thư Mục Thành Công");
      dispatch(createCategorySuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Tạo Thư Mục", `${req.message}`);
    } else {
      NotifyError("Tạo Thư Mục", `${req.message}`);
    }
  };
  return (
    <Formik
      initialValues={{
        category_title: "",
      }}
      validationSchema={createCategorySchema}
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
            <span className="ml-50 font-ob-bold"> Tạo Mới </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default FormCreateCategory;
