import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';
import Nestable from '../../../src/Nestable';
import { fakeItem } from '../../mocks/dnd';

const NestableComponent = () => (
  <Nestable
    onChange={jest.fn()}
    confirmChange={jest.fn()}
    childrenWrapperClassName="list__item list__item--pagebuilder"
    items={[fakeItem]}
    childrenProp="items"
    renderItem={({ item, children, DragHandler }) => (
      <div className="list__item list__item--pagebuilder">
        <p>{item.name}</p>
        <p>{item.id}</p>
        <DragHandler />
        {children}
      </div>
    )}
  />
);

describe('Nestable', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<NestableComponent />);
    expect(asFragment).toMatchSnapshot();
  });

  it('should handle dragStart', () => {
    render(<NestableComponent />);
    const firstItem = screen.getByText('textblock-1');
    fireEvent.dragStart(firstItem);
  });

  it('should handle mouseEnter', () => {
    render(<NestableComponent />);
    const firstItem = screen.getByText('textblock-1');
    fireEvent.mouseEnter(firstItem);
  });

  it('should handle dragEnter', () => {
    render(<NestableComponent />);
    const firstItem = screen.getByText('textblock-1');
    const secondItem = screen.getByTestId('nestable-item-2');

    fireEvent.dragStart(firstItem);
    fireEvent.dragEnter(secondItem);
  });

  it('should handle dragEnd', () => {
    render(<NestableComponent />);
    const firstItem = screen.getByText('textblock-1');
    const secondItem = screen.getByTestId('nestable-item-2');

    fireEvent.dragStart(firstItem);
    fireEvent.dragEnd(secondItem);
  });
});
