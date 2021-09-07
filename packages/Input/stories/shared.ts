import { InputType, LayoutType, DisplayErrorAs, InputState } from '../src/types';

export const inputArgTypes = {
  layout: {
    options: LayoutType,
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'admin' },
    },
  },
  error: {
    control: false,
    table: {
      disable: true,
    },
  },
  icon: {
    control: false,
    table: {
      disable: true,
    },
  },
  classes: {
    control: false,
    table: {
      disable: true,
    },
  },
  type: {
    options: InputType,
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'admin' },
    },
  },
  currentState: {
    options: InputState,
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'admin' },
    },
  },
  displayError: {
    options: DisplayErrorAs,
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'admin' },
    },
  },
};
