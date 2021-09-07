import React from 'react';
import { InputType, LayoutType, DisplayErrorAs, InputState } from '../src/types';
import { Input } from '@blaze-react/input';
import { preset, ThemeProvider } from '@blaze-react/themes';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { inputArgTypes } from './shared';

export default {
  title: '@blaze-react/Input',
  component: Input,
  argTypes: inputArgTypes,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <ThemeProvider theme={preset}>
      <div className="max-w-xl py-12 mx-auto md:max-w-4xl component-wrapper">
        <Input {...args} error />
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
