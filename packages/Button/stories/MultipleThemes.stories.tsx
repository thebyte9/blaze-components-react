import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { controllerArgs, disabledControls } from './shared';
import { ButtonController } from '@blaze-react/button';

export default {
  title: '@blaze-react/Button/All Stories/Other/Multiple Themes',
  component: ButtonController,
  args: controllerArgs,
  argTypes: {
    ...disabledControls,
    selectedTheme: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <div className="flex">
      <ButtonController {...args} />
      <div className="theme-frontend">
        <ButtonController {...args} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
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
