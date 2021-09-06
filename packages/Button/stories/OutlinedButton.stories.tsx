import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ButtonView } from '../src/view/ButtonView';
import { adminTheme, frontendTheme, applyTheme } from '@blaze-react/themes';
import { args, argTypes } from './shared';
import { CustomIcon } from '@blaze-react/icon';

export default {
  title: '@blaze-react/Button/All Stories/Outlined',
  component: ButtonView,
  args: args,
  argTypes: argTypes,
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;
  const [theme, setTheme] = useState(selectedTheme);

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

export const Outlined = Template.bind({});
export const Disabled = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Stretched = Template.bind({});
export const IconLeft = Template.bind({});
export const IconRight = Template.bind({});

Outlined.args = {
  theme: adminTheme,
  classes: `
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
    active:bg-button-pressed
    active:border-button-outlined-pressed
  `,
};

Disabled.args = {
  theme: adminTheme,
  classes: `
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
    active:bg-button-pressed
    active:border-button-outlined-pressed
  `,
};

Small.args = {
  theme: adminTheme,
  classes: `
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
    active:border-button-outlined-pressed
    text-sm
  `,
};

Medium.args = {
  theme: adminTheme,
  classes: `
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
    active:border-button-outlined-pressed
    text-md
  `,
};

Large.args = {
  theme: adminTheme,
  classes: `
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
    active:border-button-outlined-pressed
    text-lg
  `,
};

Stretched.args = {
  theme: adminTheme,
  icon: 'no-icon',
  classes: `
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
  active:border-button-outlined-pressed
  text-md
  `,
};

IconLeft.args = {
  icon: 'left',
  theme: adminTheme,
  classes: `
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
  active:bg-button-pressed
  active:border-button-outlined-pressed
  `,
};

IconRight.args = {
  icon: 'right',
  theme: adminTheme,
  classes: `
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
  active:bg-button-pressed
  active:border-button-outlined-pressed
  `,
};
