import { convertFromRaw, EditorState, RawDraftContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import parseHTML, { domToReact } from 'html-react-parser';
import React from 'react';
import {
  ANCHOR_TAG,
  BR_TAG,
  FIGURE_TAG,
  HORIZONTAL_RULE,
  HR_TAG,
  INPUT_TAG,
  P_TAG,
  SUBMIT,
  TARGET_BLANK,
} from '../constants';
import { IParseTextBlock } from './interfaces';
import { isValidJSON } from '../helpers';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const entities = require('entities');

function ReactHtmlParser(html: string, config: IParseTextBlock) {
  const options = {
    replace: ({ attribs, children, name: tagName }: any) => {
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
        const { LinkWrapper, useTargetBlank } = config;

        const target = useTargetBlank ? TARGET_BLANK : attribs.target;

        return LinkWrapper ? (
          <LinkWrapper {...attribs} target={target}>
            {domToReact(children, options)}
          </LinkWrapper>
        ) : (
          <a {...attribs} target={target}>
            {domToReact(children, options)}
          </a>
        );
      }
      if (tagName === INPUT_TAG && attribs.type !== SUBMIT && attribs.value === '') {
        return <input {...attribs} value={null} />;
      }

      return null;
    },
  };

  return parseHTML(html, options);
}

function convertEntityToHTML(content: RawDraftContentState, config: IParseTextBlock) {
  let HTML = entities.decodeHTML(
    stateToHTML(EditorState.createWithContent(convertFromRaw(content)).getCurrentContent()),
  );

  HTML = HTML.replace(new RegExp(HORIZONTAL_RULE, 'g'), HR_TAG);

  return ReactHtmlParser(HTML, config);
}

function parseTextBlock(config: IParseTextBlock): string | JSX.Element | JSX.Element[] {
  const { editor } = config;
  const content = isValidJSON(editor);

  return !content ? [] : convertEntityToHTML(content, config);
}

export default parseTextBlock;
