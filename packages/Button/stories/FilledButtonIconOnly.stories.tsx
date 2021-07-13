import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '../src';
import { adminTheme, frontendTheme, applyTheme } from '@blaze-react/themes';
import CustomIcon from '@blaze-react/icon';

export default {
  title: '@blaze-react/Button/All Stories/Filled/Icon Only',
  component: Button,
  args: {
    selectedTheme: 'admin',
    label: 'Blaze',
    icon: 'no-icon',
    svgIcon: `<!-- Copied from heroicons.com as SVG. -->
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>`,
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

  applyTheme(selectedTheme);

  return (
    <Button {...args}>
      <div className="flex items-center justify-center">
        {args.icon === 'left' ? (
          <>
            <CustomIcon utilities="w-6 h-6 stroke-current fill-current" content={args.svgIcon} />
            {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}
            {args.icon === 'icon-only' && args.icon === 'with-text' && (
              <span className="mx-1">{args.label ?? 'Blaze'}</span>
            )}
          </>
        ) : (
          <>
            {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}

            {args.icon !== 'no-icon' && (
              <CustomIcon utilities="w-6 h-6 stroke-current fill-current" content={args.svgIcon} />
            )}

            {args.icon === 'icon-only' && args.icon === 'with-text' && (
              <span className="mx-1">{args.label ?? 'Blaze'}</span>
            )}
          </>
        )}
      </div>
    </Button>
  );
};

export const IconOnly = Template.bind({});

IconOnly.args = {
  theme: adminTheme,
  icon: 'icon-only',
  utilities: `
    font-manrope
    font-medium
    rounded-full
    bg-button-primary 
    text-button-primary
    px-0
    py-0 
    w-10
    h-10
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none 
    active:bg-button-pressed`,
};
