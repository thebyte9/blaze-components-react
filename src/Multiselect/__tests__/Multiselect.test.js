import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Multiselect from '../Multiselect';

const data = {
  keyValue: 'name',
  filterBy: ['name'],
  data: [
    {
      id: 1,
      name: 'Blaze',
    },
    {
      id: 2,
      name: 'KP',
    },
    {
      id: 3,
      name: 'Pulser',
    }
  ]
};

const MultiselectComponent = (
  <Multiselect data={data} selected={() => {}} />
);

describe('DragableArea component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const wrapper = shallow(MultiselectComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test('should select first option', () => {
    const wrapper = mount(MultiselectComponent);

    wrapper.find('.form-field--checkbox').at(0).simulate('click');
    
    expect(wrapper.find('div').at(0).text()).toContain('Blaze');
  });

  test('should allow to filter', () => {
    const wrapper = mount(MultiselectComponent);

    wrapper.find('input').at(0).simulate('keyUp', { target: { value: 'KP' } });
    expect(wrapper.find('.form-field--checkbox').at(0).text()).toContain('KP');
  });
});

