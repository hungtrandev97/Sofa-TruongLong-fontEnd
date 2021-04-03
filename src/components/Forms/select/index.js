import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormGroup,
  Label,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { ReactSelect } from "../Form/select";
import FormikFlatPickr from "../Form/FlatPickr/FormikFlatPickr";
import * as Yup from "yup";

const profileSchema = Yup.object().shape({
  firstName: Yup.string().required("Given Name is a required field"),
  lastName: Yup.string().required("Surname is a required field"),
  gender: Yup.number()
    .required("Gender is a required field"),
    // .oneOf([USER_GENDERS.MALE, USER_GENDERS.FEMALE]),
  dateOfBirth: Yup.date()
    .typeError("Invalid date")
    .required("Date of Birth is a required field")
    // .format(DATEFORMAT, true)
    .max(new Date(), "date of birth field must be at earlier than now"),
  age: Yup.string().required("Age is a required field"),
  phoneNumber: Yup.string()
    .required("Contact Number is a required field"),
    // .matches(PHONE_REG, "Contact Number is not valid"),
  streetAddress: Yup.string().required("Street Address is a required field"),
  buildingName: Yup.string().required("Building Name is a required field"),
  unitNumber: Yup.string().required("Unit Number is a required field"),
  postalCode: Yup.string()
    .required("Postal Code is a required field"),
    // .matches(POSTAL_CODE_REG, "Zip Code is not valid"),
  raceCode: Yup.string().required("Race is a required field"),
  otherRaceName: Yup.string().when("raceCode", {
    is: "Others",
    then: Yup.string().required("This is a required field"),
    otherwise: Yup.string().nullable(),
  }),
});

const RACE_OPTS = [
  { label: "Arabs", value: "Arabs" },
  { label: "Bangladeshi", value: "Bangladeshi" },
  { label: "Caucasian", value: "Caucasian" },
  { label: "Chinese", value: "Chinese" },
  { label: "Eurasian", value: "Eurasian" },
  { label: "Filipino", value: "Phillipino" },
  { label: "Indian", value: "Indian" },
  { label: "Indonesian", value: "Indonesian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Korean", value: "Korean" },
  { label: "Malay", value: "Malay" },
  { label: "Nepalese", value: "Nepalese" },
  { label: "Pakistani", value: "Pakistani" },
  { label: "Sinhalese", value: "Sinhalese" },
  { label: "Thai", value: "Thai" },
  { label: "Vietnamese", value: "Vietnamese" },
  { label: "Others", value: "Others" },
];

export default function FormView() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        age: "",
        streetAddress: "",
        buildingName: "",
        postalCode: "",
        phoneNumber: "",
        unitNumber: "",
        raceCode: "",
        otherRaceName: "",
      }}
      validationSchema={profileSchema}
      onSubmit={(values) => {
       console.log(values)
      }}
    >
      {({ setFieldValue, values, setTouched }) => (
        <Form noValidate>
          <Row className="m-0 p-0">
            <Col sm={6} className="m-0 p-0">
              {/* First Name */}
              <FormGroup className="mr-2">
                <Label for="firstName" className="font-ob-bold">
                  Given Name
                </Label>
                <Field
                  className="form-control"
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="firstName"
                />
              </FormGroup>
            </Col>
            <Col sm={6} className="m-0 p-0">
              {/* Last Name */}
              <FormGroup>
                <Label for="lastName" className="font-ob-bold">
                  Surname
                </Label>
                <Field
                  className="form-control"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="lastName"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="m-0 p-0">
            <Col sm={6} className="m-0 p-0">
              {/* Gender */}
              <FormGroup className="mr-2">
                <ReactSelect
                  label="Gender"
                  options={
                    [
                      { value: 1, label: "Female" },
                      { value: 2, label: "Male" },
                      { value: 3, label: "Female" },
                    ]
                  }
                  nameSelect="gender"
                  optionsPlaceholder="Select Gender"
                  isClearable={false}
                  onHandleChange={(selectedOpt) => {
                    setFieldValue("gender", selectedOpt.value);
                  }}
                  selectedValue={values.gender}
                />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="gender"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="m-0 p-0">
            {/* Date of birth */}
            <Col sm={8} className="m-0 p-0">
              <FormGroup className="mr-2">
                <Label for="dateOfBirth" className="font-ob-bold">
                  Date of Birth
                </Label>
                <FormikFlatPickr
                  name="dateOfBirth"
                  placeholder="D / M / Y"
                  value={values.dateOfBirth}
                  maxDate={new Date()}
                  onChange={(val) => {
                    setFieldValue("dateOfBirth", val);
                    setTouched(["dateOfBirth"]);
                    // const ageUnit = getAgeUnitFromDate({
                    //   dateOfBirth: moment(val).format(DATEFORMAT).toString(),
                    //   userRole: profile.role,
                    // });

                    // setFieldValue("age", ageUnit);
                  }}
                />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="dateOfBirth"
                />
              </FormGroup>
            </Col>

            {/* Age */}
            <Col sm={4} className="m-0 p-0">
              <FormGroup>
                <Label for="age" className="font-ob-bold">
                  Age
                </Label>
                <Field className="form-control" name="age" disabled />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="age"
                />
              </FormGroup>
            </Col>
          </Row>
          {/* Contact Number */}
          <FormGroup>
            <Label for="phoneNumber" className="font-ob-bold">
                Contact Number
            </Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>+65</InputGroupText>
              </InputGroupAddon>
              <Field className="form-control" type="text" name="phoneNumber" />
            </InputGroup>

            <ErrorMessage
              component="div"
              className="invalid-feedback d-block"
              name="phoneNumber"
            />
          </FormGroup>
          {/* Street Address */}
          <FormGroup>
            <Label for="streetAddress" className="font-ob-bold">
              Address
            </Label>
            <Field
              className="form-control"
              type="text"
              name="streetAddress"
              placeholder="Street Address (Block, Street, etc)"
            />
            <ErrorMessage
              component="div"
              className="invalid-feedback d-block"
              name="streetAddress"
            />
          </FormGroup>
          {/* Building Name */}
          <Row className="p-0 m-0">
            <Col sm={7} className="p-0 m-0">
              <FormGroup className="mr-2">
                <Field
                  className="form-control"
                  type="text"
                  name="buildingName"
                  placeholder="Building Name"
                />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="buildingName"
                />
              </FormGroup>
            </Col>
            {/* Unit Number */}
            <Col sm={5} className="p-0 m-0">
              <FormGroup>
                <Field
                  className="form-control"
                  type="text"
                  name="unitNumber"
                  placeholder="Unit Number"
                />
                <ErrorMessage
                  component="div"
                  className="invalid-feedback d-block"
                  name="unitNumber"
                />
              </FormGroup>
            </Col>
          </Row>
          {/* Postal Code */}
          <FormGroup style={{ width: "40%" }}>
            <Field
              className="form-control"
              type="text"
              name="postalCode"
              placeholder="Postal Code"
            />
            <ErrorMessage
              component="div"
              className="invalid-feedback d-block"
              name="postalCode"
            />
          </FormGroup>
          {/* Race */}
          <FormGroup className="mr-2">
            <ReactSelect
              label="Race or Ethnicity"
              options={RACE_OPTS}
              nameSelect="raceCode"
              optionsPlaceholder="—Select option"
              isClearable={false}
              onHandleChange={(selectedOpt) => {
                setFieldValue("raceCode", selectedOpt.value);
                if (
                  selectedOpt.value !== "Others" &&
                  values.otherRaceName !== ""
                ) {
                  setFieldValue("otherRaceName", "");
                  setTouched(["otherRaceName"]);
                }
              }}
              selectedValue={values.raceCode}
            />

            <ErrorMessage
              component="div"
              className="invalid-feedback d-block"
              name="raceCode"
            />
          </FormGroup>
          {/* Other Race Name */}
          {values.raceCode === "Others" && (
            <FormGroup>
              <Label for="otherRaceName" className="font-weight-bold">
                If others, please specify:
              </Label>
              <Field
                className="form-control"
                type="text"
                name="otherRaceName"
                placeholder="Enter text here..."
                disabled={values.raceCode !== "Others"}
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback d-block"
                name="otherRaceName"
              />
            </FormGroup>
          )}
        </Form>
      )}
    </Formik>
  )
}
