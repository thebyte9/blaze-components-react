import { preset } from '@blaze-react/themes';

export const args = {
  selectedTheme: 'admin',
  label: 'Blaze',
  icon: 'no-icon',
  svgIcon: `<!-- Copied from heroicons.com as SVG instead of JSX. -->
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>`,
};

export const argTypes = {
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
  label: {
    control: { type: 'text' },
  },
  icon: {
    options: ['left', 'right', 'no-icon'],
    control: { type: 'radio' },
    defaultValue: { summary: 'left' },
  },
  modifiers: {
    control: false,
    table: {
      disable: true,
    },
  },
  type: {
    control: false,
    table: {
      disable: true,
    },
  },
  disabled: {
    control: false,
    table: {
      disable: true,
    },
  },
};

export const controllerArgs = {
  label: 'Blaze',
  icon: `<!-- Copied from heroicons.com as SVG instead of JSX. -->
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>`,
};

export const controllerArgTypes = {
  label: {
    control: { type: 'text' },
  },
  icon: {
    control: { type: 'text' },
  },
  iconOnly: {
    control: false,
    table: {
      disable: true,
    },
  },
  disabled: {
    control: { type: 'boolean' },
    table: {
      defaultValue: { summary: false },
    },
  },
  modifiers: {
    control: false,
    table: {
      disable: true,
    },
  },
  type: {
    control: false,
    table: {
      disable: true,
    },
  },
  utilities: {
    control: false,
    table: {
      disable: true,
    },
  },
  variant: {
    options: Object.keys(preset.button.variants),
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'admin' },
    },
  },
};

export const disabledControls = {
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
  label: {
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
  disabled: {
    control: false,
    table: {
      disable: true,
    },
  },
  modifiers: {
    control: false,
    table: {
      disable: true,
    },
  },
  type: {
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
  utilities: {
    control: false,
    table: {
      disable: true,
    },
  },
  displayIcon: {
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
  iconOnly: {
    control: false,
    table: {
      disable: true,
    },
  },
};
