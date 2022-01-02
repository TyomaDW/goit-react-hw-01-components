import React from 'react';

import Description from './Description/Description';
import StatisticsList from './StatisticsList/StatisticsList';

import user from '../../data/user.json';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Description
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <StatisticsList stats={user.stats} />
    </div>
  );
};

export default Profile;
