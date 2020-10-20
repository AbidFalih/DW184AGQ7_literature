import React, { useState } from "react";
import "../App.css";

import img_landing from "../assets/landing-bg.png";
import HeaderIcon from "../components/HeaderIcon";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Landing() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div id="bg-landing" className="m-0 p-0 bg-black">
      <div className="container pt-3 ml-5 h-100">
        <HeaderIcon />
        <div className="row" style={{ height: "85vh" }}>
          <div className="my-auto">
            <h1 className="font-weight-bolder display-2 h1-landing">
              source <span className="font-italic">of</span>
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

          <img src={img_landing} alt="landing-bg" />
        </div>
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
