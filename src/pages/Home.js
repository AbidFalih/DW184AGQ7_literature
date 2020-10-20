import React from "react";

import NavBar from "../components/NavBar";
import HomeLogo from "../assets/home-logo.png";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="bg-black h-100vh" style={{ position: "relative" }}>
      <NavBar />
      <div className="home-container">
        <div>
          <img src={HomeLogo} alt="big-search-logo" />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
