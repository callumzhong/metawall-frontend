import React from 'react';
import LoginBanner from './loginBanner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'modules/Banner',
	component: LoginBanner,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LoginBanner {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
