import { render } from '@testing-library/react';
import React from 'react';
import { Icon } from '../src/Icon';
import { IconDisplayType } from '../src/types';

const testProps = {
  label: 'SVG Icon',
  display: IconDisplayType.NoIcon,
  iconOnly: false,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>`,
};

describe('Icon component', () => {
  test('it renders correctly', () => {
    const { asFragment } = render(<Icon {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders left icon', () => {
    const overrides = { ...testProps, display: IconDisplayType.Left };
    const { asFragment } = render(<Icon {...overrides} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders right icon', () => {
    const overrides = { ...testProps, display: IconDisplayType.Right };
    const { asFragment } = render(<Icon {...overrides} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders icon only', () => {
    const overrides = { ...testProps, display: IconDisplayType.Right, iconOnly: true };
    const { asFragment } = render(<Icon {...overrides} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders no icon', () => {
    const overrides = { ...testProps, display: IconDisplayType.NoIcon };
    const { asFragment } = render(<Icon {...overrides} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
