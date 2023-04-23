import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import css from './FriendList.module.css'

import FriendListItem from "./FriendListItem/FriendListItem";

function FriendList({ friends }) {
    return (
        <ul className={clsx(css.friendList)}>
            {friends.map(fr => 
                <FriendListItem
                    key={fr.id}
                    avatar={fr.avatar}
                    name={fr.name}
                    isOnline={fr.isOnline}
                />
                )}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
        }
    ))
}


export default FriendList;