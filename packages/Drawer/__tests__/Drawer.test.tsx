import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

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
    expect(asFragment).toMatchSnapshot();
  });
});
