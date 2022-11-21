import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h3 className={css.title}>{title}</h3>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};
