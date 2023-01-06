import React from 'react';
import css from './Login.module.css';
import { Form, Formik, Field } from 'formik';

import { useDispatch } from 'react-redux';
import { authorization } from 'redux/auth/authOperations';
//import { Login } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authorization(value));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css.LoginForm} autoComplete="off">
          <label className={css.LoginForm__label} htmlFor="email">
            E-mail
            <Field
              className={css.LoginForm__field}
              type="email"
              name="email"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Email"
              required
            />
          </label>
          <label className={css.LoginForm__label} htmlFor="password">
            Password
            <Field
              className={css.LoginForm__field}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <button className={css.LoginForm__btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
