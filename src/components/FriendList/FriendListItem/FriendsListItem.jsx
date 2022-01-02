import PropTypes from 'prop-types';

import defaultImage from './avatar.png';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const spanStatus = isOnline ? styles.active : styles.disabled;

  return (
    <li key={id} className={styles.item}>
      <span className={spanStatus}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

export default FriendListItem;
