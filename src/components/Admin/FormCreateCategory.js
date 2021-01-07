import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { CategorySuccess } from "../../store/actions/actions";
import { ReactSelect } from "../Forms/select/select";
import { NotifySuccess, NotifyError, NotifyWarning } from "../Notify/Toast";
import { apiCreateCategory } from "../../services/category";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";

const createCategorySchema = Yup.object().shape({
  category_title: Yup.string().required("Tên Danh Mục Không Được Rỗng"),
});

function FormCreateCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [checkProduct, setCheckProduct] = useState(2);
  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    const concatData = {
      category_title: value.category_title,
      checkProduct,
    };
    setIsLoading(true);
    const req = await apiCreateCategory(concatData);
    setIsLoading(false);
    if (req.status) {
      NotifySuccess("Thông Báo", "Thêm Thư Mục Thành Công");
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
          <Button
            disabled={isLoading}
            type="submit"
            color="primary"
            className="Create__Button"
          >
            {isLoading ? <Spinner size="sm" color="light" /> : ""}
            <span className="ml-50 font-ob-bold"> Tạo Mới </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default FormCreateCategory;
