import React from 'react';
import RegisterFrom from './RegisterFrom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Component/RegisterFrom',
	component: RegisterFrom,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RegisterFrom {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
