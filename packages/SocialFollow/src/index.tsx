import React from "react";
type SocialFollowProps = {
  type?: string,
  title?: string,
  vertical?: boolean,
  media: object
};
const SocialFollow: React.SFC<SocialFollowProps> = ({
  media,
  title,
  vertical,
  type
}) => {
  const socialConf = {
    facebook: {
      name: "Facebook",
      class: "facebook",
      icon: "fab fa-facebook-f"
    },
    twitter: {
      name: "Twitter",
      class: "twitter",
      icon: "fab fa-twitter"
    },
    pinterest: {
      name: "Pinterest",
      class: "pinterest",
      icon: "fab fa-pinterest-p"
    },
    linkedIn: {
      name: "Linkedin",
      class: "linkedin",
      icon: "fab fa-linkedin-in"
    },
    youtube: {
      name: "Youtube",
      class: "youtube",
      icon: "fab fa-youtube",
      isFollowing: true
    },
    instagram: {
      name: "Instagram",
      class: "instagram",
      icon: "fab fa-instagram",
      isFollowing: true
    }
  };
  const renderSocial = Object.keys(media).map(key => {
    if (type !== "follow" && socialConf[key].isFollowing) return null;
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
  type: "share",
  title: "",
  vertical: false
};
export default SocialFollow;
