/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
	mode: 'jit',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./index.html',
			'./src/**/*.js',
			'./src/**/*.jsx',
			'./src/**/*.ts',
			'./src/**/*.tsx',
			'./src/**/*.vue',
			'./src/**/*.md'
		]
	},
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue
		},
		extend: {
			colors: {
				teal: colors.real
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'inherit',
						a: {
							color: 'inherit',
							opacity: 0.75,
							'&:hover': {
								opacity: 1,
								color: colors.teal[600]
							}
						},
						b: { color: 'inherit' },
						strong: { color: 'inherit' },
						em: { color: 'inherit' },
						h1: { color: 'inherit' },
						h2: { color: 'inherit' },
						h3: { color: 'inherit' },
						h4: { color: 'inherit' },
						code: { color: 'inherit' }
					}
				}
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	]
}
