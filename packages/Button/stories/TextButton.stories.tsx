import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Button from '../src/Button';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Button/All Stories/Text',
  component: Button,
  args: {
    selectedTheme: 'admin',
    icon: 'left',
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
    icon: {
      options: ['left', 'right', 'no-icon'],
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
      <Button {...args}>
        <div className="flex items-center justify-center">
          {args.icon === 'left' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}
            </>
          ) : (
            <>
              {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}

              {args.icon !== 'no-icon' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </>
          )}
        </div>
      </Button>
    </ThemeContext.Provider>
  );
};

export const Left = Template.bind({});
export const Right = Template.bind({});
export const NoIcon = Template.bind({});

Left.args = {
  theme: adminTheme,
  utilities: `
    font-manrope
    font-medium
    text-bold
    rounded-button
    text-button-outlined 
    min-w-min
    dark:bg-gray-800
    dark:text-button-primary
    hover:text-button-muted
    focus:outline-none
    active:text-button-inverted
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
  text-button-outlined 
  min-w-min
  dark:bg-gray-800
  dark:text-button-primary
  hover:text-button-muted
  focus:outline-none
  active:text-button-inverted
  text-sm`,
};

NoIcon.args = {
  icon: 'no-icon',
  theme: adminTheme,
  utilities: `
  font-manrope
  font-medium
  text-bold
  rounded-button
  text-button-outlined 
  min-w-min
  dark:bg-gray-800
  dark:text-button-primary
  hover:text-button-muted
  focus:outline-none
  active:text-button-inverted
  text-sm`,
};
