import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SocialFollow from '../SocialFollow';

const media = {
  facebook: 'https://www.thebyte9.com',
  twitter: 'https://www.thebyte9.com',
  pinterest: 'https://www.thebyte9.com',
  LinkedIn: 'https://www.thebyte9.com',
  youtube: 'https://www.thebyte9.com',
  instagram: 'https://www.thebyte9.com'
};

describe('SocialFollow component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<SocialFollow media={media} type="follow" vertical />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').at(0)).toContain('Follow');
  });
  test('SocialFollow should be share by default', () => {
    const wrapper = shallow(<SocialFollow media={media} />);
    expect(wrapper.find('.social--share').length).toEqual(1);
  });
});
