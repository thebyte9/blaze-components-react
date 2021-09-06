import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ButtonView } from '../src/view/ButtonView';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Button/All Stories/Outlined/Icon Only',
  component: ButtonView,
  args: {
    selectedTheme: 'admin',
    label: 'Blaze',
    icon: 'no-icon',
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
    icon: {
      control: false,
      table: {
        disable: true,
      },
    },
    disabled: {
      control: false,
      table: {
        disable: true,
      },
    },
    modifiers: {
      control: false,
      table: {
        disable: true,
      },
    },
    type: {
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
      <ButtonView {...args}>
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
              {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}
              {args.icon === 'icon-only' && args.icon === 'with-text' && (
                <span className="mx-1">{args.label ?? 'Blaze'}</span>
              )}
            </>
          ) : (
            <>
              {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}

              {args.icon !== 'no-icon' && (
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
              )}

              {args.icon === 'icon-only' && args.icon === 'with-text' && (
                <span className="mx-1">{args.label ?? 'Blaze'}</span>
              )}
            </>
          )}
        </div>
      </ButtonView>
    </ThemeContext.Provider>
  );
};

export const IconOnly = Template.bind({});

IconOnly.args = {
  icon: 'icon-only',
  theme: adminTheme,
  classes: `
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
    active:border-button-outlined-pressed
    text-sm
    text-center
  `,
};
