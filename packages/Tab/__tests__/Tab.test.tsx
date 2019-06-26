// import React from 'react';
// import expect from 'expect';
// import { shallow, mount } from 'enzyme';
// import { Tab, TabItem } from '../src/index';

// const tabComponent = (
//   <Tab selected={1}>
//     <TabItem>Basic content here</TabItem>
//     <TabItem title="Advanced" >
//       Advanced content here
//     </TabItem>
//     <TabItem title="Other">Other content here</TabItem>
//   </Tab>
// );

// describe('Tab component', () => {
//   test('should be defined and renders correctly (snapshot)', () => {
//     const wrapper = shallow(tabComponent);
//     expect(wrapper).toBeDefined();
//     expect(wrapper).toMatchSnapshot();
//   });

//   test('should navigate between tabs', () => {
//     const wrapper = mount(tabComponent);

//     expect(wrapper.find('.tabs__content').text()).toContain('Advanced content here');

//     wrapper
//       .find('button')
//       .at(0)
//       .simulate('click');

//     expect(wrapper.find('.tabs__content').text()).toContain('Basic content here');
//   });
// });
