import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";
import { RiLogoutBoxLine } from "react-icons/ri";
import { LiteratureContext } from "../context/LiteratureContext";
import { urlAssets } from "../config/api";

const NavBarAdmin = () => {
  const [state, dispatch] = useContext(LiteratureContext);
  return (
    <div className="px-5 py-2 center-vertical justify-content-between bg-black">
      <HeaderIcon />
      <div className="dropdown">
        <img
          // src="http://uploader.nusaserver.com/server/php/files/chloe-grace-moretz.jpg"
          src={urlAssets.img + state.user.thumb}
          alt="admin"
          className="rounded-circle img-profile-admin"
          data-toggle="dropdown"
          role="button"
        />
        <div class="dropdown-menu dropdown-menu-right">
          <Link
            class="dropdown-item"
            onClick={() => dispatch({ type: "LOGOUT" })}
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
