import '@testing-library/jest-dom';

import React from 'react';
import Table from '../../src/Table';
import { data } from '../mocks';
import { render } from '@testing-library/react';

jest.mock('../../src/TableBody', () => jest.fn(() => <div>Table.body</div>));
jest.mock('../../src/TableHead', () => jest.fn(() => <div>Table.head</div>));

describe('Table component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { container } = render(<Table checkboxes={false} />);

    expect(container).toMatchSnapshot();
  });
});
