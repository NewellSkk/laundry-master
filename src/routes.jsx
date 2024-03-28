import { useRoutes } from "react-router-dom";
import Services from "./pages/Services";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Layout from "./layout";
import BasketPage from "./pages/basket";

const Routes = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "/about",
					element: <AboutPage />,
				},
				{
					path: "/services",
					element: <Services />,
				},
				{
					path: "/contact",
					element: <ContactPage />,
				},
				{
					path: "/basket",
					element: <BasketPage />,
				},
			],
		},
	]);

	return routes;
};

export default Routes;
