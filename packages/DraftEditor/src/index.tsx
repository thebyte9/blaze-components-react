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
  RawDraftContentState,
  RichUtils,
  SelectionState
} from "draft-js";

import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createImagePlugin from "draft-js-image-plugin";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import React, { FunctionComponent, useEffect, useState } from "react";
import { BLOCK_QUOTE, HANDLED, LINK, NOT_HANDLED, UNSTYLED } from "./constants";
import { IDraftEditorProps } from "./interfaces";

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();

const composeDecorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator: composeDecorator });

const plugins = [blockDndPlugin, focusPlugin, imagePlugin];

import BlockControls from "./BlockControls";
import ImageControl from "./ImageControl";
import InlineControls from "./InlineControls";
import { Anchor, LinkControl } from "./LinkControl";

const DraftEditor: FunctionComponent<IDraftEditorProps> = ({
  utils: { classNames, ErrorMessage },
  onChange,
  name,
  value,
  error,
  validationMessage,
  unSelectedText,
  previewImages,
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

            return entityKey
              ? availableContentState.getEntity(entityKey).getType() === LINK
              : false;
          },
          callback
        );
      }
    }
  ]);

  useEffect((): void => {
    if (value) {
      const rawObjectValue: RawDraftContentState = JSON.parse(value);
      const state: EditorState = EditorState.createWithContent(
        convertFromRaw(rawObjectValue),
        decorator
      );
      setEditorState(state);
    }
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
    const isBlockquote: boolean = block.getType() === BLOCK_QUOTE;
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
      <BlockControls editorState={editorState} onToggle={toggleBlockType} />
      <InlineControls editorState={editorState} onToggle={toggleInlineStyle} />
      <div className="custom-DraftEditor-controls">
        <ImageControl
          editorState={editorState}
          onToggle={handleClick}
          previewImages={previewImages}
        />
        <LinkControl
          editorState={editorState}
          onToggle={toggleLink}
          unSelectedText={unSelectedText}
        />
      </div>

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
  previewImages: [],
  unSelectedText: "Make sure you have a text selected",
  validationMessage: "This field is required"
};

export default withUtils(DraftEditor);
