import React from 'react';

import Description from './Description/Description';
import StatisticsList from './StatisticsList/StatisticsList';

import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <StatisticsList stats={stats} />
    </div>
  );
};

export default Profile;
