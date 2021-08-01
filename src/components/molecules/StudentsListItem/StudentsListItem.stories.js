import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: { name: 'Adam Romański', attendance: '87%', average: '4.0' },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: { name: 'Adam Romański', attendance: '87%', average: '3.0' },
};
