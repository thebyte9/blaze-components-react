/// <reference types="react" />
import PropTypes from "prop-types";
declare const DecoratedLink: {
    (props: any): JSX.Element;
    propTypes: {
        entityKey: PropTypes.Validator<string>;
        contentState: PropTypes.Validator<object>;
        editLinkFn: PropTypes.Validator<(...args: any[]) => any>;
        children: PropTypes.Requireable<any[]>;
    };
    defaultProps: {
        children: never[];
    };
};
export default DecoratedLink;
