module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	safelist: ['debug-screens'],
	theme: {
		debugScreens: {
			position: ['top', 'left'],
		},
		extend: {
			colors: {
				black: '#000400',
				'light-grayish-orange': '#efece7',
				'dark-blue': '#03438d',
			},
			fontFamily: {
				azeret: ["'Azeret Mono'", 'system-ui'],
				baloo: ["'Baloo Da 2'", 'system-ui'],
				paytone: ["'Paytone One'", 'system-ui'],
				helvetica: ["'Helvetica Neue'", 'system-ui'],
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};
