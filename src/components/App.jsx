import React, { useEffect } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactList/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
      }}
    >
      {error && alert(error)}
      <Section title={'Phonebook'}>
        <ContactForm/>
      </Section>

      <Section title={'Contacts'}>
        <Filter  />
        <ContactList/>
      </Section>
    </div>
  );
};
