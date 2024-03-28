import { useState } from "react";
import Product from "../components/Product";
import Basket from "../components/Basket";
import { products } from "../components/products";

function Services() {
	let [basket, setBasket] = useState([]);

	let add = (x) => {
		let ind = basket.findIndex((obj) => obj.name === x.name);
		if (ind === -1) {
			const updatedBasket = [
				...basket,
				{ name: x.name, img: x.img, count: 1, unitPrice: x.price },
			];
			setBasket(updatedBasket);
		} else {
			const updatedBasket = [...basket];
			updatedBasket[ind].count += 1;
			setBasket(updatedBasket);
		}
	};

	let reduce = (name) => {
		let ind = basket.findIndex((obj) => obj.name === name);
		let updatedBasket = [...basket];
		if (updatedBasket[ind].count === 1) {
			remove(name);
		} else {
			updatedBasket[ind].count -= 1;
			setBasket(updatedBasket);
		}
	};

	let remove = (name) => {
		let ind = basket.findIndex((obj) => obj.name === name);
		let updatedBasket = [...basket];
		updatedBasket.splice(ind, 1);
		setBasket(updatedBasket);
	};

	let prods = products.map((x) => {
		return (
			<Product
				key={x.name}
				name={x.name}
				price={x.price}
				img={x.img}
				handleAdd={() => add(x)}
			/>
		);
	});

	return (
		<main className=" container ">
			<section className="grid grid-cols-2 gap-6">
				<section className="">
					<h2 className="font-semibold text-primary">SERVICES</h2>
					{prods}
				</section>
				<section className="">
					<h2>Basket</h2>
					<Basket
						items={basket}
						handleRemove={remove}
						handleAdd={add}
						handleReduce={reduce}
					/>
				</section>
			</section>
		</main>
	);
}

export default Services;
