import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const File = (props) => {
  const { name, marginY, ...rest } = props;
  return (
    <div className={`d-flex ${marginY} align-items-center`}>
      <label className="form-control custom-input my-0 label-form">
        Attache File :{" "}
      </label>
      <Field id={name} name={name} className="ml-3" {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default File;
