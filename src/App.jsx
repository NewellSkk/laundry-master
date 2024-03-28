import { NextUIProvider } from "@nextui-org/react";
import { CartCtxProvider } from "./contexts";
import Routes from "./routes";
import { useNavigate } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();
	return (
		<CartCtxProvider>
			<NextUIProvider navigate={navigate}>
				<Routes />
			</NextUIProvider>
		</CartCtxProvider>
	);
};

export default App;
