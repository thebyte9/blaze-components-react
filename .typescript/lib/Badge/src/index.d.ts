import { FunctionComponent } from "react";
interface IBadgeProps {
    type?: string;
    to?: string;
    round?: boolean;
    link?: boolean;
    pill?: boolean;
    icon?: boolean;
    children?: string | JSX.Element;
}
declare const Badge: FunctionComponent<IBadgeProps>;
export default Badge;
