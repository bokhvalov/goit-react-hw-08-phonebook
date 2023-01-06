import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
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