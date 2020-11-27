import React, { useState } from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";
import Dropzone from "react-dropzone-uploader";
import CKEditor from "ckeditor4-react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { ReactSelect } from "../Forms/select/select";

const editProductSchema = Yup.object().shape({
  product_title: Yup.string().required("Tên Sản Phẩm Không Được Rỗng"),
  product_code: Yup.number().required("Mã Sản Phẩm Không Được Rỗng"),
  product_price: Yup.number().required("Bắt buộc phải có giá sản phẩm"),
  product_price_sale: Yup.number().required(""),
});
export default function FormEditProduct({ match }) {
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const [categoryValue, setCategoryValue] = useState("");
  const [dataTextarea, setDataTextarea] = useState("");
  const ChangeTextarea = (ChangeEvent) => {
    setDataTextarea(ChangeEvent.editor.getData());
  };
  const dataCategoryDefault = [];
  dataCategory.forEach((item) => {
    dataCategoryDefault.push({
      value: `${item._id}`,
      label: `${item.category_title}`,
    });
  });
  return (
    <Formik
      initialValues={{
        product_title: "",
        product_code: "",
        product_price: "",
        product_price_sale: "",
      }}
      validationSchema={editProductSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Chỉnh Sửa Chính Sản Phẩm
            </Label>
            <Dropzone maxFiles={1} accept="image/*,audio/*,video/*" />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Chỉnh Sửa Phụ Sản Phẩm
            </Label>
            <Dropzone maxFiles={4} accept="image/*,audio/*,video/*" />
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
              autoComplete="productTitle"
            />
          </FormGroup>
          <FormGroup>
            <ReactSelect
              label="Tên Danh Mục Sản Phẩm"
              options={dataCategoryDefault}
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
            <ReactSelect
              label="Sản Phẩm Mới"
              options={[
                { value: 1, label: "Có" },
                { value: 2, label: "Không" },
              ]}
              nameSelect="ProductNew"
              optionsPlaceholder="Sản phẩm mới"
              isClearable={false}
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
