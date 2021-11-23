import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { SvgIcon } from '../src';
import { default as icons } from '../src/fontawesome/icons'

export default {
  title: '@blaze-react/Icon/All Stories/SvgIcon',
  component: SvgIcon,
  args: {
    selectedTheme: 'admin',
  },
  argTypes: {
    selectedTheme: {
      control: false,
      table: {
        disable: true,
      },
    },
    theme: {
      control: false,
      table: {
        disable: true,
      },
    },
    svg: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {  
  return <SvgIcon svg={icons[args.name]} classes={args.classes}/>;
};

export const Fontawesome = Template.bind({});

Fontawesome.args = {
  name: 'airbnb',
  library: 'fontawesome',
  classes: 'w-20 h-20 text-blue-500 stroke-current fill-current'
};
