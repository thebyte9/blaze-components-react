import React from "react";
interface ISocialFollowProps {
    type?: string;
    title?: string;
    vertical?: boolean;
    media: object;
}
declare const SocialFollow: React.SFC<ISocialFollowProps>;
export default SocialFollow;
