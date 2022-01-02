import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.stat__item}
            style={{ backgroundColor: setBackgroundColorRandom() }}
          >
            <span className={styles.stat__label}>{label}</span>
            <span className={styles.stat__percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const setBackgroundColorRandom = () =>
  '#' +
  Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(6, '0');

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  ),
};

export default Statistics;
