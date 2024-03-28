import { NextUIProvider } from "@nextui-org/react";

import Routes from "./routes";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const App = () => {
	const navigate = useNavigate();
	return (
		<NextUIProvider navigate={navigate}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</NextUIProvider>
	);
};

export default App;
