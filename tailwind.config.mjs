/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#F8F8F8',
				'secondary': '#0C9E52',
				'accent': '#00622F',
				'text': '#1a1a1a',
				'dk-primary': '#1a1a1a',
				'dk-secondary': '#74B200',
				'dk-accent': '#A6FF00',
				'dk-text': '#F8F8F8',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
