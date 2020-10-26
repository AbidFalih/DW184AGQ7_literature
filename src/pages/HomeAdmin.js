import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import TableVerification from "../components/TableVerification";

const HomeAdmin = () => {
  return (
    <div className="container-fluid h-100vh px-0">
      <NavBarAdmin />

      <div className="mx-5">
        <h3 className="fo-tnr my-4">Literature Verification</h3>
        <TableVerification />
      </div>
    </div>
  );
};

export default HomeAdmin;
