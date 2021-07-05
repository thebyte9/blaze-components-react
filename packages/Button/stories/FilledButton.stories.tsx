import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { BlazeButton } from '../src/BlazeButton';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Button/Filled',
  component: BlazeButton,
  args: {
    selectedtheme: 'admin',
  },
  argTypes: {
    selectedTheme: {
      options: ['admin', 'frontend'],
      control: { type: 'radio' },
      defaultValue: { summary: 'admin' },
    },
    theme: {
      control: false,
      table: {
        disable: true,
      },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;
  const [theme, setTheme] = useState(selectedTheme);

  applyTheme(selectedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BlazeButton {...args}>Blaze</BlazeButton>
    </ThemeContext.Provider>
  );
};

export const Filled = Template.bind({});
export const Disabled = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Stretched = Template.bind({});

Filled.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    w-24 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed`,
};

Disabled.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    rounded-button 
    bg-button-disabled 
    text-button-primary 
    px-6 
    py-1 
    w-24 
    dark:bg-gray-800 
    dark:text-button-disabled 
    text-base-primary 
    focus:outline-none`,
};

Small.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-5 
    py-1 
    w-20 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed
    text-sm
  `,
};

Medium.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    w-24 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed
    text-md
  `,
};

Large.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    rounded-button-large 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    w-32 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed
    text-lg
  `,
};

Stretched.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    w-full 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed
    text-lg
  `,
};
