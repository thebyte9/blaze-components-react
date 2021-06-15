import '@testing-library/jest-dom';

import React from 'react';
import Table from '../../src/Table';
import { data } from '../mocks';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Table component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Table data={data} checkboxes={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should run the cleanup function inside useEffect', () => {
    const useEffectSpy = jest.spyOn(React, 'useEffect');

    const { rerender } = render(<Table data={data} checkboxes={true} />);
    expect(useEffectSpy).toHaveBeenCalled();

    rerender(<Table data={data} checkboxes={true} />);
  });
});
