import { useId } from "react";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label className={s.inputLabel} htmlFor={nameFieldId}>
          Name
          <Field
            className={s.inputForm}
            type="text"
            name="name"
            id="nameFieldId"
          />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.inputLabel} htmlFor={numberFieldId}>
          Number
          <Field
            className={s.inputForm}
            type="tel"
            name="number"
            id="numberFieldId"
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );

  // return (
  //   <form className={s.form} onSubmit={handleSubmit}>
  //     <label className={s.inputLabel} htmlFor="name">
  //       <span className={s.spanForm}>Name</span>
  //       <input
  //         className={s.inputForm}
  //         type="text"
  //         name="name"
  //         id="name"
  //         required
  //       />
  //     </label>
  //     <label className={s.inputLabel} htmlFor="number">
  //       <span className={s.spanForm}>Number</span>
  //       <input
  //         className={s.inputForm}
  //         type="tel"
  //         name="number"
  //         id="number"
  //         required
  //       />
  //     </label>
  //   </form>
  // );
};

export default ContactForm;
