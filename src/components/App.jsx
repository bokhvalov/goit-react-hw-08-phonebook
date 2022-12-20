import React from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactList/Filter';

export const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
      }}
    >
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
