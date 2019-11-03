import createAlignmentPlugin from "draft-js-alignment-plugin";
import "draft-js-alignment-plugin/lib/plugin.css";
import {
  BlockquoteButton,
  BoldButton,
  HeadlineOneButton,
  HeadlineThreeButton,
  HeadlineTwoButton,
  ItalicButton,
  OrderedListButton,
  UnderlineButton,
  UnorderedListButton
} from "draft-js-buttons";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import { composeDecorators } from "draft-js-plugins-editor";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import React from "react";
import NewPicker from "./InlineToolbar";
import "./styles";

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();
const linkifyPlugin = createLinkifyPlugin();
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;
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
  inlineToolbarPlugin,
  blockDndPlugin,
  imagePlugin,
  linkifyPlugin,
  alignmentPlugin,
  resizeablePlugin
];

const HeadlinesButton = NewPicker(
  [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton],
  <b>H</b>
);

const BlockControlsButton = NewPicker(
  [OrderedListButton, UnorderedListButton, BlockquoteButton],
  <i className="material-icons">list</i>
);

const InlineControlsButton = NewPicker(
  [BoldButton, ItalicButton, UnderlineButton],
  <i className="material-icons">text_format</i>
);

const DraftPlugins = () => (
  <>
    <AlignmentTool />
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
