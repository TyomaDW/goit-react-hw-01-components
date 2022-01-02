import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsData.module.css';

const StatisticsData = ({ title, value }) => {
  return (
    <Fragment>
      <span className={styles.label}>{title}</span>
      <span className={styles.quantity}>{value}</span>
    </Fragment>
  );
};

StatisticsData.defaultProps = {
  title: 'statistcs',
  value: 0,
};

StatisticsData.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticsData;
