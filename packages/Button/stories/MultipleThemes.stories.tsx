import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { controllerArgs, disabledControls } from './shared';
import { Button } from '@blaze-react/button';
import { ThemeProvider, preset } from '@blaze-react/themes';

export default {
  title: '@blaze-react/Theming/All Stories',
  component: Button,
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

const appTheme = {
  button: {
    variants: {
      default: {
        container: [
          'font-manrope',
          'font-medium',
          'rounded-md',
          'bg-green-600',
          'text-button-primary',
          'px-6',
          'py-1',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-button-primary',
          'hover:bg-green-700',
          'focus:outline-none',
          'mr-1',
          'active:bg-green-500',
        ],
        disabled: {
          container: [
            'font-manrope',
            'font-medium',
            'rounded-button',
            'bg-button-disabled',
            'text-button-primary',
            'px-6',
            'py-1',
            'min-w-min',
            'dark:bg-gray-800',
            'dark:text-button-disabled',
            'focus:outline-none',
            'cursor-not-allowed',
          ],
        },
      },
      secondary: {
        container: [
          'font-manrope',
          'font-medium',
          'text-bold',
          'rounded-button',
          'bg-button-outlined',
          'text-button-outlined',
          'px-6',
          'py-1',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-button-primary',
          'border-2',
          'border-button-outlined',
          'hover:bg-button-outlined-hover',
          'hover:text-button-primary',
          'focus:outline-none',
          'active:bg-button-pressed',
        ],
        disabled: {
          container: [
            'font-manrope',
            'font-medium',
            'rounded-button',
            'bg-button-disabled',
            'text-button-primary',
            'px-6',
            'py-1',
            'min-w-min',
            'dark:bg-gray-800',
            'dark:text-button-disabled',
            'focus:outline-none',
            'cursor-not-allowed',
          ],
        },
      },
    },
  },
};

const customTheme = {
  button: {
    variants: {
      default: {
        container: [
          'font-manrope',
          'font-medium',
          'rounded-md',
          'bg-green-600',
          'text-button-primary',
          'px-6',
          'py-1',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-button-primary',
          'hover:bg-green-700',
          'focus:outline-none',
          'mr-1',
          'active:bg-green-500',
        ],
        disabled: {
          container: [
            'font-manrope',
            'font-medium',
            'rounded-button',
            'bg-button-disabled',
            'text-button-primary',
            'px-6',
            'py-1',
            'min-w-min',
            'dark:bg-gray-800',
            'dark:text-button-disabled',
            'focus:outline-none',
            'cursor-not-allowed',
          ],
        },
      },
      secondary: {
        container: [
          'font-manrope',
          'font-medium',
          'text-bold',
          'rounded-button',
          'bg-button-outlined',
          'text-button-outlined',
          'px-6',
          'py-1',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-button-primary',
          'border-2',
          'border-button-outlined',
          'hover:bg-button-outlined-hover',
          'hover:text-button-primary',
          'focus:outline-none',
          'active:bg-button-pressed',
        ],
        disabled: {
          container: [
            'font-manrope',
            'font-medium',
            'text-bold',
            'text-button-outlined-disabled',
            'rounded-button',
            'px-6',
            'py-1',
            'min-w-min',
            'dark:bg-gray-800',
            'dark:text-button-primary',
            'border-2',
            'border-button-outlined-disabled',
            'hover:bg-button-outlined-hover',
            'hover:text-button-primary',
            'focus:outline-none',
            'active:bg-button-pressed',
          ],
        },
      },
      cta: {
        container: [
          'font-manrope',
          'font-medium',
          'rounded-md',
          'text-lg',
          'bg-red-600',
          'text-button-primary',
          'px-6',
          'py-1',
          'min-w-min',
          'dark:bg-gray-800',
          'dark:text-button-primary',
          'hover:bg-green-700',
          'focus:outline-none',
          'mr-1',
          'active:bg-green-500',
        ],
        disabled: {
          container: [
            'font-manrope',
            'font-medium',
            'rounded-button',
            'bg-button-disabled',
            'text-button-primary',
            'px-6',
            'py-1',
            'min-w-min',
            'dark:bg-gray-800',
            'dark:text-button-disabled',
            'focus:outline-none',
            'cursor-not-allowed',
          ],
        },
      },
    },
  },
};

const Template: Story = (args) => {
  return (
    <div className="flex">
      <Button {...args} />
      <ThemeProvider theme={customTheme}>
        <Button />
      </ThemeProvider>
    </div>
  );
};

export const Multiple = Template.bind({});

Multiple.args = {};
