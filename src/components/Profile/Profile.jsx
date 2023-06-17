import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Description } from './Description.styled';
import { Avatar } from './Avatar.styled';
import { Username } from './Username.styled';
import { Tag } from './Tag.styled';
import { Location } from './Location.styled';
import { Activities } from './Activities.styled';
import { Activity } from './Activity.styled';
import { Label } from './Label.styled';
import { Quantity } from './Quantity.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <Description className="description">
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="200px"
        />
        <Username className="name">{username}</Username>
        <Tag className="tag">{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Activities className="stats">
        <Activity>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </Activity>
        <Activity>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Activity>
        <Activity>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </Activity>
      </Activities>
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
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
