import React from "react";
import Date from "./formikControl/Date";
import File from "./formikControl/File";
import Input from "./formikControl/Input";
import Select from "./formikControl/Select";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "date":
      return <Date {...rest} />;
    case "file":
      return <File {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
