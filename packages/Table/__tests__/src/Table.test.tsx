import '@testing-library/jest-dom';

import React from 'react';
import Table from '../../src/Table';
import { data } from '../mocks';
import { render } from '@testing-library/react';

describe('Table component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Table data={data} checkboxes={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
