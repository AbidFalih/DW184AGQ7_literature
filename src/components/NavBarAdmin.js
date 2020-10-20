import React from "react";
import { Link } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";
import { RiLogoutBoxLine } from "react-icons/ri";

const NavBarAdmin = () => {
  return (
    <div className="p-3 center-vertical justify-content-between bg-black">
      <HeaderIcon />
      <div className="dropdown">
        <img
          src="http://uploader.nusaserver.com/server/php/files/Chloe_Moretz_2018_2.jpg"
          alt="admin"
          className="rounded-circle img-profile-admin"
          data-toggle="dropdown"
          role="button"
        />
        <div class="dropdown-menu dropdown-menu-right">
          <Link
            class="dropdown-item"
            // onClick={() => dispatch({ type: "LOGOUT" })}
          >
            <RiLogoutBoxLine style={{ color: "red" }} />
            &nbsp;&nbsp;&nbsp;Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarAdmin;
