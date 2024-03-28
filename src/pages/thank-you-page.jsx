import { Typography } from "@mui/material";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router";

const ThankYouPage = () => {
	const [showConfetti, setShowConfetti] = useState(false);
	const navigate = useNavigate();

	const handleShowConfetti = () => {
		setShowConfetti(!showConfetti);
		setTimeout(() => {
			navigate("/");
			console.log("should navigate");
		}, 5000);
	};

	return (
		<main className="container my-8 h-full text-center min-h-[50vh] flex flex-col items-center justify-center border rounded-3xl shadow-lg">
			<Typography variant="h3" className="text-primary">
				Clean Clothes, A Hapy Family
			</Typography>
			<Typography variant="subtitle2">
				We have placed your order in our system. We will get back to you
				shortly
			</Typography>
			<Typography variant="subtitle2">
				The automated process starts as soon as your clothes go into the
				machine. The outcome is gleaming clothes!!
			</Typography>
			<Button
				variant="flat"
				color="secondary"
				className="px-10 mt-6"
				radius="full"
				onClick={handleShowConfetti}
			>
				Continue
			</Button>
			{showConfetti && <ConfettiExplosion duration={8000} />}
		</main>
	);
};

export default ThankYouPage;
