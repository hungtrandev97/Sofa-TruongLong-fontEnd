/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import Dropzone from "react-dropzone-uploader";
import NumberFormat from "react-number-format";
import CKEditor from "ckeditor4-react";
import * as Yup from "yup";
import UploadImagevIEW from "../firebase/uploadImage";
import RemoveImage from "../firebase/removeImage";
import { NotifySuccess, NotifyError, NotifyWarning } from "../Notify/Toast";
import { ReactSelect } from "../Forms/select/select";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import { apiEditProduct } from "../../services/product";

const editProductSchema = Yup.object().shape({
  product_title: Yup.string().required("Tên Sản Phẩm Không Được Rỗng"),
  product_code: Yup.number().required("Mã Sản Phẩm Không Được Rỗng"),
});
export default function FormEditProduct({ location }) {
  const dataProduct = location.state.row;
  const [isLoading, setIsLoading] = useState(false);
  const { dataCategory } = useSelector((state) => state.categoryRedux);
  const [categoryValue, setCategoryValue] = useState(dataProduct._category._id);
  const [dataTextarea, setDataTextarea] = useState(
    dataProduct.product_discript
  );
  const [productImage, setProductImage] = useState("");
  const [productImage1, setProductImage1] = useState("");
  const [productImage2, setProductImage2] = useState("");
  const [productImage3, setProductImage3] = useState("");
  const [changeImage, setChangeImage] = useState(false);
  const [changeImage1, setChangeImage1] = useState(false);
  const [changeImage2, setChangeImage2] = useState(false);
  const [changeImage3, setChangeImage3] = useState(false);
  const [productIndexValue, setproductIndexValue] = useState(
    dataProduct.product_index
  );
  const [productNewValue, setproductNewValue] = useState(
    dataProduct.product_new
  );
  const [price, setPrice] = useState(dataProduct.product_price);
  const [priceSale, setPriceSale] = useState(dataProduct.product_price_sale);
  const [productPriceNumber, setproductPriceNumber] = useState(
    dataProduct.product_priceNumber
  );
  const [productPriceNumberSale, setproductPriceNumberSale] = useState(
    dataProduct.product_priceNumber_sale
  );

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const changeImageProductIndex = ({ file }) => {
    setChangeImage(true);
    setProductImage(file);
  };

  const changeImages1 = ({ file }) => {
    setChangeImage1(true);
    setProductImage1(file);
  };
  const changeImages2 = ({ file }) => {
    setProductImage2(file);
    setChangeImage2(true);
  };
  const changeImages3 = ({ file }) => {
    setProductImage3(file);
    setChangeImage3(true);
  };
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

  const fnSetPrice = (value) => {
    setPrice(value.formattedValue);
    setproductPriceNumber(value.floatValue);
  };

  const fnSetPriceSale = (value) => {
    setPriceSale(value.formattedValue);
    setproductPriceNumberSale(value.floatValue);
  };

  const onFinalSubmit = async (value) => {
    setIsLoading(true);
    let urlImageFirebase = "";
    let productProductImageMainUrl = "";

    let urlimageIndex1 = "";
    let productImageUrl1 = "";

    let urlimageIndex2 = "";
    let productImageUrl2 = "";

    let urlimageIndex3 = "";
    let productImageUrl3 = "";

    // hinh chinh
    if (changeImage) {
      const uploadImage = await UploadImagevIEW(productImage);
      urlImageFirebase = uploadImage[0].spaceRef;
      productProductImageMainUrl = uploadImage[0].url;
    } else {
      urlImageFirebase = dataProduct.product_imageMain;
      productProductImageMainUrl = dataProduct.product_product_imageMainUrl;
    }

    // 3 hinh phu
    if (changeImage1) {
      const uploadImage1 = await UploadImagevIEW(productImage1);
      urlimageIndex1 = uploadImage1[0].spaceRef;
      productImageUrl1 = uploadImage1[0].url;
    } else {
      urlimageIndex1 = dataProduct.product_image1;
      productImageUrl1 = dataProduct.product_image_url1;
    }

    if (changeImage2) {
      const uploadImage2 = await UploadImagevIEW(productImage2);
      urlimageIndex2 = uploadImage2[0].spaceRef;
      productImageUrl2 = uploadImage2[0].url;
    } else {
      urlimageIndex2 = dataProduct.product_image2;
      productImageUrl2 = dataProduct.product_image_url2;
    }

    if (changeImage3) {
      const uploadImage3 = await UploadImagevIEW(productImage3);
      urlimageIndex3 = await uploadImage3[0].spaceRef;
      productImageUrl3 = await uploadImage3[0].url;
    } else {
      urlimageIndex3 = await dataProduct.product_image3;
      productImageUrl3 = await dataProduct.product_image_url3;
    }
    const concatData = await {
      _category: categoryValue,
      product_new: productNewValue,
      product_index: productIndexValue,
      product_discript: dataTextarea,
      product_title: value.product_title,
      product_code: value.product_code,
      product_imageMain: urlImageFirebase,
      product_product_imageMainUrl: productProductImageMainUrl,
      product_image1: urlimageIndex1,
      product_image_url1: productImageUrl1,
      product_image2: urlimageIndex2,
      product_image_url2: productImageUrl2,
      product_image3: urlimageIndex3,
      product_image_url3: productImageUrl3,
      product_price: price,
      product_price_sale: priceSale,
      product_priceNumber: productPriceNumber,
      product_priceNumber_sale: productPriceNumberSale,
      kich_thuoc: value.kich_thuoc,
      chat_lieu: value.chat_lieu,
      khung: value.khung,
      nem: value.name,
      bao_hanh: value.bao_hanh,
      khuyen_mai: value.khuyen_mai,
    };
    const req = await apiEditProduct(concatData, dataProduct._id);
    setIsLoading(false);
    if (req.status) {
      NotifySuccess("Chỉnh Sửa Sản Phẩm", "Chỉnh Sửa Phẩm Thành Công");
      if (changeImage) {
        await RemoveImage(dataProduct.product_product_imageMainUrl);
      }
      if (changeImage1) {
        await RemoveImage(dataProduct.product_image_url1);
      }
      if (changeImage2) {
        await RemoveImage(dataProduct.product_image_url2);
      }
      if (changeImage3) {
        await RemoveImage(dataProduct.product_image_url3);
      }
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Chỉnh Sửa Sản Phẩm", `${req.message}`);
    } else {
      NotifyError("Chỉnh Sửa Sản Phẩm", `${req.message}`);
    }
  };

  return (
    <Formik
      initialValues={{
        product_title: dataProduct.product_title,
        product_code: dataProduct.product_code,
        product_price: dataProduct.product_price,
        product_price_sale: dataProduct.product_price_sale,
        kich_thuoc: dataProduct.kich_thuoc,
        chat_lieu: dataProduct.chat_lieu,
        khung: dataProduct.khung,
        nem: dataProduct.nem,
        bao_hanh: dataProduct.bao_hanh,
      }}
      validationSchema={editProductSchema}
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
              inputContent={(
                <div>
                  <img src={dataProduct.product_imageMain} alt="" width="70" />
                </div>
              )}
              maxFiles={1}
              accept="image/*,audio/*,video/*"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Phụ Sản Phẩm 1
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={changeImages1}
              inputContent={(
                <div>
                  <img src={dataProduct.product_image1} alt="" width="70" />
                </div>
              )}
              maxFiles={1}
              accept="image/*,audio/*,video/*"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Phụ Sản Phẩm 2
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={changeImages2}
              inputContent={(
                <div>
                  <img src={dataProduct.product_image2} alt="" width="70" />
                </div>
              )}
              maxFiles={1}
              accept="image/*,audio/*,video/*"
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_image" className="font-ob-bold">
              Thêm Hình Phụ Sản Phẩm 3
            </Label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={changeImages3}
              inputContent={(
                <div>
                  <img src={dataProduct.product_image3} alt="" width="70" />
                </div>
              )}
              maxFiles={1}
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
            <NumberFormat
              thousandSeparator
              className="form-control"
              name="product_price"
              placeholder="Thêm Giá"
              autoComplete="productPrice"
              suffix="vnđ"
              onValueChange={(vals) => fnSetPrice(vals)}
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
              onValueChange={(vals) => fnSetPriceSale(vals)}
              defaultValue={priceSale}
            />
          </FormGroup>
          <FormGroup>
            <Label for="kich_thuoc" className="font-ob-bold">
              Kích Thước
            </Label>
            {errors.kich_thuoc && touched.kich_thuoc ? (
              <div className="invalid-feedback d-block">
                {errors.kich_thuoc}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="kich_thuoc"
              placeholder="Nhập Tên Kích"
              autoComplete="kich_thuoc"
            />
          </FormGroup>
          <FormGroup>
            <Label for="chat_lieu" className="font-ob-bold">
              Chất liệu
            </Label>
            {errors.chat_lieu && touched.chat_lieu ? (
              <div className="invalid-feedback d-block">{errors.chat_lieu}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="chat_lieu"
              placeholder="Nhập Tên Chất Liệu"
              autoComplete="chat_lieu"
            />
          </FormGroup>
          <FormGroup>
            <Label for="khung" className="font-ob-bold">
              Khung
            </Label>
            {errors.khung && touched.khung ? (
              <div className="invalid-feedback d-block">{errors.khung}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="khung"
              placeholder="Nhập Khung"
              autoComplete="khung"
            />
          </FormGroup>
          <FormGroup>
            <Label for="nem" className="font-ob-bold">
              Nệm
            </Label>
            {errors.nem && touched.nem ? (
              <div className="invalid-feedback d-block">{errors.nem}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="nem"
              placeholder="Nhập Nệm"
              autoComplete="nem"
            />
          </FormGroup>
          <FormGroup>
            <Label for="bao_hanh" className="font-ob-bold">
              Bảo Hành
            </Label>
            {errors.bao_hanh && touched.bao_hanh ? (
              <div className="invalid-feedback d-block">{errors.bao_hanh}</div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="bao_hanh"
              placeholder="Nhập Bảo Hành"
              autoComplete="bao_hanh"
            />
          </FormGroup>
          <FormGroup>
            <Label for="khuyen_mai" className="font-ob-bold">
              Khuyến Mãi
            </Label>
            {errors.khuyen_mai && touched.khuyen_mai ? (
              <div className="invalid-feedback d-block">
                {errors.khuyen_mai}
              </div>
            ) : null}
            <Field
              className="form-control"
              type="text"
              name="khuyen_mai"
              placeholder="Nhập Bảo Hành"
              autoComplete="khuyen_mai"
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
            <span className="ml-50 font-ob-bold"> Chỉnh Sửa </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
