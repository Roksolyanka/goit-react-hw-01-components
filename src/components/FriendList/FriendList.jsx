import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Friends } from './Friends.styled';
import { Status } from './Status.styled';
import { Friend } from './Friend.styled';
import { Name } from './Name.styled';

export const FriendList = ({ friends }) => (
  <Friends className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </Friends>
);

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Friend className="item">
    <Status
      isOnline={isOnline}
      className={isOnline ? 'true' : 'false'}
    ></Status>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name className="name">{name}</Name>
  </Friend>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
