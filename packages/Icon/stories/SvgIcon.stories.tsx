import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';
import { SvgIcon } from '../src';
import { default as icons } from '../src/fontawesome/icons'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const parseIconName = (name) => {
  if (name.includes('-')) {
    const ary = name.split('-');
    const left = capitalize(ary[1]);
    return ary[0] + left;
  }

  return name;
}

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
  const name = parseIconName(args.name);
  return <SvgIcon svg={icons[name]} classes={args.classes}/>;
};

export const Fontawesome = Template.bind({});

Fontawesome.args = {
  name: 'airbnb',
  library: 'fontawesome',
  classes: 'w-20 h-20 text-blue-500 stroke-current fill-current'
};
