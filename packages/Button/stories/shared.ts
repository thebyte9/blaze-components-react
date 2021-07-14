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
  label: {
    control: { type: 'text' },
  },
  icon: {
    options: ['left', 'right', 'no-icon'],
    control: { type: 'radio' },
    defaultValue: { summary: 'left' },
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
};
