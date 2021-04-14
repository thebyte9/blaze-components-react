import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import MultiLevelMenu from '../src/MultiLevelMenu';
import React from 'react';

const MultiLevelMenuComponent = (
  <MultiLevelMenu main={1}>
    <MultiLevelMenu.List id={1}>
      <MultiLevelMenu.Item to={2}>Lorem</MultiLevelMenu.Item>
    </MultiLevelMenu.List>

    <MultiLevelMenu.List id={2}>
      <MultiLevelMenu.Item>Ipsum</MultiLevelMenu.Item>
    </MultiLevelMenu.List>
  </MultiLevelMenu>
);

const activeMenuClass = '.multilevelmenu__sidemenu--show span';
const backLinkClass = '.multilevelmenu__backlink';

describe('MultiLevelMenu', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(MultiLevelMenuComponent);
    expect(asFragment).toMatchSnapshot();
  });
});
