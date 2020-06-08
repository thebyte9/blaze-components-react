import { convertFromRaw, EditorState, RawDraftContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import parseHTML, { domToReact } from "html-react-parser";
import React from "react";
import {
  ANCHOR_TAG,
  BR_TAG,
  FIGURE_TAG,
  HORIZONTAL_RULE,
  HR_TAG,
  INPUT_TAG,
  P_TAG,
  SUBMIT,
} from "../constants";
import { IReactHtmlParserArgs, TComponent } from "../interfaces";
import isValidJSON from "./is-valid-json";

// tslint:disable-next-line: no-var-requires
const entities = require("entities");

function ReactHtmlParser(html: string, LinkWrapper?: TComponent) {
  const options = {
    replace: ({ attribs, children, name: tagName }: IReactHtmlParserArgs) => {
      if (tagName === FIGURE_TAG) {
        return <>{domToReact(children, options)}</>;
      }
      if (tagName === P_TAG) {
        if (children && children.length === 1) {
          const [child] = children;
          const { name } = child;
          if (name === BR_TAG) {
            return <br />;
          }
        }
      }
      if (tagName === ANCHOR_TAG) {
        return LinkWrapper ? (
          <LinkWrapper {...attribs}>
            {domToReact(children, options)}
          </LinkWrapper>
        ) : (
          <a {...attribs}>{domToReact(children, options)}</a>
        );
      }
      if (
        tagName === INPUT_TAG &&
        attribs.type !== SUBMIT &&
        attribs.value === ""
      ) {
        return <input {...attribs} value={null} />;
      }

      return null;
    },
  };

  return parseHTML(html, options);
}

function converEntityToHTML(
  content: RawDraftContentState,
  LinkWrapper?: TComponent
) {
  let HTML = entities.decodeHTML(
    stateToHTML(
      EditorState.createWithContent(convertFromRaw(content)).getCurrentContent()
    )
  );

  HTML = HTML.replace(new RegExp(HORIZONTAL_RULE, "g"), HR_TAG);

  return ReactHtmlParser(HTML, LinkWrapper);
}

function parseTextBlock(editor: any, LinkWrapper?: TComponent) {
  const content = isValidJSON(editor);

  if (!content) {
    return [];
  }

  return converEntityToHTML(content, LinkWrapper);
}

export default parseTextBlock;
