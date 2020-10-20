import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
import { LiteratureContext } from "../context/LiteratureContext";

const SignIn = (props) => {
  const [, dispatch] = useContext(LiteratureContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const history = useHistory();

  //a .map() creates array, if didn't want an array or to return data, use forEach instead
  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body = JSON.stringify({ email, password });

    try {
      const res = await API.post("/login", body, config);
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
  };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <input
            type="password"
            class="form-control my-2"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <button type="submit" class="btn btn-danger btn-block my-3">
            Sign In
          </button>
        </form>

        <p className="text-center">
          Don't have account? Click{" "}
          <span
            className="font-weight-bold"
            role="button"
            onClick={props.noAcc}
          >
            Here
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
