import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BlazeButton, ButtonProps } from '../src/BlazeButton';

export default {
  title: '@blaze-react/Button',
  component: BlazeButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <BlazeButton {...args}>Hello</BlazeButton>;

export const Filled = Template.bind({});
export const Disabled = Template.bind({});

Filled.args = {
  theme: 'blaze',
  blazeUtilities:
    'rounded-button bg-button-primary text-button-primary px-8 py-3 w-24 dark:bg-gray-800 dark:text-button-primary text-base hover:bg-button-hover focus:outline-none active:bg-button-pressed',
  utilities: 'rounded-md bg-blue-600 text-white px-8 py-3 w-24 dark:bg-gray-800 dark:text-white focus:outline-none',
};

Disabled.args = {
  theme: 'blaze',
  blazeUtilities:
    'rounded-button bg-button-disabled text-button-primary px-8 py-3 w-24 dark:bg-gray-800 dark:text-button-disabled text-base hover:bg-button-hover focus:outline-none',
  utilities: 'rounded-md bg-gray-400 text-white px-8 py-3 w-24 dark:bg-gray-800 dark:text-white focus:outline-none',
};
