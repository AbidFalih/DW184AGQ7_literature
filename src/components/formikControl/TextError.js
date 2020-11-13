import React from "react";
import { IoMdAlert } from "react-icons/io";

const TextError = (props) => {
  return (
    <small className="error my-0 py-0 mx-1">
      <IoMdAlert /> {props.children}
    </small>
  );
};

export default TextError;
