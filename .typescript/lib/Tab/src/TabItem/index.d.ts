/// <reference types="react" />
import PropTypes from "prop-types";
interface ITabItemProps {
    action: () => {};
    children?: any;
    title?: string;
}
export declare const TabItem: {
    ({ action, children }: ITabItemProps): JSX.Element;
    propTypes: {
        action: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
    defaultProps: {
        action: () => void;
        children: string;
    };
};
export {};
