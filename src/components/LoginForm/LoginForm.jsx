import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { loginOperation } from "../../redux/auth/operations";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 - To short!")
    .max(50, "Max 50 - To long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Min 3 - To short!")
    .max(50, "Max 50 - To long!")
    .required("Required"),
});

const LoginForm = () => {
  const passwordId = useId();
  const emailId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginOperation(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={emailId}>Email: </label>
        <Field name="email" id={emailId} />
        <br />
        <label htmlFor={passwordId}>Password: </label>
        <Field name="password" id={passwordId} type="password" />
        <hr />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
