import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { loginOperation } from "../../redux/auth/operations";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
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
      {({ errors, touched }) => (
        <Form className={css.form}>
          <label htmlFor={emailId}>Email: </label>
          <Field name="email" id={emailId} type="text" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br />
          <label htmlFor={passwordId}>Password: </label>
          <Field name="password" id={passwordId} type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <hr />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
