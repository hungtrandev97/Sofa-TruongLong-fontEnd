import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  FormGroup,
  Label,
  Spinner,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Dropzone from "react-dropzone-uploader";
import { NotifySuccess, NotifyWarning, NotifyError } from "../Notify/Toast";
import RemoveImage from "../firebase/removeImage";
import UploadImagevIEW from "../firebase/uploadImage";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import { apiEditSetting } from "../../services/setting";

const editOderSchema = Yup.object().shape({
  Edit_NumberPhone: Yup.string().required("số điện thoại 1 rỗng"),
  Edit_NumberPhone1: Yup.string().required("số điện thoại 2 rỗng"),
  edit_Email: Yup.string().email().required("email rỗng"),
  edit_linkFBEdit: Yup.string().required(" link facebook rỗng"),
  edit_numberPhoneZalloEdit: Yup.string().required(" link zalo rỗng"),
  edit_support1Edit: Yup.string().required(" Hướng dẫn 1 rỗng"),
  edit_support2Edit: Yup.string().required(" Hướng dẫn 2 rỗng"),
  edit_support3Edit: Yup.string().required(" Hướng dẫn 3 rỗng"),
});

export default function EditSetting({ location }) {
  const dataSetting = location.state.row;
  const [isLoading, setIsLoading] = useState(false);
  const [settingImage1, setSettingImage1] = useState("");
  const [changeImage1, setChangeImage1] = useState(false);
  const [settingImage2, setSettingImage2] = useState("");
  const [changeImage2, setChangeImage2] = useState(false);
  const [settingImage3, setSettingImage3] = useState("");
  const [changeImage3, setChangeImage3] = useState(false);

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const changeImageSetting1 = ({ file }) => {
    setSettingImage1(file);
    setChangeImage1(true);
  };
  const changeImageSetting2 = ({ file }) => {
    setSettingImage2(file);
    setChangeImage2(true);
  };
  const changeImageSetting3 = ({ file }) => {
    setSettingImage3(file);
    setChangeImage3(true);
  };

  const onFinalSubmit = async (value) => {
    setIsLoading(true);
    let urlimageIndex1 = "";
    let productImageUrl1 = "";
    let urlimageIndex2 = "";
    let productImageUrl2 = "";
    let urlimageIndex3 = "";
    let productImageUrl3 = "";

    if (changeImage1) {
      const uploadImage1 = await UploadImagevIEW(settingImage1);
      urlimageIndex1 = uploadImage1[0].spaceRef;
      productImageUrl1 = uploadImage1[0].url;
    } else {
      urlimageIndex1 = dataSetting.imageSlider1;
      productImageUrl1 = dataSetting.imageSlider1Url;
    }

    if (changeImage2) {
      const uploadImage2 = await UploadImagevIEW(settingImage2);
      urlimageIndex2 = uploadImage2[0].spaceRef;
      productImageUrl2 = uploadImage2[0].url;
    } else {
      urlimageIndex2 = dataSetting.imageSlider2;
      productImageUrl2 = dataSetting.imageSlider2Url;
    }

    if (changeImage3) {
      const uploadImage3 = await UploadImagevIEW(settingImage3);
      urlimageIndex3 = uploadImage3[0].spaceRef;
      productImageUrl3 = uploadImage3[0].url;
    } else {
      urlimageIndex3 = dataSetting.imageSlider3;
      productImageUrl3 = dataSetting.imageSlider3Url;
    }

    const dataEditSetting = {
      imageSlider1: urlimageIndex1,
      imageSlider1Url: productImageUrl1,
      imageSlider2: urlimageIndex2,
      imageSlider2Url: productImageUrl2,
      imageSlider3: urlimageIndex3,
      imageSlider3Url: productImageUrl3,
      numberPhone: value.Edit_NumberPhone,
      numberPhone1: value.Edit_NumberPhone1,
      email: value.edit_Email,
      linkFB: value.edit_linkFBEdit,
      numberPhoneZallo: value.edit_numberPhoneZalloEdit,
      support1: value.edit_support1Edit,
      support2: value.edit_support2Edit,
      support3: value.edit_support3Edit,
    };
    const req = await apiEditSetting(dataEditSetting);
    setIsLoading(false);
    if (req.status) {
      NotifySuccess("Chỉnh Sửa Cài Đặt ", "Chỉnh Sửa Thành Công");
      if (changeImage1) {
        await RemoveImage(dataSetting.imageSlider1);
      }
      if (changeImage2) {
        await RemoveImage(dataSetting.imageSlider2);
      }
      if (changeImage3) {
        await RemoveImage(dataSetting.imageSlider3);
      }
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Chỉnh Sửa Cài Đặt ", `${req.message}`);
    } else {
      NotifyError("Chỉnh Sửa Cài Đặt", `${req.message}`);
    }
  };

  return (
    <div>
      <div
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Chỉnh Sửa Cài Đặt</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ padding: "30px 130px 30px 130px" }}>
        <Formik
          initialValues={{
            Edit_NumberPhone: dataSetting.numberPhone,
            Edit_NumberPhone1: dataSetting.numberPhone1,
            edit_Email: dataSetting.email,
            edit_linkFBEdit: dataSetting.linkFB,
            edit_numberPhoneZalloEdit: dataSetting.numberPhoneZallo,
            edit_support1Edit: dataSetting.support1,
            edit_support2Edit: dataSetting.support2,
            edit_support3Edit: dataSetting.support3,
          }}
          validationSchema={editOderSchema}
          onSubmit={(values) => {
            // alert("check");
            onFinalSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup>
                <Label for="Edit_slider1" className="font-ob-bold">
                  Slider1
                </Label>
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={changeImageSetting1}
                  inputContent={(
                    <div>
                      <img src={dataSetting.imageSlider1} alt="" width="70" />
                    </div>
                  )}
                  maxFiles={1}
                  accept="image/*,audio/*,video/*"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Edit_slider2" className="font-ob-bold">
                  Slider2
                </Label>
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={changeImageSetting2}
                  inputContent={(
                    <div>
                      <img src={dataSetting.imageSlider2} alt="" width="70" />
                    </div>
                  )}
                  maxFiles={1}
                  accept="image/*,audio/*,video/*"
                />
              </FormGroup>

              <FormGroup>
                <Label for="Edit_slider3" className="font-ob-bold">
                  Slider3
                </Label>
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={changeImageSetting3}
                  inputContent={(
                    <div>
                      <img src={dataSetting.imageSlider3} alt="" width="70" />
                    </div>
                  )}
                  maxFiles={1}
                  accept="image/*,audio/*,video/*"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Edit_NumberPhone" className="font-ob-bold">
                  Số điện thoại 1
                </Label>
                {errors.Edit_NumberPhone && touched.Edit_NumberPhone ? (
                  <div className="invalid-feedback d-block">
                    {errors.Edit_NumberPhone}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="Edit_NumberPhone"
                  placeholder="Nhập số điện thoại"
                  autoComplete="Edit_NumberPhone"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Edit_NumberPhone1" className="font-ob-bold">
                  Số điện thoại 2
                </Label>
                {errors.Edit_NumberPhone1 && touched.Edit_NumberPhone1 ? (
                  <div className="invalid-feedback d-block">
                    {errors.Edit_NumberPhone1}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="Edit_NumberPhone1"
                  placeholder="Nhập số điện thoại"
                  autoComplete="Edit_NumberPhone1"
                />
              </FormGroup>
              <FormGroup>
                <Label for="edit_Email" className="font-ob-bold">
                  Email
                </Label>
                {errors.edit_Email && touched.edit_Email ? (
                  <div className="invalid-feedback d-block">
                    {errors.edit_Email}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="edit_Email"
                  placeholder="Nhập Email"
                  autoComplete="edit_Email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="edit_linkFBEdit" className="font-ob-bold">
                  Link FaceBook
                </Label>
                {errors.edit_linkFBEdit && touched.edit_linkFBEdit ? (
                  <div className="invalid-feedback d-block">
                    {errors.edit_linkFBEdit}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="edit_linkFBEdit"
                  placeholder="Nhập Link facebook"
                  autoComplete="edit_linkFBEdit"
                />
              </FormGroup>
              <FormGroup>
                <Label for="edit_numberPhoneZalloEdit" className="font-ob-bold">
                  Link Zalo
                </Label>
                {errors.edit_numberPhoneZalloEdit &&
                touched.edit_numberPhoneZalloEdit ? (
                  <div className="invalid-feedback d-block">
                    {errors.edit_numberPhoneZalloEdit}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="edit_numberPhoneZalloEdit"
                  placeholder="Nhập Link zalo"
                  autoComplete="edit_numberPhoneZalloEdit"
                />
              </FormGroup>
              <FormGroup>
                <Label for="edit_support1Edit" className="font-ob-bold">
                  Hướng dẫn 1
                </Label>
                {errors.edit_support1Edit && touched.edit_support1Edit ? (
                  <div className="invalid-feedback d-block">
                    {errors.edit_support1Edit}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="edit_support1Edit"
                  placeholder="hướng dẫn 1"
                  autoComplete="edit_support1Edit"
                />
              </FormGroup>
              <FormGroup>
                <Label for="edit_support2Edit" className="font-ob-bold">
                  Hướng dẫn 2
                </Label>
                {errors.edit_support2Edit && touched.edit_support2Edit ? (
                  <div className="invalid-feedback d-block">
                    {errors.edit_support2Edit}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="edit_support2Edit"
                  placeholder="hướng dẫn 2"
                  autoComplete="edit_support2Edit"
                />
              </FormGroup>
              <FormGroup>
                <Label for="edit_support3Edit" className="font-ob-bold">
                  Hướng dẫn 1
                </Label>
                {errors.edit_support3Edit && touched.edit_support3Edit ? (
                  <div className="invalid-feedback d-block">
                    {errors.edit_support3Edit}
                  </div>
                ) : null}
                <Field
                  className="form-control"
                  type="text"
                  name="edit_support3Edit"
                  placeholder="Hướng dẫn 3"
                  autoComplete="edit_support3Edit"
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
      </div>
    </div>
  );
}
