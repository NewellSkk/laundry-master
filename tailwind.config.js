/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				laundryTheme: {
					colors: {
						primary: {
							DEFAULT: "#6785ff",

							50: "#e2ebff",
							100: "#b2c2ff",
							200: "#8099ff",
							300: "#4e70fe",
							400: "#2047fd",
							500: "#0b2ee4",
							600: "#0423b2",
							700: "#001980",
							800: "#000f4f",
							900: "#00051f",
						},
					},
				},
			},
		}),
	],
};
