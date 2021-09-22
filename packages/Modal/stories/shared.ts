import { preset } from '@blaze-react/themes';

export const modalArgTypes = {
  type: {
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
  onClose: {
    control: false,
    table: {
      disable: true,
    },
  },
  variant: {
    options: Object.keys(preset.modal.variants),
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'default' },
    },
  },
};
