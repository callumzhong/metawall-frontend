const defaultTheme = require('tailwindcss/defaultTheme');

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
				gray: {
					DEFAULT: '#A8B0B9',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#ECEEF0',
					300: '#D5D9DD',
					400: '#BFC5CB',
					500: '#A8B0B9',
					600: '#8994A0',
					700: '#6B7885',
					800: '#525C66',
					900: '#394047',
				},
				froly: {
					DEFAULT: '#F57375',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FDE5E6',
					300: '#FABFC0',
					400: '#F8999B',
					500: '#F57375',
					600: '#F13F41',
					700: '#E71114',
					800: '#B30D0F',
					900: '#7F090B',
				},
			},
			fontFamily: {
				sans: ["'Noto Sans TC'", ...defaultTheme.fontFamily.sans],
				azeret: ["'Azeret Mono'", ...defaultTheme.fontFamily.sans],
				baloo: ["'Baloo Da 2'", ...defaultTheme.fontFamily.sans],
				paytone: ["'Paytone One'", ...defaultTheme.fontFamily.sans],
				helvetica: ["'Helvetica Neue'", ...defaultTheme.fontFamily.sans],
			},
			width: {
				main: '60.3472%',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};
