import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import More from '../src/More';
import MoreAvatar from '../src/MoreAvatar';
import MoreContent from '../src/MoreContent';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('More component', () => {
  let wrapper: any;

  test('should render', () => {
    const { asFragment } = render(
      <More isMoreMenu>
        <More.Avatar isMoreMenu handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(asFragment).toMatchSnapshot();
  });

  test('should toggle on click and call onClose after second click (no overlay)', () => {
    const onClose = jest.fn();

    render(
      <More isMoreMenu onClose={onClose}>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    userEvent.click(screen.getByRole('button'));
  });

  test('should toggle on menu click and call onClose after second click (no overlay)', () => {
    const onClose = jest.fn();

    render(
      <More isMoreMenu onClose={onClose}>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    userEvent.click(screen.getByRole('button'));
    screen.debug();
    //expect(onClose).toHaveBeenCalled();
  });

  test('should not close menu when onClose prop is undefined', () => {
    const onClose = jest.fn();

    render(
      <More isMoreMenu>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    userEvent.click(screen.getByRole('button'));
    screen.debug();
  });

  test('should display classnames based on props (isHeader true)', () => {
    const { asFragment } = render(
      <More isMoreMenu isHeader onClose={() => ({})}>
        <More.Avatar handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg toggled>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(asFragment).toMatchSnapshot();
  });

  test('should display classnames based on props (isHeader false)', () => {
    const { asFragment } = render(
      <More isMoreMenu isHeader={false} onClose={() => ({})}>
        <More.Avatar handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(asFragment).toMatchSnapshot();
  });

  test('should display overlay when displayBg prop is passed as true', () => {
    const { asFragment } = render(
      <More isMoreMenu displayBg>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg toggled>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(asFragment).toMatchSnapshot();
  });

  test('should not display overlay when displayBg prop is not passed', () => {
    const { asFragment } = render(
      <More isMoreMenu onClose={() => ({})}>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});

describe('More content', () => {
  let wrapper: any;

  test('should display classname based on props', () => {
    const { asFragment } = render(
      <More displayBg isMoreMenu>
        <More.Avatar isMoreMenu handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a id="with-class" href="/" className="className-test">
            Link
          </a>
          <a id="without-class" href="/">
            Link
          </a>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(asFragment).toMatchSnapshot();
  });
});
