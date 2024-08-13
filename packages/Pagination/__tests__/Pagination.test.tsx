import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Pagination from '../src';
import React from 'react';

const defaultProps = (override = {}) => ({
  onPageChange: jest.fn(),
  currentPage: 1,
  itemsPerPage: 10,
  visiblePages: 10,
  totalItems: 100,
  ...override,
});

describe('Pagination component', () => {
  it('Should hide pagination if there is only one page', () => {
    const { queryByTestId } = render(<Pagination {...defaultProps({ totalItems: 5 })} />);
    const element = queryByTestId('pagination');
    expect(element).not.toBeInTheDocument();
  });

  it('should be defined and renders correctly (snapshot)', () => {
    const { container } = render(<Pagination {...defaultProps()} />);
    expect(container).toMatchSnapshot();
  });

  it('Should handle page change', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    render(<Pagination {...defaultProps({ onPageChange: mockOnChange })} />);
    await user.click(screen.getByText('6'));
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('Does not display items per page when total items are zero.', () => {
    const { queryByTestId } = render(<Pagination {...defaultProps({ totalItems: 0 })} />);
    const element = queryByTestId('items-perpage');
    expect(element).not.toBeInTheDocument();
  });
});
