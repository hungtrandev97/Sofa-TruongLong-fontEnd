import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ImHome3, ImPhone } from "react-icons/im";
import { FaAddressCard, FaUserAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiInternetexplorer } from "react-icons/si";
import { BiMap } from "react-icons/bi";
import ChatBox from "../../components/Consumer/Layout/ChatBox";
import { apiSendContact } from "../../services/contcat";
import { NotifySuccess, NotifyWarning } from "../../components/Notify/Toast";
import { TYPE_NOTIFY } from "../../constants/DefaultValues";
import { apiGetAllSetting } from "../../services/setting";
import "./FormContact.css";

const sendContactSchema = Yup.object().shape({
  name_contact: Yup.string().required("Không được để trống tên của bạn"),
  phone_contact: Yup.string().required("Không được để trống số điện thoại"),
  email_contact: Yup.string().email().required("Email không được rỗng"),
  address_contact: Yup.string().required("Địa chỉ không được rỗng"),
  content_contact: Yup.string().required("Thêm nội dung cần hỗ trợ"),
});
export default function FormContact() {
  const [dataSetting, setDataSetting] = useState([]);

  useEffect(() => {
    const GetAllSetting = async () => {
      const dataGetAllSetting = await apiGetAllSetting();
      if (dataGetAllSetting && dataGetAllSetting.data) {
        setDataSetting(dataGetAllSetting.data[0]);
      }
    };
    GetAllSetting();
  }, []);

  const onFinalSubmit = async (value) => {
    const dataContact = {
      name: value.name_contact,
      numberPhone: value.phone_contact,
      email: value.email_contact,
      address: value.address_contact,
      content: value.content_contact,
    };
    const req = await apiSendContact(dataContact);
    if (req.status) {
      NotifySuccess("Thông Báo", "Gửi liên hệ thành công");
    } else if (req.type === TYPE_NOTIFY.WARNING) {
      NotifyWarning("Thông Báo", `${req.message}`);
    } else {
      NotifyWarning("Thông Báo", `${req.message}`);
    }
  };
  return (
    <div className="FormContact screen__Wep" style={{ paddingTop: "143px" }}>
      <ChatBox />
      <div className="FromContact__Header">
        <p>Liên Hệ</p>
      </div>
      <div className="FromContact__Content">
        <Row style={{ paddingBottom: "50px" }}>
          <Col lg={6} md={12} sm={12}>
            <div className="Content__Left">
              <ImHome3 size="1rem" color="rgb(35, 183, 229)" />
              <span>SOFA TRƯỜNG LONG</span>
            </div>
            <div className="Content__Left Content__Left__Address">
              <FaAddressCard size="1rem" color="rgb(35, 183, 229)" />
              <span>{dataSetting.address}</span>
            </div>
            <div className="Content__Left Content__Left__Phone">
              <ImPhone size="1rem" color="rgb(35, 183, 229)" />
              <span>{dataSetting.numberPhone}</span>
            </div>
            <div className="Content__Left Content__Left__Email">
              <MdEmail size="1rem" color="rgb(35, 183, 229)" />
              <span>{dataSetting.email}</span>
            </div>
            <div className="Content__Left Content__Left__Website">
              <SiInternetexplorer size="1rem" color="#23b7e5" />
              <span>sofatruonglong.com</span>
            </div>

            <div className="Content__Left Content__Left__Map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.93567103311!2d106.59732931462285!3d10.816234992294547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b9600cfc4f5%3A0xb0d82bbaa6c901e!2zMjg5LCAzNiDEkC4gTmd1eeG7hW4gVGjhu4sgVMO6LCBCw6xuaCBIxrBuZyBIw7JhIEIsIELDrG5oIFTDom4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1606748512259!5m2!1svi!2s"
                width="600"
                height="450"
                frameBorder="0"
                style={{
                  border: 0,
                  width: "100%",
                  height: "300px",
                  paddingTop: "30px",
                }}
                allowFullScreen=""
                aria-hidden="false"
              />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Formik
              initialValues={{
                name_contact: "",
                phone_contact: "",
                email_contact: "",
                address_contact: "",
                content_contact: "",
              }}
              validationSchema={sendContactSchema}
              onSubmit={(values) => {
                onFinalSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="Content__Right">
                    <div className="Content__Right__Name Input__Style">
                      <FaUserAlt size="1rem" color="rgb(35, 183, 229)" />
                      <Field
                        type="text"
                        placeholder="Họ và tên (*)"
                        name="name_contact"
                        autoComplete="nameContact"
                      />
                    </div>
                    {errors.name_contact && touched.name_contact ? (
                      <div className="invalid-feedback d-block">
                        {errors.name_contact}
                      </div>
                    ) : null}
                    <div className="Content__Right__Phone Input__Style">
                      <FaPhoneSquareAlt size="1rem" color="rgb(35, 183, 229)" />
                      <Field
                        type="text"
                        placeholder="Điện thoại (*)"
                        name="phone_contact"
                        autoComplete="phoneContact"
                      />
                    </div>
                    {errors.phone_contact && touched.phone_contact ? (
                      <div className="invalid-feedback d-block">
                        {errors.phone_contact}
                      </div>
                    ) : null}
                    <div className="Content__Right__Email Input__Style">
                      <MdEmail size="1rem" color="rgb(35, 183, 229)" />
                      <Field
                        type="text"
                        placeholder="Email"
                        name="email_contact"
                        autoComplete="emailContact"
                      />
                    </div>
                    {errors.email_contact && touched.email_contact ? (
                      <div className="invalid-feedback d-block">
                        {errors.email_contact}
                      </div>
                    ) : null}
                    <div className="Content__Right__Address Input__Style">
                      <BiMap size="1rem" color="rgb(35, 183, 229)" />
                      <Field
                        type="text"
                        placeholder="Địa Chỉ"
                        name="address_contact"
                        autoComplete="emailContact"
                      />
                    </div>
                    {errors.address_contact && touched.address_contact ? (
                      <div className="invalid-feedback d-block">
                        {errors.address_contact}
                      </div>
                    ) : null}
                    <div className="Content__Right__Address Input__Style">
                      <Field
                        type="text"
                        placeholder="Nội dung liên hệ"
                        name="content_contact"
                        autoComplete="emailContact"
                      />
                    </div>
                    {errors.content_contact && touched.content_contact ? (
                      <div className="invalid-feedback d-block">
                        {errors.content_contact}
                      </div>
                    ) : null}
                    <div
                      className="Content__Right__Button"
                      style={{ paddingTop: "20px" }}
                    >
                      <button type="submit">Gửi</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </div>
  );
}
