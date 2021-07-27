import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ButtonView } from '../src/view/ButtonView';
import { adminTheme, frontendTheme, applyTheme } from '@blaze-react/themes';
import { CustomIcon } from '@blaze-react/icon';
import { args, argTypes } from './shared';

export default {
  title: '@blaze-react/Button/All Stories/Filled',
  component: ButtonView,
  args: args,
  argTypes: argTypes,
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;

  applyTheme(selectedTheme);

  return (
    <ButtonView {...args}>
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
    </ButtonView>
  );
};

export const Filled = Template.bind({});
export const Disabled = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Stretched = Template.bind({});
export const IconLeft = Template.bind({});
export const IconRight = Template.bind({});

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
    min-w-min 
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
    min-w-min 
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
    px-4 
    py-1 
    min-w-min 
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
    min-w-min 
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
    min-w-min 
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

IconLeft.args = {
  theme: adminTheme,
  icon: 'left',
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
    active:bg-button-pressed`,
};

IconRight.args = {
  theme: adminTheme,
  icon: 'right',
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
    active:bg-button-pressed`,
};
