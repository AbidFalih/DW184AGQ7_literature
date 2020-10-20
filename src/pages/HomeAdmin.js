import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import TableVerification from "../components/TableVerification";

const HomeAdmin = () => {
  return (
    <div>
      <NavBarAdmin />

      <div>
        <h3 className="fo-tnr">Literature Verification</h3>
        <TableVerification />
      </div>
    </div>
  );
};

export default HomeAdmin;
