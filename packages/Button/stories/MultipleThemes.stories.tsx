import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useEffect } from 'react';
import Button from '../src';
import { CustomIcon } from '@blaze-react/icon';
import { args, argTypes } from './shared';
import './styles.css';

export default {
  title: '@blaze-react/Button/All Stories/Multiple Themes',
  component: Button,
  args: args,
  argTypes: {
    ...argTypes,
    selectedTheme: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const ButtonController = (args) => {
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

const Template: Story = (args) => {
  return (
    <div className="theme-frontend">
      <ButtonController {...args} />
    </div>
  );
};

export const MultipleTheme = Template.bind({});

MultipleTheme.args = {
  utilities: `
    font-manrope
    font-medium
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    min-w-min 
    dark:bg-gray-800 
    dark:text-button-primary 
    text-base-primary 
    hover:bg-button-hover 
    focus:outline-none
    mr-1 
    active:bg-button-pressed`,
};
