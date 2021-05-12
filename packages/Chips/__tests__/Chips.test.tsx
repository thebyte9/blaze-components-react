import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Avatar from '../../Avatar/src';
import Chips from '../src';
import React from 'react';

describe('Chip component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(
      <Chips modifiers={[Chips.availableModifiers.parent.deletable, Chips.availableModifiers.parent.small]}>
        <Chips.Label>Basic chip</Chips.Label>
      </Chips>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should delete Chip', () => {
    const { asFragment } = render(
      <Chips
        modifiers={[Chips.availableModifiers.parent.deletable, Chips.availableModifiers.parent.small]}
        action={() => ({})}
      >
        <Chips.Avatar>
          <Avatar username="Lorem Ipsum" modifier="x-small" />
        </Chips.Avatar>
        <Chips.Label>Primary deletable chip</Chips.Label>
        <Chips.Icon modifier={Chips.availableModifiers.icon.delete}>
          <i className="material-icons">delete</i>
        </Chips.Icon>
      </Chips>,
    );

    const deletable = screen.getByText('delete');
    fireEvent.click(deletable);

    expect(asFragment()).toMatchSnapshot();
  });
});
