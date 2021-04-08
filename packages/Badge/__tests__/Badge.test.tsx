import '@testing-library/jest-dom';

import Badge from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('Badge component', () => {
  it('should render properly when pass link prop without throwing error', () => {
    const wrapper = render(
      <Badge type="pagebuilder" link>
        <a href="#"></a>
      </Badge>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render children without throwing error', () => {
    const wrapper = render(
      <Badge type="pagebuilder" color="blue" icon>
        BadgeText         
        <i className="fas fa image" />
      </Badge>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
