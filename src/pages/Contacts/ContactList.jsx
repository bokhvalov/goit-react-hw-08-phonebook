import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person2';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const getVisibleContacts = () => {
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

  const visibleContacts = getVisibleContacts();

  const listElement = visibleContacts.map(({ name, number, id }) => (
    <ListItem key={id} sx={{maxWidth:300}}>
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  ));

  return isLoading ? (
    'Loading...'
  ) : (
    <List >
      {listElement}
    </List>
  );
};
