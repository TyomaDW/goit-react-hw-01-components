import React from 'react';
import PropTypes from 'prop-types';

import StatisticsData from '../StatisticsData/StatisticsData';

import styles from './StatisticsList.module.css';

const StatisticsList = ({ stats }) => {
  const arrayStats = Object.keys(stats);
  const arrayValue = Object.values(stats);

  return (
    <ul className={styles.list}>
      {arrayStats.map((stat, index) => (
        <li key={index.toString()} className={styles.stats}>
          <StatisticsData title={stat} value={arrayValue[index]} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  StatisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default StatisticsList;
