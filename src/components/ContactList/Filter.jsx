import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  const handleFilter = evt => {
    onChange(evt.target.value);
  };

  return (
    <div>
      <p className={css.contactFilter__title}>Find contacts by name</p>
      <input
        onChange={handleFilter}
        className={css.contactFilter__field}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Contact Name"
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
