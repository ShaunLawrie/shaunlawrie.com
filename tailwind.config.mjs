/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-accent')({
			colors: ['violet'],
			root: 'violet',
			cssVarsPrefix: 'tw-theme', // result: --tw-plugin-accent-200
		}),
	],
}
