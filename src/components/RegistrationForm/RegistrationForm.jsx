import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerOperation } from "../../redux/auth/operations";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup.string().trim().required("Email is required").matches(emailRegex, {
    message: "Invalid email.",
  }),
  password: yup.string().trim().required("Password is required").min(8),
});

const RegistrationForm = ({ submit }) => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(registerOperation(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name: </label>
        <Field name="name" id={nameId} />
        <br />
        <label htmlFor={emailId}>Email: </label>
        <Field name="email" id={emailId} />
        <br />
        <label htmlFor={passwordId}>Password: </label>
        <Field name="password" type="password" id={passwordId} />
        <hr />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
