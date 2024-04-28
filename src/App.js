import { ErrorMessage, useFormik } from "formik";
import "./App.css";
import FormInput from "./components/FormInput";
import { inputSchemas } from "./schemas";

const App = () => {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: inputSchemas,
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input) => {
            return <FormInput onChange={handleChange} onBlur={handleBlur} key={input.id} {...input} />
          })
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
