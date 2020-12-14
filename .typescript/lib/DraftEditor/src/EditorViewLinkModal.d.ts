/// <reference types="react" />
import PropTypes from "prop-types";
declare const EditorViewLinkModal: {
    ({ editorState, onClose, onSave, linkContentState, }: {
        editorState: any;
        onClose: any;
        onSave: any;
        linkContentState: any;
    }): JSX.Element;
    propTypes: {
        editorState: PropTypes.Validator<object>;
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        onSave: PropTypes.Validator<(...args: any[]) => any>;
        linkContentState: PropTypes.Requireable<object>;
    };
    defaultProps: {
        linkContentState: null;
    };
};
export default EditorViewLinkModal;
