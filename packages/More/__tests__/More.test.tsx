import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import More from '../src/More';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('More component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <More isMoreMenu onClose={jest.fn()}>
        <More.Avatar isMoreMenu handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle on menu click and call onClose after second click (no overlay)', async () => {
    const user = userEvent.setup();
    const onCloseMock = jest.fn();

    render(
      <More isMoreMenu onClose={onCloseMock}>
        <More.Avatar isHeader handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );
    await user.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('should not close menu when onClose prop is undefined', async () => {
    const user = userEvent.setup();
    const onCloseMock = jest.fn();

    render(
      <More isMoreMenu onClose={undefined}>
        <More.Avatar isHeader handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );
    await user.click(screen.getByRole('button'));
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test('should display classnames based on props (isHeader true)', () => {
    render(
      <More isMoreMenu isHeader onClose={jest.fn()}>
        <More.Avatar handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg={true} toggled={true}>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(screen.getByTestId('more-menu-ul')).toHaveClass(
      'dropdown dropdown__list dropdown__list--header dropdown--header more-menu__list',
    );
    expect(screen.getByTestId('more-menu-li')).toHaveClass(
      'dropdown__list-item dropdown__list-item--header more-menu__list-item',
    );
  });

  test('should display classnames based on props (isHeader false)', () => {
    render(
      <More isMoreMenu isHeader={false} onClose={jest.fn()}>
        <More.Avatar handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(screen.getByTestId('more-menu-ul')).toHaveClass('dropdown dropdown dropdown__list more-menu__list');
    expect(screen.getByTestId('more-menu-li')).toHaveClass('dropdown__list-item more-menu__list-item');
  });

  test('should display overlay when displayBg prop is passed as true', () => {
    render(
      <More isMoreMenu displayBg={true} onClose={jest.fn()}>
        <More.Avatar isHeader handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg={true} toggled={true}>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    expect(screen.getByTestId('more-menu-background')).toHaveClass('more-menu__background');
  });

  test('should return from handleToggle if disabled prop is true', async () => {
    const user = userEvent.setup();
    const handleToggleMock = jest.fn();

    render(
      <More isMoreMenu displayBg={false} onClose={jest.fn()} disabled>
        <More.Avatar isHeader handleToggle={handleToggleMock}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg={true} toggled={true}>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );
    await user.click(screen.getByTestId('more-avatar-button'));
    expect(handleToggleMock).not.toBeCalled();
  });

  test('should not display overlay when displayBg prop is not passed', async () => {
    const { getByTestId } = render(
      <More isMoreMenu onClose={jest.fn()}>
        <More.Avatar isHeader handleToggle={jest.fn()}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>,
    );

    try {
      getByTestId('more-menu-background');
    } catch (e) {
      expect(e.message).toContain('Unable to find an element by: [data-testid="more-menu-background"]');
    }
  });

  test('it should call useEffect cleanup function', async () => {
    const user = userEvent.setup();
    const useEffectCleanUpSpy = jest.spyOn(React, 'useEffect');
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation((init) => [init, setState]);

    const { unmount } = render(
      <div data-testid="test-wrapper">
        <More isMoreMenu onClose={jest.fn()}>
          <More.Avatar isHeader handleToggle={jest.fn()}>
            <span className="material-icons">more_vert</span>
          </More.Avatar>
          <More.Content isMoreMenu>
            <a href="/">Link</a>
          </More.Content>
        </More>
      </div>,
    );
    await user.click(screen.getByTestId('test-wrapper'));
    expect(setState).toHaveBeenCalledWith(false);
    unmount();
    expect(useEffectCleanUpSpy).toHaveBeenCalled();
  });

  test('it should return handleOutsideClick after running the cleanup effect', () => {
    const handleOutsideClickMock = jest.fn();
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: {} });
    jest.spyOn(React, 'useEffect').mockImplementation(() => handleOutsideClickMock());

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { unmount } = render(
      <div data-testid="test-wrapper">
        <More isMoreMenu onClose={jest.fn()}>
          <More.Avatar isHeader handleToggle={jest.fn()}>
            <span className="material-icons">more_vert</span>
          </More.Avatar>
          <More.Content isMoreMenu>
            <a href="/">Link</a>
          </More.Content>
        </More>
      </div>,
    );

    unmount();
    expect(handleOutsideClickMock).toBeCalled();
  });

  describe('More content', () => {
    test('should display classname based on props', () => {
      render(
        <More displayBg={false} isMoreMenu onClose={jest.fn()}>
          <More.Avatar isMoreMenu handleToggle={jest.fn()}>
            <span className="material-icons">more_vert</span>
          </More.Avatar>
          <More.Content isMoreMenu>
            <a id="with-class" href="/" className="className-test" data-testid="custom-class">
              Link
            </a>
            <a id="without-class" href="/" data-testid="no-custom-class">
              Link
            </a>
            <a href="/">Link</a>
          </More.Content>
        </More>,
      );

      expect(screen.getByTestId('custom-class')).toHaveClass('className-test more-menu__link');
      expect(screen.getByTestId('no-custom-class')).toHaveClass('more-menu__link');
    });
  });
});
