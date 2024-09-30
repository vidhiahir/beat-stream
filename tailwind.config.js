/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-contrast': '#d64fed',
				'dashboard-color': '#e9a6f4'
			}
		}
	},
	plugins: []
};
