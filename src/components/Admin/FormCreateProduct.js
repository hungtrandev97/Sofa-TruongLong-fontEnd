import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormGroup, Label } from "reactstrap";
import * as Yup from "yup";
import CKEditor from "ckeditor4-react";
import { apiCreateProduct } from "../../services/product";
import { NotifySuccess, NotifyError, NotifyWarning } from "../Notify/Toast";
import { ReactSelect } from "../Forms/select/select";
import { createProductSuccess } from "../../store/actions/actions";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";

const createProductSchema = Yup.object().shape({
  _category: Yup.string().required("Tên Danh Mục Không Được Rỗng"),
  product_title: Yup.string().required("Tên Sản Phẩm Không Được Rỗng"),
  product_code: Yup.number().required("Mã Sản Phẩm Không Được Rỗng"),
  product_discript: Yup.string().required("Mô Tả Không Được Rỗng"),
  // product_image: Yup.object().required("Bắt buộc phải có hình ảnh"),
  product_price: Yup.number().required("Bắt buộc phải có giá sản phẩm"),
  product_price_sale: Yup.number().required(""),
  product_new: Yup.number().required(),
});

function FormCreateProduct() {
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const [dataTextarea, setDataTextarea] = useState(
    `const data: '<p>React is really <em>nice</em>!</p>'`
  );
  const [categoryValue, setCategoryValue] = useState(1);
  const [productNewValue, setproductNewValue] = useState(1);
  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    const req = await apiCreateProduct(value);
    if (req.status) {
      NotifySuccess("Thêm Sản Phẩm", "Thêm Sản Phẩm Thành Công");
      dispatch(createProductSuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thêm Sản Phẩm", `${req.message}`);
    } else {
      NotifyError("Thêm Sản Phẩm", `${req.message}`);
    }
  };
  const ChangeTextarea = (changeEvent) => {
    console.log(changeEvent.editor.getData(), "changeEvent");
    setDataTextarea(changeEvent.editor.getData());
  };
  return (
    <Formik
      initialValues={{
        _category: "",
        product_title: "",
        product_code: "",
        product_discript: "",
        product_image: "",
        product_price: "",
        product_price_sale: "",
        product_new: "",
      }}
      validationSchema={createProductSchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <ReactSelect
              label="Tên Danh Mục Sản Phẩm"
              options={dataCategory}
              nameSelect="_category"
              optionsPlaceholder="Select Gender"
              isClearable={false}
              onHandleChange={(selectedOpt) => {
                setCategoryValue(selectedOpt.value);
              }}
              selectedValue={categoryValue}
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_title" className="font-ob-bold">
              Tên Sản Phẩm
            </Label>
            {errors.product_title && touched.product_title ? (
              <div className="invalid-feedback d-block">
                {errors.product_title}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="product_title"
              placeholder="Nhập Tên Sản Phẩm"
              autoComplete="producttitle"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_code" className="font-ob-bold">
              Mã Sản Phẩm
            </Label>
            {errors.product_code && touched.product_code ? (
              <div className="invalid-feedback d-block">
                {errors.product_code}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="number"
              name="product_code"
              placeholder="Nhập Mã Sản Phẩm"
              autoComplete="productCode"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_discript" className="font-ob-bold">
              Mô Tả Sản Phẩm
            </Label>
            {errors.product_discript && touched.product_discript ? (
              <div className="invalid-feedback d-block">
                {errors.product_discript}
              </div>
            ) : null}
            <div>
              <CKEditor
                data={dataTextarea}
                onChange={(value) => ChangeTextarea(value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Chính Sản Phẩm
            </Label>
            {errors.product_image && touched.product_image ? (
              <div className="invalid-feedback d-block">
                {errors.product_image}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="product_image"
              placeholder="Thêm Hình"
              autoComplete="productImage"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Phụ Sản Phẩm
            </Label>
            {errors.product_image && touched.product_image ? (
              <div className="invalid-feedback d-block">
                {errors.product_image}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="product_image"
              placeholder="Thêm Hình"
              autoComplete="productImage"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_price" className="font-ob-bold">
              Giá Sản Phẩm
            </Label>
            {errors.product_price && touched.product_price ? (
              <div className="invalid-feedback d-block">
                {errors.product_price}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="number"
              name="product_price"
              placeholder="Thêm Giá"
              autoComplete="productPrice"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_price_sale" className="font-ob-bold">
              Giá Khuyến Mãi
            </Label>
            {errors.product_price_sale && touched.product_price_sale ? (
              <div className="invalid-feedback d-block">
                {errors.product_price_sale}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="number"
              name="product_price_sale"
              placeholder="Thêm Giá Khuyến Mãi"
              autoComplete="productPriceSale"
            />
          </FormGroup>
          <FormGroup>
            <ReactSelect
              label="Sản Phẩm Mới"
              options={[
                { value: 1, label: "Có" },
                { value: 2, label: "Không" },
              ]}
              nameSelect="ProductNew"
              optionsPlaceholder="Sản phẩm mới"
              isClearable={false}
              onHandleChange={(selectedOpt) => {
                setproductNewValue(selectedOpt.value);
              }}
              selectedValue={productNewValue}
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
export default FormCreateProduct;
