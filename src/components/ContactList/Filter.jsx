import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleFilter = evt => {
    this.props.onChange(evt.target.value);
  };

  render() {
    return (
      <div>
        <p className={css.contactFilter__title}>Find contacts by name</p>
        <input
          onChange={this.handleFilter}
          className={css.contactFilter__field}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Contact Name"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
