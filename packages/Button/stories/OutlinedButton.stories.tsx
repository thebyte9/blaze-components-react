import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Button from '../src/Button';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Button/All Stories/Outlined',
  component: Button,
  args: {
    selectedTheme: 'admin',
    label: 'Blaze',
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
  },
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;
  const [theme, setTheme] = useState(selectedTheme);

  applyTheme(selectedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Button {...args}>{args.label ?? 'Blaze'}</Button>
    </ThemeContext.Provider>
  );
};

export const Outlined = Template.bind({});
export const Disabled = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Stretched = Template.bind({});

Outlined.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    text-bold
    rounded-button
    bg-button-outlined
    text-button-outlined
    px-6
    py-1
    min-w-min
    dark:bg-gray-800
    dark:text-button-primary
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary
    focus:outline-none
    active:bg-button-pressed`,
};

Disabled.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium  
    text-bold
    text-button-outlined-disabled
    rounded-button
    px-6
    py-1
    min-w-min 
    dark:bg-gray-800
    dark:text-button-primary
    border-2
    border-button-outlined-disabled
    hover:bg-button-outlined-hover
    hover:text-button-primary
    focus:outline-none
    active:bg-button-pressed`,
};

Small.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium  
    text-bold
    bg-button-outlined 
    text-button-outlined 
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-5 
    py-1 
    min-w-min
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary  
    dark:bg-gray-800
    dark:text-button-primary
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
    text-bold
    bg-button-outlined 
    text-button-outlined 
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    min-w-min 
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary  
    dark:bg-gray-800
    dark:text-button-primary
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
    text-bold
    bg-button-outlined 
    text-button-outlined 
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    min-w-min
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary  
    dark:bg-gray-800
    dark:text-button-primary
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
  text-bold
  bg-button-outlined
  text-button-outlined
  rounded-button
  bg-button-primary
  text-button-primary
  px-6
  py-1
  w-full
  border-2
  border-button-outlined
  hover:bg-button-outlined-hover
  hover:text-button-primary
  dark:bg-gray-800
  dark:text-button-primary
  focus:outline-none
  active:bg-button-pressed
  text-md
  `,
};
