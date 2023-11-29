import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Pagination from '../src';
import React from 'react';
import userEvent from '@testing-library/user-event';

const defaultProps = (override = {}) => ({
    onPageChange: jest.fn(),
    currentPage: 1,
    itemsPerPage: 10,
    visiblePages: 10,
    totalPages: 100,
    ...override,
});

describe('Pagination component', () => {

    it("should be defined", () => {
        expect(Pagination).toBeDefined();
    });

    it('should be defined and renders correctly (snapshot)', () => {
        const { container } = render(<Pagination {...defaultProps()} />);
        expect(container).toMatchSnapshot();
    });

    it('handles page change', () => {
        const mockOnChange = jest.fn();
        render(<Pagination {...defaultProps({ onPageChange: mockOnChange })} />);
        userEvent.click(screen.getByText('6'));
        expect(mockOnChange).toHaveBeenCalled();
    });

});
