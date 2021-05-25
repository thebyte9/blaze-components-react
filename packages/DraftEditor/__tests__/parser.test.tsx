import parseTextBlock from '../src/parser';
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';

describe('parseTextBlock', () => {
  const config = {
    editor:
      '{"blocks":[{"key":"541vr","text":"Lorem ipsum.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3btgp","text":"Swap order so first Credits then second Caption.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3pr00","text":"To match what we now have as labels on video ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":26,"length":18,"key":0}],"data":{}},{"key":"42o43","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2hufe","text":"HORIZONTAL_RULE","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":15,"key":1}],"data":{}},{"key":"7mam9","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"link"}},"1":{"type":"HORIZONTAL_RULE","mutability":"IMMUTABLE","data":{}}}}',
  };

  let expectedMarkup;

  beforeAll(() => {
    expectedMarkup = parseTextBlock(config);
  });

  test('it should be defined', () => {
    expect(expectedMarkup).toBeDefined();
  });

  test('it should output an array with 11 items', () => {
    expect(expectedMarkup).toHaveLength(11);
  });

  test('it should match snapshot', () => {
    const { asFragment } = render(<>{expectedMarkup}</>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it should include a HR tag', () => {
    const { container } = render(<>{expectedMarkup}</>);
    expect(container).toContainHTML('<hr />');
  });

  test('it should include an anchor tag', () => {
    const { container } = render(<>{expectedMarkup}</>);
    expect(container).toContainHTML('<a href="link">as labels on video</a>');
  });

  test('it should include a paragraph tag', () => {
    const { container } = render(<>{expectedMarkup}</>);
    expect(container).toContainHTML('<p>Lorem ipsum.</p>');
  });
});
