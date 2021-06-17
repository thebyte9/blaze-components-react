import '@testing-library/jest-dom';

import Breadcrumb from '../src';
import React from 'react';
import { render } from '@testing-library/react';

const defaultProps = (override = {}) => ({
  children: [
    <a href="#first" key="first">
      First
    </a>,
    <a href="#Second" key="second">
      Second
    </a>,
    <a href="#Third" key="third">
      Third - long text will be truncated for a better user experience
    </a>,
  ],
  ...override,
});

describe('Breadcrumb component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { container } = render(<Breadcrumb {...defaultProps()} />);
    expect(container).toMatchSnapshot();
  });

  it('should renders correctly with one children', () => {
    const children = <a href="#first">First</a>;
    const { container } = render(<Breadcrumb {...defaultProps({ children })} />);
    expect(container).toMatchSnapshot();
  });
});
