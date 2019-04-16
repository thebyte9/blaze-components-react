import React from 'react';
import PropTypes from 'prop-types';

const SocialFollow = ({
  media: {
    facebook,
    twitter,
    pinterest,
    LinkedIn,
    youtube,
    instagram
  },
  type,
  title,
  vertical
}) => (
  <div className={`social social--${type} ${vertical ? 'social--vertical' : ''}`}>
    <p>{title || type.charAt(0).toUpperCase() + type.slice(1)}</p>
    <ul className={`social__list social__list--${type} ${vertical ? 'social__list--vertical' : ''}`}>
      {facebook && (
        <li className={`social__list-item social__list-item--${type}`}>
          <a href={facebook} rel="noopener noreferrer" target="_blank" className="facebook">
            <i className="fab fa-facebook-f" />
            <span className="hidden">Facebook</span>
          </a>
        </li>
      )}
      {twitter && (
        <li className={`social__list-item social__list-item--${type}`}>
          <a href={twitter} rel="noopener noreferrer" target="_blank" className="twitter">
            <i className="fab fa-twitter" />
            <span className="hidden">Twitter</span>
          </a>
        </li>
      )}
      {pinterest && (
      <li className={`social__list-item social__list-item--${type}`}>
        <a href={pinterest} rel="noopener noreferrer" target="_blank" className="pinterest">
          <i className="fab fa-pinterest-p" />
          <span className="hidden">Pinterest</span>
        </a>
      </li>
      )}
      {LinkedIn && (
      <li className={`social__list-item social__list-item--${type}`}>
        <a href={LinkedIn} rel="noopener noreferrer" target="_blank" className="linkedin">
          <i className="fab fa-linkedin-in" />
          <span className="hidden">LinkedIn</span>
        </a>
      </li>
      )}
      {youtube && type === 'follow' && (
      <li className={`social__list-item social__list-item--${type}`}>
        <a href={youtube} rel="noopener noreferrer" target="_blank" className="youtube">
          <i className="fab fa-youtube" />
          <span className="hidden">YouTube</span>
        </a>
      </li>
      )}
      {instagram && type === 'follow' && (
      <li className={`social__list-item social__list-item--${type}`}>
        <a href={instagram} rel="noopener noreferrer" target="_blank" className="instagram">
          <i className="fab fa-instagram" />
          <span className="hidden">Instagram</span>
        </a>
      </li>
      )}
    </ul>
  </div>
);

SocialFollow.propTypes = {
  media: PropTypes.object.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  vertical: PropTypes.bool
};

SocialFollow.defaultProps = {
  type: 'share',
  title: '',
  vertical: false
};

export default SocialFollow;
