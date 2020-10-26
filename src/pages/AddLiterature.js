import React from "react";
import FormAddLiterature from "../components/FormAddLiterature";
import NavBar from "../components/NavBar";

const AddLiterature = () => {
  return (
    <div className="container-fluid bg-black h-100vh">
      <NavBar />
      <div className="mx-5">
        <FormAddLiterature />
      </div>
    </div>
  );
};

export default AddLiterature;
