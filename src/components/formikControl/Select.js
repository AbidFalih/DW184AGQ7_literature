import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = (props) => {
  const { name, options, marginY, ...rest } = props;
  return (
    <div className={marginY}>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="form-control custom-input"
      >
        {options.map((option, index) =>
          index == 0 ? (
            <option
              key={option.value}
              value={option.value}
              disable
              selected
              hidden
            >
              {option.key}
            </option>
          ) : (
            <option
              key={option.value}
              value={option.value}
              className="custom-option"
            >
              {option.key}
            </option>
          )
        )}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
