import {
  BlockquoteButton,
  BoldButton,
  HeadlineOneButton,
  HeadlineThreeButton,
  HeadlineTwoButton,
  ItalicButton,
  OrderedListButton,
  UnderlineButton,
  UnorderedListButton,
} from "draft-js-buttons";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import React from "react";
import NewPicker from "./InlineToolbar";

const linkifyPlugin = createLinkifyPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [inlineToolbarPlugin, linkifyPlugin];

const HeadlinesButton = NewPicker(
  { HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton },
  <b>H</b>
);

const BlockControlsButton = NewPicker(
  { OrderedListButton, UnorderedListButton, BlockquoteButton },
  <i className="material-icons">list</i>
);

const InlineControlsButton = NewPicker(
  { BoldButton, ItalicButton, UnderlineButton },
  <i className="material-icons">text_format</i>
);

const DraftPlugins = () => (
  <>
    <InlineToolbar>
      {(props: any) => (
        <>
          <InlineControlsButton {...props} />
          <HeadlinesButton {...props} />
          <BlockControlsButton {...props} />
        </>
      )}
    </InlineToolbar>
  </>
);

export { plugins, DraftPlugins };
