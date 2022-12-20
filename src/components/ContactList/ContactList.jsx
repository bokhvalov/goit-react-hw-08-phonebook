import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.value);

  const onClickDel = evt => {
    dispatch(deleteContact(evt.target.id));
  };

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

  const listElement = visibleContacts.map(contact => (
    <li className={css.contactsItem} key={contact.id}>
      {contact.name} {contact.number}
      <button className={css.delBtn} id={contact.id} onClick={onClickDel}>
        Delete
      </button>
    </li>
  ));

  return <ul>{listElement}</ul>;
};
