import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { controllerArgs, controllerArgTypes } from './shared';
import { ButtonController } from '@blaze-react/button';
import { VariantsGroup, Variants } from '../src/types';

export default {
  title: '@blaze-react/Button/All Stories/Other/Controller',
  component: ButtonController,
  args: controllerArgs,
  argTypes: {
    ...controllerArgTypes,
    selectedTheme: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return <ButtonController {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  variant: Variants.Primary,
  variantsGroup: VariantsGroup.Filled,
};
