import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";

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

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label>Name</label>
        <Field type="text" name="name" className={css.myInput} />
        <ErrorMessage name="name" component="span" />

        <label>Number</label>
        <Field type="tel" name="number" className={css.myInput} />
        <ErrorMessage name="number" component="span" />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
