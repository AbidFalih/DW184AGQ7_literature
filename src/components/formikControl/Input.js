import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Input = (props) => {
  const { name, marginY, borderError, ...rest } = props;
  return (
    <div className={marginY}>
      <Field
        id={name}
        name={name}
        {...rest}
        className={`form-control custom-input ${borderError ? "error" : ""}`}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
