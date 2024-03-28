import { Button, Image, Link } from "@nextui-org/react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="py-2 shadow-lg bg-primary-200">
			<section className="container flex justify-between items-center">
				<Image src="/logo.png" className="w-[100px]" />
				<section className="flex gap-4 items-center">
					{navLinks.map((each) => (
						<NavLink
							key={each.path}
							className={({ isActive }) =>
								clsx(
									"font-medium text-white",
									isActive && "!underline"
								)
							}
							to={each.path}
							end
						>
							{each.label}
						</NavLink>
					))}
				</section>
				<Button
					color="secondary"
					radius="full"
					as={Link}
					href="/basket"
				>
					Create Your Basket
				</Button>
			</section>
		</nav>
	);
};

export default Navbar;

const navLinks = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Services",
		path: "/services",
	},
	{
		label: "Contact",
		path: "/contact",
	},
];
