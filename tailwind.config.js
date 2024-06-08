/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2c3e50",
				secondary: "#00bc77",
				white: "#fff",
				black: "#000",
				gray: "#ccc",
				blue: "#12002b",
			},
		},
	},
	plugins: [],
};

