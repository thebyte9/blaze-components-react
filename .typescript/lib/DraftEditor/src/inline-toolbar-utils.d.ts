declare const generateActions: (alignment: any, isAlignmentDropdownOpen: any, setAlignmentDropdownOpen: any) => ({
    label: string;
    style: string;
    icon: string;
    type: string;
    cssClass?: undefined;
    stateVariable?: undefined;
    stateFn?: undefined;
    actions?: undefined;
} | {
    label: string;
    icon: string;
    type: string;
    style?: undefined;
    cssClass?: undefined;
    stateVariable?: undefined;
    stateFn?: undefined;
    actions?: undefined;
} | {
    label: string;
    icon: string;
    style: string;
    cssClass: any;
    stateVariable: any;
    stateFn: any;
    type: string;
    actions: {
        label: string;
        style: string;
        icon: string;
        type: string;
    }[];
})[];
declare const getClassnames: (action: any, editorState: any) => "editor-view__inlinetoolbar--item editor-view__inlinetoolbar--item__active" | "editor-view__inlinetoolbar--item";
declare const generateToolbar: (actions: any, editorState: any, handleAction: any) => any;
declare const generateToolbarActions: (root: any, handleAction: any, editorState: any) => any;
declare const ACTION_TYPE: {
    INLINE: string;
    BLOCK: string;
    ATOMIC: string;
    MODAL: string;
};
declare const ENTITY: {
    HORIZONTAL_RULE: {
        type: string;
        mutability: string;
        data: {};
    };
};
declare const getCurrentBlockAction: (action: any, currentBlockStyle: any) => any;
declare const getCurrentBlockTypeLabel: (editorState: any) => "Paragraph" | "Heading 1" | "Heading 2" | "Heading 3" | "Heading 4" | "Heading 5" | "Heading 6";
declare const getInlineToolbarLeftPosition: (rect: any, selectionRect: any) => number;
declare const getInlineToolbarTopPosition: (selectionRect: any) => number;
declare const Rect: any;
export { generateActions, getInlineToolbarLeftPosition, getInlineToolbarTopPosition, getClassnames, generateToolbar, generateToolbarActions, getCurrentBlockAction, getCurrentBlockTypeLabel, ACTION_TYPE, ENTITY, Rect, };
