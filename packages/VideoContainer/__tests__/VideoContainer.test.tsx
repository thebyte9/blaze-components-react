import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import VideoContainer from '../src/VideoContainer';

describe('VideoContainer component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(
      <VideoContainer
        src="https://www.youtube.com/embed/sSJiZLkfsnw'"
        frameborder="0"
        title="lorem ipsum"
      />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
