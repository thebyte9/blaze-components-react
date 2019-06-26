import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Progress from '../src';

const steps = ['Cart', 'Billing', 'Delivery', 'Review & pay'];

describe('Alert component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(<Progress progress={2} onChange={() => {}} steps={steps} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should be type count and change progress', () => {
    const handleChange = ({ step }) => expect(step).toEqual(4);

    const wrapper = shallow(
      <Progress progress={1} type="count" onChange={handleChange} steps={steps} />
    );

    wrapper
      .find('span')
      .at(3)
      .simulate('click');
    expect(wrapper.find('.current').text()).toEqual('Review & pay');
    expect(wrapper.find('.final').text()).toEqual('Review & pay');
  });
});
