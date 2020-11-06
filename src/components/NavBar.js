import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { LiteratureContext } from "../context/LiteratureContext";

import HeaderIcon from "./HeaderIcon";

const NavBar = () => {
  const [_, dispatch] = useContext(LiteratureContext);
  const history = useHistory();
  let path = ["/profile", "/my-collection", "/add-literature"];

  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-5">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              role="button"
              className={
                useRouteMatch(path[0]) ? "nav-link active" : "nav-link"
              }
              onClick={() => history.push(path[0])}
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              role="button"
              className={
                useRouteMatch(path[1]) ? "nav-link active" : "nav-link"
              }
              onClick={() => history.push(path[1])}
            >
              My Collection
            </a>
          </li>
          <li className="nav-item">
            <a
              role="button"
              className={
                useRouteMatch(path[2]) ? "nav-link active" : "nav-link"
              }
              onClick={() => history.push(path[2])}
            >
              Add Literature
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="button"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Logout
            </a>
          </li>
        </ul>
        <div className="d-inline my-2 my-lg-0">
          <HeaderIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
