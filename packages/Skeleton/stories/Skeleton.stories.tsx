import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Skeleton } from '@blaze-react/skeleton';
import { preset, ThemeProvider } from '@blaze-react/themes';

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
  const [theme, setTheme] = useState(preset);
  return (
    <ThemeProvider theme={theme} setTheme={setTheme} showSkeleton>
      <div className="h-48">
        <Skeleton {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
