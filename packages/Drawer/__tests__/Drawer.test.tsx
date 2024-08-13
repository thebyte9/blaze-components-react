import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Drawer from '../src/Drawer';
import React from 'react';

const DrawerComponent = (
  <Drawer modifier="right" title="Drawer Component">
    <Drawer.DrawerMainContent>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
    </Drawer.DrawerMainContent>
    <Drawer.DrawerPageContent>
      <p>Cum assumenda ullam explicabo nostrum nam natus.</p>
    </Drawer.DrawerPageContent>
  </Drawer>
);

describe('Drawer component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(DrawerComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle the drawer', async () => {
    const user = userEvent.setup();
    render(DrawerComponent);
    await user.click(screen.getByTestId('icon-button-arrow'));

    const drawer = screen.getByTestId('drawer-wrapper');
    expect(drawer.classList.contains('open')).toBeTruthy();

    await user.click(screen.getByTestId('icon-button-arrow'));
    expect(drawer.classList.contains('open')).toBeFalsy();
  });
});
