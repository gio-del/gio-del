/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#F8F8F8',
				'secondary': '#09703B',
				'accent': '#043B1F',
				'text': '#1a1a1a',
				'dk-primary': '#1a1a1a',
				'dk-secondary': '#baff39',
				'dk-accent': '#FFD700',
				'dk-text': '#F8F8F8',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
