import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { BlazeButton } from '../src/BlazeButton';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Button/Affix & Icon',
  component: BlazeButton,
  args: {
    selectedtheme: 'admin',
    icon: 'left',
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
    icon: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      defaultValue: { summary: 'left' },
    },
  },
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;
  const [theme, setTheme] = useState(selectedTheme);

  applyTheme(selectedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BlazeButton {...args}>
        <div className="flex items-center justify-center">
          {args.icon === 'left' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              {args.icon !== 'icon-only' && <span className="mx-1">Save</span>}
              {args.icon === 'icon-only' && args.icon === 'with-text' && <span className="mx-1">Save</span>}
            </>
          ) : (
            <>
              {args.icon !== 'icon-only' && <span className="mx-1">Save</span>}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>

              {args.icon === 'icon-only' && args.icon === 'with-text' && <span className="mx-1">Save</span>}
            </>
          )}
        </div>
      </BlazeButton>
    </ThemeContext.Provider>
  );
};

const TemplateIconWithText: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;
  const [theme, setTheme] = useState(selectedTheme);

  applyTheme(selectedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="inline-flex items-center">
        <BlazeButton {...args}>
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </BlazeButton>
        <div className="ml-1 text-sm font-normal uppercase text-button-base font-manrope">Add new property</div>
      </div>
    </ThemeContext.Provider>
  );
};

export const Left = Template.bind({});
export const Right = Template.bind({});
export const IconOnly = Template.bind({});
export const WithText = TemplateIconWithText.bind({});

Left.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    text-bold
    rounded-button
    bg-button-outlined
    text-button-outlined 
    px-6
    py-2
    w-30
    dark:bg-gray-800
    dark:text-button-primary
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary
    focus:outline-none
    active:bg-button-pressed
    text-sm`,
};

Right.args = {
  icon: 'right',
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    text-bold
    rounded-button
    bg-button-outlined
    text-button-outlined 
    px-6
    py-2
    w-30
    dark:bg-gray-800
    dark:text-button-primary
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary
    focus:outline-none
    active:bg-button-pressed
    text-sm`,
};

IconOnly.args = {
  icon: 'icon-only',
  theme: adminTheme,
  utilities: `
    mx-auto
    font-manrope
    font-medium
    text-bold
    rounded-full
    bg-button-outlined
    text-button-outlined 
    w-10
    h-10
    dark:bg-gray-800
    dark:text-button-primary
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary
    focus:outline-none
    active:bg-button-pressed
    text-sm
    text-center
  `,
};

WithText.args = {
  icon: 'with-text',
  theme: adminTheme,
  utilities: `
    mx-auto
    font-manrope
    font-medium
    text-bold
    rounded-full
    bg-button-outlined
    text-button-outlined 
    w-7
    h-7
    dark:bg-gray-800
    dark:text-button-primary
    border-2
    border-button-outlined
    hover:bg-button-outlined-hover
    hover:text-button-primary
    focus:outline-none
    active:bg-button-pressed
    text-sm
    text-center
  `,
};
