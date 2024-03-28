import { createTheme } from "@mui/material";

const primaryFont = "Poppins, sans-serif";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#6785ff",
			lighter: "#e2ebff",
			100: "#b2c2ff",
			light: "#8099ff",
			300: "#4e70fe",
			400: "#2047fd",
			500: "#0b2ee4",
			600: "#0423b2",
			dark: "#001980",
			800: "#000f4f",
			darker: "#00051f",
		},
	},
	typography: {
		fontFamily: primaryFont,
	},
});
