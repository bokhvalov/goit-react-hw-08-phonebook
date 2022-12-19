import React from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactList/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';

export const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.value);

  const getVisibleContacts = (contacts, filter) => {
    let contactsList;

    if (filter) {
      contactsList = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      contactsList = contacts;
    }
    return contactsList;
  };


  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={contact => dispatch(addContact(contact))} />
      </Section>

      <Section title={'Contacts'}>
        <Filter onChange={value => dispatch(changeFilter(value))} />
        <ContactList
          contacts={getVisibleContacts(contacts,filter)}
          onClickDelete={contactID => dispatch(deleteContact(contactID))}
        />
      </Section>
    </div>
  );
};
