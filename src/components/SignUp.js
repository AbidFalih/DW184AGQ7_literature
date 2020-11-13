import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
import { LiteratureContext } from "../context/LiteratureContext";
import { MdArrowDropDownCircle } from "react-icons/md";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
//import formik control

const SignUp = (props) => {
  const [, dispatch] = useContext(LiteratureContext);

  const dropDownGender = [
    { key: "Gender", value: null },
    { key: "Man", value: false },
    { key: "Woman", value: true },
  ];

  const initialValues = {
    email: "",
    password: "",
    fullName: "",
    gender: null,
    phone: "",
    address: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    fullName: Yup.string().required(),
    gender: Yup.boolean().required().nullable(),
    phone: Yup.string().required(),
    address: Yup.string().required(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    storeUser(values);
  };

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   fullName: "",
  //   gender: "",
  //   phone: "",
  //   address: "",
  //   thumb: "profile-user.png",
  // });

  // const { email, password, fullName, gender, phone, address, thumb } = formData;

  const history = useHistory();

  const [storeUser] = useMutation(async (values) => {
    const { email, password, fullName, gender, phone, address } = values;

    console.log(email, password, fullName, gender, phone, address);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const body = JSON.stringify({
        email,
        password,
        fullName,
        gender,
        phone,
        address,
        thumb: "profile-user.png",
      });
      console.log("Body", body);
      const res = await API.post("/register", body, config);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.data,
      });

      setAuthToken(res.data.data.token);

      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.user,
        });
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }

      if (res.data.data.isAdmin) {
        dispatch({
          type: "ADMIN",
        });
        return history.push("/admin");
      }
      return history.push("/home");
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
      });
    }
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   storeUser();
  // };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  marginY="my-2"
                />
                <FormikControl
                  control="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  marginY="my-2"
                />
                <FormikControl
                  control="select"
                  name="gender"
                  options={dropDownGender}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  marginY="my-2"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="address"
                  placeholder="Address"
                />
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="btn btn-danger btn-block my-3"
                >
                  Sign Up
                </button>
              </Form>
            );
          }}
        </Formik>

        {/* <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            className="form-control custom-input"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <input
            type="password"
            className="form-control my-2 custom-input"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control custom-input"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
            }}
          />
          <select
            className="form-control custom-input my-2"
            value={gender}
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
          >
            <option value="" disable selected hidden>
              Gender
            </option>
            <option value="false" className="custom-option">
              Man
            </option>
            <option value="true" className="custom-option">
              Woman
            </option>
          </select>
          <input
            type="text"
            className="form-control custom-input"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control my-2 custom-input"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
          />
          <button type="submit" className="btn btn-danger btn-block my-3">
            Sign Up
          </button>
        </form> */}

        <p className="text-center">
          Already have an account? Click{" "}
          <span
            className="font-weight-bold"
            role="button"
            onClick={props.hasAcc}
          >
            Here
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
