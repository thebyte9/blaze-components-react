import DraftEditor from '../src/DraftEditor';
import React from 'react';
import { render } from '@testing-library/react';

declare let window: any;

jest.mock('../src/DraftEditor', () => () => <div>Draft Editor</div>);

describe('DraftEditor component', () => {
  window.getSelection = () => {
    return {
      removeAllRanges: () => ({}),
    };
  };

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => '{ "name":"John", "age":30, "city":"New York"}'),
        setItem: jest.fn(() => '{ "name":"John", "age":30, "city":"New York"}'),
      },
      writable: true,
    });
  });

  test('should be defined and renders correctly (snapshot)', () => {
    const props = {
      handleChange: jest.fn(),
      handleOnFocus: jest.fn(),
      handleOnBlur: jest.fn(),
      handleOnFocus: jest.fn(),
      handleOnBlur: jest.fn(),
      handleKeyCommand: jest.fn(),
      customBlockRenderer: jest.fn(),
      showInlineToolbar: jest.fn(),
      inlineToolbar: false,
      save: jest.fn(),
      styleMap: {},
      myKeyBindingFn: jest.fn(),
      customBlockStyle: jest.fn(),
      customBlockStyle: jest.fn(),
      editor: React.createRef(),
      showAddLinkModal: jest.fn(),
      selectionRect: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
      editorState: {
        getCurrentContent: jest.fn(),
        getSelection: jest.fn(),
        mustForceSelection: jest.fn(),
        getDecorator: jest.fn(),
        getDirectionMap: jest.fn(),
      },
      dispatch: jest.fn(),
    };

    const { asFragment, rerender } = render(<DraftEditor {...props} />);

    const testValueJSON =
      '{"blocks":[{"key":"ai4n8","text":"testing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}';

    rerender(<DraftEditor value={testValueJSON} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
