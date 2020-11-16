import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormGroup, Label } from "reactstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiCreateProduct } from "../../services/product";
import { NotifySuccess, NotifyError, NotifyWarning } from "../Notify/Toast";
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
  product_new: Yup.boolean().required(true),
  product_size: Yup.string().required("hãy chọn kích thước"),
});
function FormCreateProduct() {
  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    const req = await apiCreateProduct(value);
    console.log(req, "req");
    if (req.status) {
      NotifySuccess("Thêm Sản Phẩm", "Thêm Sản Phẩm Thành Công");
      dispatch(createProductSuccess(req.data));
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thêm Sản Phẩm", `${req.message}`);
    } else {
      NotifyError("Thêm Sản Phẩm", `${req.message}`);
    }
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
        product_size: "",
      }}
      validationSchema={createProductSchema}
      onSubmit={(values) => {
        console.log(values);
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="_category" className="font-ob-bold">
              Tên Danh Mục Sản Phẩm
            </Label>
            {errors._category && touched._category ? (
              <div className="invalid-feedback d-block">{errors._category}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="_category"
              placeholder="Nhập Tên Danh Mục"
              autoComplete="category"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_title" className="font-ob-bold">
              Thêm Sản Phẩm
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
              type="text"
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
            <Field
              className="form-control"
              type="text"
              name="product_discript"
              placeholder="Nhập Mô Tả Sản Phẩm"
              autoComplete="productDiscript"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Sản Phẩm
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
              type="text"
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
              type="text"
              name="product_price_sale"
              placeholder="Thêm Giá Khuyến Mãi"
              autoComplete="productPriceSale"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_new" className="font-ob-bold">
              Sản Phẩm Mới
            </Label>
            {errors.product_new && touched.product_new ? (
              <div className="invalid-feedback d-block">
                {errors.product_new}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="product_new"
              placeholder="Thêm Sản Phẩm Mới"
              autoComplete="productNew"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_size" className="font-ob-bold">
              Kích Thước
            </Label>
            {errors.product_size && touched.product_size ? (
              <div className="invalid-feedback d-block">
                {errors.product_size}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="product_size"
              placeholder="Thêm Kích Thước"
              autoComplete="productSize"
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
