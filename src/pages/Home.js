import React, { useState } from "react";

import NavBar from "../components/NavBar";
import HomeLogo from "../assets/home-logo.png";
import Search from "../components/Search";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [dummy, setDummy] = useState("");
  return (
    <div
      className="container-fluid bg-black h-100vh"
      style={{ position: "relative" }}
    >
      <NavBar />
      <div className="home-container">
        <div className="center-all flex-column">
          <img src={HomeLogo} alt="big-search-logo" className="mb-4" />
          <Search setQuery={(dummy) => setDummy(dummy)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
