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
import React, { useEffect } from "react";
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

const HeadlinesPicker = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", onWindowClick);
      return () => {
        window.removeEventListener("click", () => ({}));
      };
    });
  }, []);

  const onWindowClick = () => props.onOverrideContent(undefined);

  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
  return (
    <div>
      {buttons.map((Button, i) => (
        <Button key={i} {...props} />
      ))}
    </div>
  );
};

const HeadlinesButton = (props: any) => {
  const onMouseDown = (event: React.MouseEvent<HTMLInputElement>) =>
    event.preventDefault();

  const onClick = () => props.onOverrideContent(HeadlinesPicker);

  return (
    <div onMouseDown={onMouseDown} className="headlineButtonWrapper">
      <button onClick={onClick} className="headlineButton">
        H
      </button>
    </div>
  );
};

const DraftPlugins = () => (
  <>
    <AlignmentTool />
    <InlineToolbar>
      {(props: any) => (
        <>
          <BoldButton {...props} />
          <ItalicButton {...props} />
          <UnderlineButton {...props} />
          <HeadlinesButton {...props} />
          <UnorderedListButton {...props} />
          <OrderedListButton {...props} />
          <BlockquoteButton {...props} />
        </>
      )}
    </InlineToolbar>
  </>
);

export { plugins, DraftPlugins };
