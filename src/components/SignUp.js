import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import { useMutation } from "react-query";
// import { API } from "../Config/api";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    phone: "",
    address: "",
  });

  const { email, password, fullName, gender, phone, address } = formData;

  // const [storeUser] = useMutation(async () => {
  //   try {
  //     const config = {
  //       headers: { "Content-Type": "application/json" },
  //     };
  //     const body = JSON.stringify({
  //       email,
  //       password,
  //       fullName,
  //       gender,
  //       phone,
  //       address,
  //     });
  //     const res = await API.post("/register", body, config);

  //     alert("Successfully create an account, please log in to continue");
  //     props.hasAcc();
  //     return res;
  //   } catch (err) {
  //     alert(`Error creating an account: ${err}`);
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    // storeUser();
  };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <input
            type="password"
            class="form-control my-2"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <input
            type="text"
            class="form-control"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
            }}
          />
          <select
            className="custom-select my-2"
            value={gender}
            onChange={(e) => {
              setFormData({ ...formData, gender: e.target.value });
            }}
          >
            <option value="" disable selected hidden>
              Gender
            </option>
            <option value="false">Man</option>
            <option value="true">Woman</option>
          </select>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
          <input
            type="text"
            class="form-control my-2"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
          />
          <button type="submit" class="btn btn-danger btn-block my-3">
            Sign Up
          </button>
        </form>

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
