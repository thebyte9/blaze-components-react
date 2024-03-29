import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ButtonView } from '../src/view/ButtonView';
import { adminTheme, frontendTheme, ThemeContext, applyTheme } from '@blaze-react/themes';
import { CustomIcon } from '@blaze-react/icon';
import { args, argTypes } from './shared';

export default {
  title: '@blaze-react/Button/All Stories/Text',
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
            <CustomIcon classes="w-6 h-6 stroke-current fill-current" content={args.svgIcon} />
            {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}
            {args.icon === 'icon-only' && args.icon === 'with-text' && (
              <span className="mx-1">{args.label ?? 'Blaze'}</span>
            )}
          </>
        ) : (
          <>
            {args.icon !== 'icon-only' && <span className="mx-1">{args.label ?? 'Blaze'}</span>}

            {args.icon !== 'no-icon' && (
              <CustomIcon classes="w-6 h-6 stroke-current fill-current" content={args.svgIcon} />
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

export const Left = Template.bind({});
export const Right = Template.bind({});
export const NoIcon = Template.bind({});

Left.args = {
  icon: 'left',
  theme: adminTheme,
  classes: `
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
    text-md`,
};

Right.args = {
  icon: 'right',
  theme: adminTheme,
  classes: `
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
  text-md`,
};

NoIcon.args = {
  icon: 'no-icon',
  theme: adminTheme,
  classes: `
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
  text-md`,
};
