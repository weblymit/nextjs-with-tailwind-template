module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			colors: {
				"wb-primary": {
					default: "#8d6e64",
					light: "#d7ccc9",
				},
				"wb-orange": {
					default: "#ed5d03",
					default2: "#e68e5f",
					light: "#f9b388",
				},
			},
			borderRadius: {
				xl: "30px",
				xxl: "50px",
			},
			spacing: {
				30: "30px",
				50: "50px",
				60: "60px",
				70: "70px",
				80: "80px",
				90: "90px",
				100: "100px",
				110: "110px",
				120: "120px",
				130: "130px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
