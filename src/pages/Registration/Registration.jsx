import React from 'react';
import css from './Registration.module.css';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';

export const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(signUp(value));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css.registrationForm} autoComplete="off">
          <label className={css.registrationForm__label} htmlFor="name">
            Name
            <Field
              className={css.registrationForm__field}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Contact Name"
              required
            />
          </label>
          <label className={css.registrationForm__label} htmlFor="email">
            E-mail
            <Field
              className={css.registrationForm__field}
              type="email"
              name="email"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Email"
              required
            />
          </label>
          <label className={css.registrationForm__label} htmlFor="password">
            Password
            <Field
              className={css.registrationForm__field}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <button className={css.registrationForm__btn} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};
