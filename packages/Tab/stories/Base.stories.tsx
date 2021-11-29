import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Tab, TabItem } from '../src';
import { adminTheme, frontendTheme, applyTheme } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Tab/All Stories',
  component: Tab,
  args: {
    selectedTheme: 'admin',
    icons: {
      mobile: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>`,
      tablet: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>`,
      desktop: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`,
      plus: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>`,
    },
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
    selected: {
      control: false,
      table: {
        disable: true,
      },
    },
    icons: {
      control: 'object',
    },
  },
} as Meta;

const Template: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;

  applyTheme(selectedTheme);

  return (
    <Tab selected={args.selected} {...args}>
      <TabItem title="Basic">Basic tab content ...</TabItem>
      <TabItem title="Advanced" action={args.action}>
        Advanced tab content
      </TabItem>
    </Tab>
  );
};

const TemplateCompact: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;

  applyTheme(selectedTheme);

  return (
    <Tab selected={args.selected} {...args}>
      <TabItem icon={args.icons.mobile}>Mobile content ...</TabItem>
      <TabItem icon={args.icons.tablet}>Tablet content ...</TabItem>
      <TabItem icon={args.icons.desktop}>Desktop content ...</TabItem>
      <TabItem icon={args.icons.plus}>Another content ...</TabItem>
    </Tab>
  );
};

const TemplateExpanded: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;

  applyTheme(selectedTheme);

  return (
    <Tab selected={args.selected} {...args}>
      <TabItem icon={args.icons.mobile} title="Mobile" showLabel>
        Mobile content ...
      </TabItem>
      <TabItem icon={args.icons.tablet} title="Tablet" showLabel>
        Tablet content ...
      </TabItem>
      <TabItem icon={args.icons.desktop} title="Desktop" showLabel>
        Desktop content ...
      </TabItem>
      <TabItem icon={args.icons.plus} title="More" showLabel>
        Content ...
      </TabItem>
    </Tab>
  );
};

const TemplateScrolling: Story = (args) => {
  const selectedTheme = args.selectedTheme === 'admin' ? adminTheme : frontendTheme;

  applyTheme(selectedTheme);

  return (
    <Tab selected={args.selected} {...args}>
      <TabItem title="Tab 1">Tab 1 content ...</TabItem>
      <TabItem title="Tab 2">Tab 2 content ...</TabItem>
      <TabItem title="Tab 3">Tab 3 content ...</TabItem>
      <TabItem title="Tab 4">Tab 4 content ...</TabItem>
      <TabItem title="Tab 5">Tab 5 content ...</TabItem>
      <TabItem title="Tab 6">Tab 6 content ...</TabItem>
      <TabItem title="Tab 7">Tab 7 content ...</TabItem>
      <TabItem title="Tab 8">Tab 8 content ...</TabItem>
      <TabItem title="Tab 9">Tab 9 content ...</TabItem>
      <TabItem title="Tab 10">Tab 10 content ...</TabItem>
      <TabItem title="Tab 11">Tab 11 content ...</TabItem>
      <TabItem title="Tab 12">Tab 12 content ...</TabItem>
      <TabItem title="Tab 13">Tab 13 content ...</TabItem>
      <TabItem title="Tab 14">Tab 14 content ...</TabItem>
      <TabItem title="Tab 15">Tab 15 content ...</TabItem>
      <TabItem title="Tab 16">Tab 16 content ...</TabItem>
      <TabItem title="Tab 17">Tab 17 content ...</TabItem>
      <TabItem title="Tab 18">Tab 18 content ...</TabItem>
      <TabItem title="Tab 19">Tab 19 content ...</TabItem>
      <TabItem title="Tab 20">Tab 20 content ...</TabItem>
    </Tab>
  );
};

export const Default = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Stretched = Template.bind({});
export const Icon = TemplateCompact.bind({});
export const IconWithLabel = TemplateExpanded.bind({});
export const Scrolling = TemplateScrolling.bind({});

Default.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    font-manrope
    font-medium
    rounded-tab 
    bg-tab-primary 
    text-tab-base 
    px-10 
    py-1 
    min-w-min 
    dark:bg-gray-800 
    dark:text-tab-base 
    text-tab-base 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-md
    mr-1`,
};

Small.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
  font-manrope
  font-medium
  rounded-tab 
  bg-tab-primary 
  text-tab-base 
  px-4 
  py-1 
  min-w-min 
  dark:bg-gray-800 
  dark:text-tab-base 
  text-tab-base 
  hover:bg-tab-hover 
  hover:text-tab-inverted
  focus:outline-none 
  active:bg-tab-hover
  text-xs
  mr-1
  `,
};

Medium.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    font-manrope
    font-medium
    rounded-tab 
    bg-tab-primary 
    text-tab-base 
    px-12 
    py-1 
    min-w-min 
    dark:bg-gray-800 
    dark:text-tab-base 
    text-tab-base 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-md
    mr-1
  `,
};

Large.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    font-manrope
    font-medium
    rounded-tab
    bg-tab-primary 
    text-tab-primary 
    px-20
    py-1 
    dark:bg-gray-800 
    dark:text-tab-primary 
    text-base-primary 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-lg
    mr-1
  `,
};

Stretched.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    font-manrope
    font-medium
    rounded-tab
    bg-tab-primary 
    text-tab-primary 
    px-16 
    py-1 
    w-full
    dark:bg-gray-800 
    dark:text-tab-primary 
    text-base-primary 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-lg
    mr-1
  `,
};

Icon.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    group
    font-manrope
    font-medium
    rounded-full 
    bg-tab-primary 
    text-tab-base 
    w-10
    h-10
    min-w-min 
    dark:bg-gray-800 
    dark:text-tab-base 
    text-tab-base 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-md
    mr-3`,
};

IconWithLabel.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    group
    font-manrope
    font-medium
    rounded-full 
    bg-tab-primary 
    text-tab-base 
    w-20
    h-20
    min-w-min 
    dark:bg-gray-800 
    dark:text-tab-base 
    text-tab-base 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-md
    mr-3`,
};

Scrolling.args = {
  theme: adminTheme,
  selected: 0,
  classes: `
    font-manrope
    font-medium
    rounded-tab 
    bg-tab-primary 
    text-tab-base 
    px-10 
    py-1 
    min-w-max
    whitespace-nowrap
    dark:bg-gray-800 
    dark:text-tab-base 
    text-tab-base 
    hover:bg-tab-hover 
    hover:text-tab-inverted
    focus:outline-none 
    active:bg-tab-hover
    text-md
    mr-1`,
};
