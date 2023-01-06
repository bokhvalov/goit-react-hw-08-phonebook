import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts';
import { Registration } from 'pages/Registration/Registration';
import {PrivateRoute} from './PrivateRoute';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
            }
          />
        </Route>
      </Routes>
      {/* <Section title={'Phonebook'}>
        <ContactForm/>
      </Section>

      <Section title={'Contacts'}>
        <Filter  />
        <ContactList/>
      </Section> */}
    </div>
  );
};
