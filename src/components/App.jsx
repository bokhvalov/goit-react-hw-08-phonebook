import React, { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactList/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      const localStorageState = JSON.parse(localStorage.getItem('contacts'));
      if (localStorageState.length) {
        setContacts(localStorageState);
      }
    }
  }, []);

  useEffect(() => {
    if (!contacts.length) {___
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);




  const submitHandler = newContact => {
    const ContactExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (ContactExist) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }
    setContacts([...contacts, newContact]);
  };



  const generateContactList = () => {
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



  const deleteContact = contactID => {
    const newArray = contacts.filter(contact => contact.id !== contactID);
    setContacts(newArray);
  };



  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={contact => submitHandler(contact)} />
      </Section>

      <Section title={'Contacts'}>
        <Filter onChange={value => setFilter(value)} />
        <ContactList
          contacts={generateContactList()}
          onClickDelete={contactID => deleteContact(contactID)}
        />
      </Section>
    </div>
  );
};
