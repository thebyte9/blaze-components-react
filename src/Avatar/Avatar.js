import React, {
  Fragment, useState, useRef, useEffect
} from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  modifier,
  url,
  username,
  ...attr
}) => {
  const [size, setSize] = useState(0);
  const [avatarUrl, setAvatar] = useState(url);

  const _modifier = modifier ? `avatar--${modifier}` : '';
  const ref = useRef(null);

  useEffect(() => setSize(ref.current.clientHeight / 2));

  const initials = username && (username.split(' ')
    .map(subName => subName[0]
      .toUpperCase()).join(''))
    .substring(0, 2);
  
  const imageData = new Image();
  imageData.src = url;
  imageData.onload = () => setAvatar(url);

  return (
    <Fragment>
      <div className={`avatar ${_modifier}`} ref={ref}>
        {avatarUrl && <img src={avatarUrl} alt="avatar" className="avatar__icon" {...attr} />}
        <div className="avatar__image">
          {avatarUrl && <img src={avatarUrl} alt="alt text here" {...attr} />}
        </div>
        {!avatarUrl && <span style={{ fontSize: `${size}px` }}>{initials}</span>}
      </div>
    </Fragment>
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
