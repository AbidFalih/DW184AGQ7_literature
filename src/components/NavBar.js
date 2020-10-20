import React from "react";

import HeaderIcon from "./HeaderIcon";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              My Collection
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Add Literature
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
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
