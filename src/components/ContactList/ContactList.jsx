import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClickDelete }) => {
  const onClickDel = evt => {
    onClickDelete(evt.target.id);
  };

  const listElement = contacts.map(contact => (
    <li className={css.contactsItem} key={contact.id}>
      {contact.name} {contact.number}
      <button className={css.delBtn} id={contact.id} onClick={onClickDel}>
        Delete
      </button>
    </li>
  ));

  return <ul>{listElement}</ul>;
};

ContactList.propTypes = {
  onClickDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      Number: PropTypes.number,
    })
  ),
};
