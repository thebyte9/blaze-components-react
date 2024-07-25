import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { controllerArgs, controllerArgTypes, disabledControls } from './shared';
import { Button } from '@blaze-react/button';
import { preset, ThemeProvider } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Theming/All Stories',
  component: Button,
  args: controllerArgs,
  argTypes: disabledControls,
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider theme={preset}>
      <Button {...args} />
    </ThemeProvider>
  );
};

export const WithoutVariant = Template.bind({});

WithoutVariant.args = {};
