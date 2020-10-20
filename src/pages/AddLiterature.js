import React from "react";
import FormAddLiterature from "../components/FormAddLiterature";
import NavBar from "../components/NavBar";

const AddLiterature = () => {
  return (
    <div className="px-5 py-2 bg-black">
      <NavBar />
      <FormAddLiterature />
    </div>
  );
};

export default AddLiterature;
