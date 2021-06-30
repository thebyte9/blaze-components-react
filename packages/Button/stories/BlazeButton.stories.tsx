import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { BlazeButton } from '../src/BlazeButton';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Button',
  component: BlazeButton,
  argTypes: {
    selectedTheme: {
      options: ['admin', 'frontend'],
      control: { type: 'radio' },
      defaultValue: 'admin',
    },
  },
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;
  const [theme, setTheme] = useState(selectedTheme);

  applyTheme(selectedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BlazeButton {...args}>Hello</BlazeButton>
    </ThemeContext.Provider>
  );
};

export const Filled = Template.bind({});
export const Disabled = Template.bind({});

Filled.args = {
  theme: adminTheme,
  utilities: `
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-8 
    py-3 
    w-24 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed`,
  //utilities: 'rounded-md bg-blue-600 text-white px-8 py-3 w-24 dark:bg-gray-800 dark:text-white focus:outline-none',
};

Disabled.args = {
  theme: adminTheme,
  utilities: `
    rounded-button 
    bg-button-disabled 
    text-button-primary 
    px-8 
    py-3 
    w-24 
    dark:bg-gray-800 
    dark:text-button-disabled 
    text-base-primary 
    focus:outline-none`,
  //utilities: 'rounded-md bg-gray-400 text-white px-8 py-3 w-24 dark:bg-gray-800 dark:text-white focus:outline-none',
};
