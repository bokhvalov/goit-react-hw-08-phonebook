import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { authorization } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" component={RouterLink} to={'/'}>
        Phonebook
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.error);
  const handleSubmit = event => {
    event.preventDefault();
    const formDataValue = new FormData(event.currentTarget);
    const jsonValue = Object.fromEntries(formDataValue.entries());

    dispatch(authorization(jsonValue));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error && (
            <Typography sx={{ color: 'red', 'font-size': '11px' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to={'/registration'} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;

// import React from 'react';
// import css from './Login.module.css';
// import { Form, Formik, Field } from 'formik';

// import { useDispatch } from 'react-redux';
// import { authorization } from 'redux/auth/authOperations';
// //import { Login } from 'redux/operations';

// export const Login = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (value, { resetForm }) => {
//     dispatch(authorization(value));
//     resetForm();
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         onSubmit={handleSubmit}
//       >
//         <Form className={css.LoginForm} autoComplete="off">
//           <label className={css.LoginForm__label} htmlFor="email">
//             E-mail
//             <Field
//               className={css.LoginForm__field}
//               type="email"
//               name="email"
//               pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//               placeholder="Email"
//               required
//             />
//           </label>
//           <label className={css.LoginForm__label} htmlFor="password">
//             Password
//             <Field
//               className={css.LoginForm__field}
//               type="password"
//               name="password"
//               placeholder="Password"
//               required
//             />
//           </label>
//           <button className={css.LoginForm__btn} type="submit">
//             Login
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
