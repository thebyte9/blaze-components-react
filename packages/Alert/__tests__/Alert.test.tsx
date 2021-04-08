import { fireEvent, render } from '@testing-library/react';

import Alert from '../src/Alert';
import React from 'react';

const AlertComponent = <Alert close icon="error" type="warning" />;

describe('Alert component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(AlertComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should close alert', () => {
    const { container, getByText } = render(AlertComponent);

    const close = getByText('close');
    fireEvent.click(close);

    expect(container.childElementCount).toBe(0);
  });
});
