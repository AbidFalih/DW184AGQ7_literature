import React, { useState } from "react";

import NavBar from "../components/NavBar";
import HomeLogo from "../assets/home-logo.png";
import Search from "../components/Search";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [dummy, setDummy] = useState("");

  // const history = useHistory();

  // if (goToPageSearch != "") history.push(`/search-result${goToPageSearch}`);

  return (
    <div className="bg-black h-100vh" style={{ position: "relative" }}>
      <NavBar />
      <div className="home-container">
        <div>
          <img src={HomeLogo} alt="big-search-logo" />
          {/* <Search /> */}
          <Search setQuery={(dummy) => setDummy(dummy)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
