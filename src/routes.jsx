import { useRoutes } from "react-router-dom";

import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Layout from "./layout";
import BasketPage from "./pages/basket";
import AllServies from "./pages/AllServies";
import ThankYouPage from "./pages/thank-you-page";

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
					element: <AllServies />,
				},
				{
					path: "/contact",
					element: <ContactPage />,
				},
				{
					path: "/basket",
					element: <BasketPage />,
				},
				{
					path: "/thank-you-page",
					element: <ThankYouPage />,
				},
			],
		},
	]);

	return routes;
};

export default Routes;
