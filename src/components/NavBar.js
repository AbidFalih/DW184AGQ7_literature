import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { LiteratureContext } from "../context/LiteratureContext";

import HeaderIcon from "./HeaderIcon";

const NavBar = () => {
  const [_, dispatch] = useContext(LiteratureContext);
  const history = useHistory();
  let path = ["/profile", "/my-collection", "/add-literature"];

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a
              role="button"
              class={useRouteMatch(path[0]) ? "nav-link active" : "nav-link"}
              onClick={() => history.push(path[0])}
            >
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a
              role="button"
              class={useRouteMatch(path[1]) ? "nav-link active" : "nav-link"}
              onClick={() => history.push(path[1])}
            >
              My Collection
            </a>
          </li>
          <li class="nav-item">
            <a
              role="button"
              class={useRouteMatch(path[2]) ? "nav-link active" : "nav-link"}
              onClick={() => history.push(path[2])}
            >
              Add Literature
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              role="button"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Logout
            </a>
          </li>
        </ul>
        <div class="d-inline my-2 my-lg-0">
          <HeaderIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
