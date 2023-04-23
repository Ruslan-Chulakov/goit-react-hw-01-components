import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {

  return (
    <div className={clsx(css.profile)}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={clsx(css.image)} />
        <p className={clsx(css.name)}>{username}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.stats)}>
        <li className={clsx(css.info)}>
          <span className={clsx(css.label)}>Followers</span>
          <span className={clsx(css.quantity)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.info)}>
          <span className={clsx(css.label)}>Views</span>
          <span className={clsx(css.quantity)}>{stats.views}</span>
        </li>
        <li className={clsx(css.info)}>
          <span className={clsx(css.label)}>Likes</span>
          <span className={clsx(css.quantity)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
};

export default Profile;
