/// <reference types="react" />
import PropTypes from "prop-types";
declare const InlineToolbar: {
    ({ editorState, setEditorState, selectionRect, showAddLinkModal, onChange, }: {
        editorState: any;
        setEditorState: any;
        selectionRect: any;
        showAddLinkModal: any;
        onChange: any;
    }): JSX.Element;
    propTypes: {
        editorState: PropTypes.Validator<object>;
        selectionRect: PropTypes.Validator<object>;
        setEditorState: PropTypes.Validator<(...args: any[]) => any>;
        showAddLinkModal: PropTypes.Validator<(...args: any[]) => any>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
};
export default InlineToolbar;
