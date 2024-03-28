/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";
import TextField from "../components/form/textField";
import TextAreaInputField from "../components/form/areaField";

import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from "@nextui-org/react";
import { products } from "../components/products";
import { Icon } from "@iconify/react";
import { useState } from "react";
import PhoneField from "../components/form/phoneField";

const BasketPage = () => {
	const methods = useForm();

	const [basket, setBasket] = useState([]);
	const [proceedToCheckout, setProceedToCheckout] = useState(false);
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

	const totalPrice = () => {
		const value = basket.reduce((acc, item) => {
			return (acc += Number(item.unitPrice) * Number(item.count));
		}, 0);

		return value;
	};

	const totalLength = () => {
		const value = basket.reduce((acc, item) => {
			return (acc += Number(item.count));
		}, 0);

		return value;
	};

	const { handleSubmit } = methods;

	const handleCheckout = (data) => {
		console.log({ ...data, basket, price: totalPrice() });
	};

	return (
		<main className="container ">
			{
				<>
					<section className="grid mt-6 grid-cols-2 gap-4">
						{/*Items  */}

						{products.map((item, idx) => (
							<ItemCard
								name={item.name}
								img={item.img}
								price={item.price}
								key={idx}
								add={add}
								reduce={reduce}
							/>
						))}
					</section>
				</>
			}
			{basket.length > 0 && (
				<TotalCard
					setProceedToCheckout={setProceedToCheckout}
					basket={basket}
					remove={remove}
					totalLength={totalLength}
					totalPrice={totalPrice}
				/>
			)}
			{/* Checkout Form */}
			{proceedToCheckout && basket.length > 0 && (
				<>
					<Card className="my-4">
						<CardHeader>
							<h6 className="font-medium text-primary">
								Checkout Form
							</h6>
						</CardHeader>
						<CardBody>
							<FormProvider {...methods}>
								<form onSubmit={handleSubmit(handleCheckout)}>
									<p className="font-medium text-sm mt-3">
										Personal Details
									</p>
									<section className="grid items-end grid-cols-2 gap-3">
										<TextField
											name="name"
											label="Name"
											size="sm"
										/>
										<PhoneField
											name="Phone"
											label="Phone Number"
										/>
										<TextField
											name="email"
											label="Email"
											size="sm"
										/>
									</section>
									<p className="font-medium text-sm mt-3">
										Pick Up Address
									</p>
									<section className="grid grid-cols-2 gap-3">
										<TextField
											name="street"
											label="Street"
											size="sm"
										/>
										<TextField
											name="building"
											label="Building"
											size="sm"
										/>
									</section>
									<TextAreaInputField
										name="note"
										label="Note"
									/>
									<Button
										color="secondary"
										radius="full"
										className="px-8"
										type="submit"
									>
										Submit
									</Button>
								</form>
							</FormProvider>
						</CardBody>
					</Card>
				</>
			)}
		</main>
	);
};

export default BasketPage;

const TotalCard = (props) => {
	return (
		<Card className="my-5">
			<CardHeader>
				<h4 className="font-medium text-lg underline">
					Basket Content
				</h4>
			</CardHeader>
			<CardBody>
				{props.basket.map((item) => (
					<section
						key={item.name}
						className="flex items-center justify-between mb-1"
					>
						<b>
							{item.count} {item.name} @ KES {item.unitPrice}
						</b>
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							radius="full"
							size="sm"
							onClick={() => props.remove(item.name)}
						>
							<Icon icon="ic:round-close" />
						</Button>
					</section>
				))}
			</CardBody>
			<CardFooter>
				<section className="flex justify-between w-full items-end">
					<section>
						<b>Total </b>
						<p className="text-sm font-medium">
							Price : KES {props.totalPrice()}
						</p>
						<p className="text-sm font-medium">
							Count : {props.totalLength()} items
						</p>
					</section>
					<Button
						onClick={() => props.setProceedToCheckout(true)}
						radius="full"
						color="secondary"
						variant="ghost"
					>
						Proceed To Checkout
					</Button>
				</section>
			</CardFooter>
		</Card>
	);
};

const ItemCard = (item) => {
	return (
		<Card>
			<CardBody className="">
				<section className="flex items-center justify-between gap-4">
					<section className="flex gap-2">
						<Image
							shadow="sm"
							radius="lg"
							alt={item.name}
							className="w-[40px] object-cover h-[40px]"
							src={item.img}
						/>
						<section className="flex flex-col ">
							<b>{item.name}</b>
							<b className="text-default-500">
								KES. {item.price}
							</b>
						</section>
					</section>
					<section className="justify-end">
						<p>Total</p>
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							radius="full"
							size="sm"
							onClick={() => item.reduce(item.name)}
						>
							<Icon icon="ic:round-minus" />
						</Button>
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							radius="full"
							size="sm"
							onClick={() => item.add(item)}
						>
							<Icon icon="ic:round-add" />
						</Button>
					</section>
				</section>
			</CardBody>
		</Card>
	);
};
