import { Container } from '@mui/material';
import { ContactForm } from 'pages/Contacts/ContactForm';
import { ContactList } from 'pages/Contacts/ContactList';
import { Filter } from 'pages/Contacts/Filter';

export const Contacts = () => {
  return (
    <Container component="main" sx={{ maxWidth: 500, marginTop: 3 }}>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
