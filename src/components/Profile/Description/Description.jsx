import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './avatar.png';

import styles from './Description.module.css';

const Description = ({ name, tag, avatar, location }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

Description.defaultProps = {
  avatar: defaultImage,
  location: 'Country',
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
