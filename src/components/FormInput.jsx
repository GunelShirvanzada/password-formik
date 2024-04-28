// import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { touched, errorMessage, label, ...input } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...input} />
      <span>{touched && errorMessage}</span>
    </div>
  );
};

export default FormInput;
