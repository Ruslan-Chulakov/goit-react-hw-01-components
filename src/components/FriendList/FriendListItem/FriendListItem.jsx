import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  
  return (
    <li className={clsx(css.item, {[css.online]: isOnline})}>
      <span className={clsx("status")}></span>
      <img className={clsx("avatar")} src={avatar} alt="User avatar" width="48" />
      <p className={clsx(css.name)}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;
