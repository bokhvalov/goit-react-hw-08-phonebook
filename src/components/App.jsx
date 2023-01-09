import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import Login from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperations';
import Registration from 'pages/Registration';
import authSelectors from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.isRefreshing)

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={<RestrictedRoute component={Login} redirectTo={'/'} />}
          />
          <Route
            path="/registration"
            element={
              <RestrictedRoute component={Registration} redirectTo={'/'} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={Contacts} redirectTo={'/login'} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
