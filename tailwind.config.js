/** @type {import('tailwindcss').Config} */
export default {
	purge: {
		content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
		options: {
			safelist: ['bg-slate-800', 'bg-pink-500', 'bg-purple-500', 'bg-emerald-500'],
		},
	},
	theme: {
		extend: {},
	},
	plugins: [],
}
