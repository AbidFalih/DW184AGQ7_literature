import React, { useState } from "react";
import "../App.css";

import HeaderIcon from "../components/HeaderIcon";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import img_landing from "../assets/landing-bg.png";

function Landing() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div
      id="bg-landing"
      className="container-fluid m-0 pt-3 pl-5 bg-black d-flex flex-column"
    >
      <HeaderIcon />
      <div className="flex-grow-1 d-flex">
        <div className="my-auto">
          <h1 className="font-weight-bolder display-1 h1-landing">
            source <i>of</i>
            <br />
            intelligence
          </h1>

          <p className="mt-5 mb-4">
            Sign-up and receive unlimited access to all
            <br />
            of your literatur - share your literature.
          </p>

          <button className="btn btn-danger" onClick={() => setSignUp(true)}>
            Sign Up
          </button>
          <button
            className="btn btn-light mx-5"
            onClick={() => setSignIn(true)}
          >
            Sign In
          </button>
        </div>

        <img src={img_landing} alt="landing-bg" className="img-landing-bg" />
      </div>

      <SignIn
        show={signIn}
        onHide={() => setSignIn(false)}
        noAcc={() => {
          setSignIn(false);
          setSignUp(true);
        }}
      />

      <SignUp
        show={signUp}
        onHide={() => setSignUp(false)}
        hasAcc={() => {
          setSignUp(false);
          setSignIn(true);
        }}
      />
    </div>
  );
}

export default Landing;
