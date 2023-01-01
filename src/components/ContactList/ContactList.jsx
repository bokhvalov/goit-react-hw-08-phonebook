import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const isLoading = useSelector(state => state.contacts.isLoading)

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
      {contact.name} {contact.phone}
      <button className={css.delBtn} id={contact.id} onClick={onClickDel}>
        Delete
      </button>
    </li>
  ));

  return (
    <div>
    {isLoading ? 'Loading...':<ul>{listElement}</ul>}
    {}
  </div>
  )};
