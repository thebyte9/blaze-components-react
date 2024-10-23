import React from 'react';
import { InputType, LayoutType, DisplayErrorAs, InputState } from '../src/types';
import { BlazeInput as Input } from '@blaze-react/input';
import { preset, ThemeProvider } from '@blaze-react/themes';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { inputArgTypes } from './shared';
import Tooltip from '@blaze-react/tooltip'

export default {
  title: '@blaze-react/Input',
  component: Input,
  argTypes: inputArgTypes,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const tooltip = (
    <Tooltip tooltipContent={<span>This is a tooltip with a longer content that spans multiple lines.This is a tooltip with a longer content that spans multiple lines.This is a tooltip with a longer content that spans multiple lines.</span>} trigger="click" position="bottom">
      <span className="underline">Click for Long Content Tooltip on Bottom</span>
    </Tooltip>
  );

  return (
    <ThemeProvider theme={preset}>
      <div className="max-w-xl py-12 mx-auto md:max-w-4xl component-wrapper">
        <Input tooltip={tooltip} {...args} error />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  theme: preset,
  loading: false,
  label: 'Input (text)',
  layout: LayoutType.Vertical,
  type: InputType.Text,
  placeholder: 'Text',
  currentState: InputState.Error,
  displayError: DisplayErrorAs.Message,
  errorMessage: 'Enter a valid email address',
};
