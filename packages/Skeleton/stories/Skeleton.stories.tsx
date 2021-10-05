import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Skeleton } from '@blaze-react/skeleton';
import { preset, ThemeProvider } from '@blaze-react/themes';
import { controllerArgs, controllerArgTypes } from './shared';

export default {
  title: '@blaze-react/Skeleton',
  component: Skeleton,
  argTypes: {
    classes: {
      control: false,
      table: {
        disable: true,
      },
    },
    variant: {
      control: false,
      table: {
        disable: true,
      },
    },
    overrides: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider theme={preset} showSkeleton>
      <div className="h-48">
        <Skeleton {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  theme: preset;
};
