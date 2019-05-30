import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  modifier, url, username, ...attr
}) => {
  const [avatarUrl, setAvatar] = useState(null);

  const _modifier = modifier ? `avatar--${modifier}` : '';

  const initials = username && username
    .split(' ')
    .map(subName => subName[0].toUpperCase())
    .join('')
    .substring(0, 2);

  const imageData = new Image();
  imageData.src = url;
  imageData.onload = () => setAvatar(url);

  return (
    <div className={`avatar ${_modifier}`}>
      {avatarUrl && <img src={avatarUrl} alt="avatar" {...attr} />}
      {!avatarUrl && <span>{initials}</span>}
    </div>
  );
};

Avatar.propTypes = {
  modifier: PropTypes.string,
  url: PropTypes.string,
  username: PropTypes.string
};

Avatar.defaultProps = {
  modifier: '',
  url: '',
  username: '!'
};

export default Avatar;
