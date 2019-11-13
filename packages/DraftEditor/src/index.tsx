import Textarea from "@blaze-react/text-area";
import withUtils from "@blaze-react/utils";
import {
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftEditorCommand,
  DraftHandleValue,
  EditorState,
  AtomicBlockUtils,
  EditorBlock,
  RichUtils
} from "draft-js";
import Editor from "draft-js-plugins-editor";
// import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { stateToHTML } from "draft-js-export-html";
const entities = require("entities");
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { BLOCKQUOTE, HANDLED, NOT_HANDLED, UNSTYLED } from "./constants";
import { DraftPlugins, plugins } from "./DraftPlugins";
import { CustomDraftPlugins } from "./DraftPlugins/CustomPlugins";
import decorator from "./DraftPlugins/CustomPlugins/decorator";
import { IDraftEditorProps } from "./interfaces";
import { getEditorHeight } from "./utils";

const blockRenderer = (contentBlock: any) => {
  const type = contentBlock.getType();

  if (type === "atomic") {
    return {
      component: Component,
      editable: true,
      props: {
        foo: "bar"
      }
    };
  }
  return "";
};

const Component = (props: any) => {
  // const { block, contentState, blockProps } = props;
  // const data = contentState.getEntity(block.getEntityAt(0)).getData();

  // console.log(props, data, blockProps);

  return (
    <section style={{ background: "lavender" }}>
      <pre>
        <code>
          <EditorBlock {...props} />
        </code>
      </pre>
    </section>
  );
};

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
    EditorState.createWithContent(
      EditorState.createEmpty().getCurrentContent(),
      decorator
    )
  );
  const [isDraftEditor, setIsDraftEditor] = useState<boolean>(true);
  const [editorHeight, setEditorHeight] = useState<any>({});
  const inputEl = useRef<any>(null);

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
    calculateEditorHeight(500);
  }, []);

  useEffect((): void => {
    calculateEditorHeight();
  }, [editorState]);

  const calculateEditorHeight = (time = 0) =>
    setTimeout(() => setEditorHeight(getEditorHeight(inputEl.current)), time);

  const onEditorChange = (newEditorState: EditorState): void => {
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
      setEditorState(newEditorState);
      onChange(eventFormat);
    }
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

  const toggleDraftEditor = (): void => setIsDraftEditor(!isDraftEditor);

  const handleHtmlToDraft = ({ value: HTMLContent }: { value: string }) => {
    const blocksFromHtml = htmlToDraft(HTMLContent);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const newContentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const newEditorState = EditorState.createWithContent(newContentState);
    setEditorState(newEditorState);
    onEditorChange(newEditorState);
  };

  // const options = {
  //   blockRenderers: {
  //     atomic: (block: any) => {
  //       console.log("jjjjjjjjj");
  //       return "<div>" + escape(block.getText()) + "</div>";
  //       return "";
  //     }
  //   }
  // };

  const astateToHTML: any = stateToHTML(
    editorState.getCurrentContent()
    // options
  );

  const sn = () => {
    console.log(astateToHTML.includes(entities.encodeHTML("<!--aaaa-->")));
    let a = astateToHTML.replace("</code></pre>", "");
    a = a.replace("<pre><code>", "");
    const b = entities.decodeHTML(astateToHTML);
    console.log(b.includes("<!--aaaa-->"));
    return b;
  };

  console.log(sn());

  const insertBlock = () => {
    const ccontentState = editorState.getCurrentContent();

    const contentStateWithEntity = ccontentState.createEntity(
      "TEST",
      "MUTABLE",
      { foo: "bar" }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });

    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
  };

  return (
    <div className="custom-DraftEditor-root">
      <CustomDraftPlugins
        editorState={editorState}
        selectedImages={selectedImages}
        handleLibraryClick={handleLibraryClick}
        unSelectedText={unSelectedText}
        onEditorChange={onEditorChange}
        toggleDraftEditor={toggleDraftEditor}
        isDraftEditor={isDraftEditor}
      />

      <button onClick={insertBlock}>Insert block</button>

      <div className={editorClassName} style={editorHeight}>
        {isDraftEditor ? (
          <Editor
            ref={inputEl}
            handleKeyCommand={handleKeyCommand}
            blockStyleFn={getBlockStyle}
            editorState={editorState}
            onChange={onEditorChange}
            blockRendererFn={blockRenderer}
            plugins={plugins}
            {...attrs}
          />
        ) : (
          <Textarea onChange={handleHtmlToDraft} rows={10} value={sn()} />
        )}
        <DraftPlugins />
      </div>
      {error && <ErrorMessage message={validationMessage} />}
      <div dangerouslySetInnerHTML={{ __html: sn() }} />
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
