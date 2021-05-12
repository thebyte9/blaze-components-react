import '@testing-library/jest-dom';

import React from 'react';
import VideoContainer from '../src/VideoContainer';
import { render } from '@testing-library/react';

describe('VideoContainer component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(
      <VideoContainer src="https://www.youtube.com/embed/sSJiZLkfsnw'" frameBorder="0" title="lorem ipsum" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
