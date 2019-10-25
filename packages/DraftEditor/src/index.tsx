import withUtils from "@blaze-react/utils";
import {
  AtomicBlockUtils,
  CharacterMetadata,
  CompositeDecorator,
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftBlockType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyleType,
  EditorState,
  RichUtils,
  SelectionState
} from "draft-js";

import createAlignmentPlugin from "draft-js-alignment-plugin";
import "draft-js-alignment-plugin/lib/plugin.css";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import "draft-js-focus-plugin/lib/plugin.css";
import createImagePlugin from "draft-js-image-plugin";
import "draft-js-image-plugin/lib/plugin.css";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import React, { FunctionComponent, useEffect, useState } from "react";
import BlockControls from "./BlockControls";
import { BLOCKQUOTE, HANDLED, LINK, NOT_HANDLED, UNSTYLED } from "./constants";
import ImageControl from "./ImageControl";
import InlineControls from "./InlineControls";
import { IDraftEditorProps } from "./interfaces";
import { Anchor, LinkControl } from "./LinkControl";

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();
const linkifyPlugin = createLinkifyPlugin();
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const imagePlugin = createImagePlugin({
  decorator: composeDecorators(
    blockDndPlugin.decorator,
    alignmentPlugin.decorator,
    resizeablePlugin.decorator,
    focusPlugin.decorator
  )
});

const plugins = [
  focusPlugin,
  blockDndPlugin,
  imagePlugin,
  linkifyPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin
];
const DraftEditor: FunctionComponent<IDraftEditorProps> = ({
  utils: { classNames, ErrorMessage },
  onChange,
  name,
  value,
  error,
  validationMessage,
  unSelectedText,
  selectedImages,
  handleLibraryClick,
  ...attrs
}): JSX.Element => {
  const draftHandledValue: DraftHandleValue = HANDLED;
  const draftNotHandledValue: DraftHandleValue = NOT_HANDLED;

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const decorator = new CompositeDecorator([
    {
      component: Anchor,
      strategy: (
        contentBlock: ContentBlock,
        callback: (start: number, end: number) => void,
        availableContentState: ContentState
      ) => {
        contentBlock.findEntityRanges(
          (character: CharacterMetadata): boolean => {
            const entityKey = character.getEntity();

            if (
              entityKey &&
              availableContentState.getEntity(entityKey).getType() === LINK
            ) {
              return true;
            }

            return false;
          },
          callback
        );
      }
    }
  ]);

  useEffect((): void => {
    const initialEditorState = value
      ? convertFromRaw(JSON.parse(value))
      : EditorState.createEmpty().getCurrentContent();
    const state: EditorState = EditorState.createWithContent(
      initialEditorState,
      decorator
    );
    setEditorState(state);
    onEditorChange(state);
  }, []);

  const onEditorChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
    const currentContent = newEditorState.getCurrentContent();
    const rawValue = convertToRaw(currentContent);
    const rawValueString = JSON.stringify(rawValue);
    const eventFormat = {
      event: {
        target: {
          name,
          value: rawValueString
        }
      }
    };
    if (onChange) {
      onChange(eventFormat);
    }
  };

  const toggleBlockType = (blockType: DraftBlockType): void =>
    onEditorChange(RichUtils.toggleBlockType(editorState, blockType));

  const toggleInlineStyle = (inlineStyle: DraftInlineStyleType): void =>
    onEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const toggleLink = (
    newEditorState: EditorState,
    selection: SelectionState,
    entityKey: string
  ): void => {
    onEditorChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
  };

  const handleKeyCommand = (command: DraftEditorCommand): DraftHandleValue => {
    const newState: EditorState = RichUtils.handleKeyCommand(
      editorState,
      command
    );
    if (newState) {
      onEditorChange(newState);
      return draftHandledValue;
    }
    return draftNotHandledValue;
  };

  const contentState: ContentState = editorState.getCurrentContent();

  const isUnstyled: boolean =
    contentState
      .getBlockMap()
      .first()
      .getType() !== UNSTYLED;

  const hasTextAndUnstyled: boolean = !contentState.hasText() && isUnstyled;

  const editorClassName: string = classNames("custom-DraftEditor-editor", {
    "custom-DraftEditor-hidePlaceholder": hasTextAndUnstyled
  });

  const getBlockStyle = (block: ContentBlock): string => {
    const isBlockquote: boolean = block.getType() === BLOCKQUOTE;
    return classNames({
      "custom-DraftEditor-blockquote": isBlockquote
    });
  };

  const handleClick = (
    newEditorState: EditorState,
    entityKey: string
  ): EditorState => {
    const stateWithImageInserted: EditorState = AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      " "
    );
    onEditorChange(stateWithImageInserted);
    return stateWithImageInserted;
  };

  return (
    <div className="custom-DraftEditor-root">
      <section className="custom-DraftEditor-utils">
        <AlignmentTool />
        <BlockControls editorState={editorState} onToggle={toggleBlockType} />
        <div className="custom-DraftEditor-inlineControls">
          <InlineControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
          <>
            <ImageControl
              editorState={editorState}
              onToggle={handleClick}
              selectedImages={selectedImages}
              handleLibraryClick={handleLibraryClick}
            />
            <LinkControl
              editorState={editorState}
              onToggle={toggleLink}
              unSelectedText={unSelectedText}
            />
          </>
        </div>
      </section>

      <div className={editorClassName}>
        <Editor
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={onEditorChange}
          handleKeyCommand={handleKeyCommand}
          plugins={plugins}
          {...attrs}
        />
      </div>
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

DraftEditor.defaultProps = {
  error: false,
  name: "editor",
  selectedImages: [],
  unSelectedText: "Make sure you have a text selected",
  validationMessage: "This field is required"
};

export default withUtils(DraftEditor);
