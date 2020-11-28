/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import * as Yup from "yup";
import CKEditor from "ckeditor4-react";
import Dropzone from "react-dropzone-uploader";
import UploadImagevIEW from "../firebase/uploadImage";
import { apiCreateProduct } from "../../services/product";
import { NotifySuccess, NotifyError, NotifyWarning } from "../Notify/Toast";
import { ReactSelect } from "../Forms/select/select";
import { createProductSuccess } from "../../store/actions/actions";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import "react-dropzone-uploader/dist/styles.css";

const createProductSchema = Yup.object().shape({
  product_title: Yup.string().required("Tên Sản Phẩm Không Được Rỗng"),
  product_code: Yup.number().required("Mã Sản Phẩm Không Được Rỗng"),
});

function FormCreateProduct() {
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const [categoryValue, setCategoryValue] = useState("");
  const [price, setPrice] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [productNewValue, setproductNewValue] = useState(1);
  const [productIndexValue, setproductIndexValue] = useState(1);
  const [dataTextarea, setDataTextarea] = useState(
    `const data: '<p>Nội dung</p>'`
  );
  const [productImage, setProductImage] = useState("");

  const productImages = [];
  const concatImageToArray = [];

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  // receives array of files that are done uploading when submit button is clicked
  const changeImageProductIndex = ({ file }) => {
    setProductImage(file);
  };

  const changeImages = (files) => {
    if (files.meta.status === "done") {
      productImages.push(files);
    }
  };

  const dataCategoryDefault = [];
  dataCategory.forEach((item) => {
    dataCategoryDefault.push({
      value: `${item._id}`,
      label: `${item.category_title}`,
    });
  });
  useEffect(() => {
    setCategoryValue(dataCategory[0]._id);
  }, [dataCategory]);

  const dispatch = useDispatch();
  const onFinalSubmit = async (value) => {
    setIsLoading(true);
    const uploadImages = productImages.forEach(async (item) => {
      const urlimageIndex = await UploadImagevIEW(item.file);
      concatImageToArray.push(urlimageIndex);
    });
    console.log(uploadImages);
    const urlImageFirebase = await UploadImagevIEW(productImage);
    const concatData = {
      _category: categoryValue,
      product_new: productNewValue,
      product_index: productIndexValue,
      product_discript: dataTextarea,
      product_title: value.product_title,
      product_code: value.product_code,
      product_imageMain: urlImageFirebase,
      product_image: concatImageToArray,
      product_price: price.formattedValue,
      product_price_sale: priceSale.formattedValue,
    };
    if (urlImageFirebase !== "" && concatImageToArray !== "") {
      const req = await apiCreateProduct(concatData);
      setIsLoading(false);
      if (req.status) {
        NotifySuccess("Thêm Sản Phẩm", "Thêm Sản Phẩm Thành Công");
        dispatch(createProductSuccess(req.data));
      } else if (req.type === TYPE_NOTIFY.WARNING) {
        NotifyWarning("Thêm Sản Phẩm", `${req.message}`);
      } else {
        NotifyError("Thêm Sản Phẩm", `${req.message}`);
      }
    }
  };
  const ChangeTextarea = (changeEvent) => {
    setDataTextarea(changeEvent.editor.getData());
  };

  return (
    <Formik
      initialValues={{
        product_title: "",
        product_code: "",
        product_price: price,
        product_price_sale: priceSale,
      }}
      validationSchema={createProductSchema}
      onSubmit={(values) => {
        onFinalSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Chính Sản Phẩm
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={changeImageProductIndex}
              maxFiles={1}
              accept="image/*,audio/*,video/*"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Phụ Sản Phẩm
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={changeImages}
              maxFiles={3}
              accept="image/*,audio/*,video/*"
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
            {price === "" ? (
              <div className="invalid-feedback d-block">
                Bắt buộc phải có giá sản phẩm
              </div>
            ) : null}
            <NumberFormat
              thousandSeparator
              className="form-control"
              name="product_price"
              placeholder="Thêm Giá"
              autoComplete="productPrice"
              suffix="vnđ"
              onValueChange={(vals) => setPrice(vals)}
              defaultValue={price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_price_sale" className="font-ob-bold">
              Giá Khuyến Mãi
            </Label>
            <NumberFormat
              thousandSeparator
              className="form-control"
              name="product_price"
              placeholder="Thêm Giá"
              autoComplete="productPrice"
              suffix="vnđ"
              onValueChange={(vals) => setPriceSale(vals)}
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
              onHandleChange={(selectedOpt) => {
                setproductNewValue(selectedOpt.value);
              }}
              selectedValue={productNewValue}
            />
          </FormGroup>
          <FormGroup>
            <ReactSelect
              label="Hiện Thị Trang Chủ"
              options={[
                { value: 1, label: "Có" },
                { value: 2, label: "Không" },
              ]}
              nameSelect="ProductIndex"
              optionsPlaceholder="Hiện Thị Trang Chủ"
              isClearable={false}
              onHandleChange={(selectedOpt) => {
                setproductIndexValue(selectedOpt.value);
              }}
              selectedValue={productIndexValue}
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
export default FormCreateProduct;
