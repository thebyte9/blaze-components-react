import React from 'react';
import Group from '../src/Group';

export default {
  title: 'Group',
  component: Group,
}
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Group {...args}>Group</Group>;

//👇 Each story then reuses that template
export const Border = Template.bind({});

Border.args = {
  border: 'border-8',
  borderColor: 'border-indigo-600',
};