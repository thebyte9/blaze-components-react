import React from "react";
interface ISocialFollowProps {
  type?: string;
  title?: string;
  vertical?: boolean;
  media: object;
}
const SocialFollow: React.SFC<ISocialFollowProps> = ({
  media,
  title,
  vertical,
  type
}) => {
  const socialConf = {
    facebook: {
      class: "facebook",
      icon: "fab fa-facebook-f",
      name: "Facebook"
    },
    instagram: {
      class: "instagram",
      icon: "fab fa-instagram",
      isFollowing: true,
      name: "Instagram"
    },
    linkedIn: {
      class: "linkedin",
      icon: "fab fa-linkedin-in",
      name: "Linkedin"
    },
    pinterest: {
      class: "pinterest",
      icon: "fab fa-pinterest-p",
      name: "Pinterest"
    },
    twitter: {
      class: "twitter",
      icon: "fab fa-twitter",
      name: "Twitter"
    },
    youtube: {
      class: "youtube",
      icon: "fab fa-youtube",
      isFollowing: true,
      name: "Youtube"
    }
  };
  const renderSocial = Object.keys(media).map(key => {
    if (type !== "follow" && socialConf[key].isFollowing) {
      return null;
    }
    return (
      <li key={key} className={`social__list-item social__list-item--${type}`}>
        <a
          href={media[key]}
          rel="noopener noreferrer"
          target="_blank"
          className={socialConf[key].class}
        >
          <i className={socialConf[key].icon} />
          <span className="hidden">{socialConf[key].name}</span>
        </a>
      </li>
    );
  });
  return (
    <div
      className={`social social--${type} ${vertical ? "social--vertical" : ""}`}
    >
      {title && <p>{title}</p>}
      <ul
        className={`social__list social__list--${type} ${
          vertical ? "social__list--vertical" : ""
        }`}
      >
        {renderSocial}
      </ul>
    </div>
  );
};
SocialFollow.defaultProps = {
  title: "",
  type: "share",
  vertical: false
};
export default SocialFollow;
