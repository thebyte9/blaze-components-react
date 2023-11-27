import '@testing-library/jest-dom';

import React from 'react';
import Table from '../../src/Table';
import { data } from '../mocks';
import { render } from '@testing-library/react';

const paginationProps = {
  display: true,
  paginationPagesPerSide: 5,
  itemsPerPage: 10,
  currentPage: 1
}

describe('Table component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Table data={data} checkboxes={false} paginationProps={paginationProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should run the cleanup function inside useEffect', () => {
    const useEffectSpy = jest.spyOn(React, 'useEffect');

    const { rerender } = render(<Table data={data} checkboxes paginationProps={paginationProps} />);
    expect(useEffectSpy).toHaveBeenCalled();

    rerender(<Table data={data} checkboxes paginationProps={paginationProps} />);
  });
});
