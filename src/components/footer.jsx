import { Container, Stack, styled, Typography } from "@mui/material";

import Logo from "../assets/logo.png";

const PrincipleImageContainer = styled("div")(({ theme }) => ({
	width: "100%",
	minHeight: 450,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
	flexDirection: "column",
	background: "#6785FF",
	padding: "2rem",
	marginTop: "2rem",
	[theme.breakpoints.down("md")]: {
		width: "80%",
	},
}));

const PrincipleImageContainerTwo = styled("div")(() => ({
	// height: 250,
	width: 250,
	height: "fit-content",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
	flexDirection: "column",
	padding: "2rem",
}));

const ImageContainer = styled("img")(() => ({
	height: "100%",
	width: "100%",
	objectFit: "cover",
}));

function Footer() {
	return (
		<PrincipleImageContainer>
			{/* <Typography variant="h4" color='inherit'>Let's Grow</Typography> */}
			<Typography
				variant="h4"
				color="white"
				marginTop={2}
				marginBottom={2}
				textAlign="center"
			>
				Bright Bubbles
			</Typography>

			<Container>
				<Stack
					direction={{ xs: "column", lg: "row" }}
					spacing={{ xs: 5, lg: 10 }}
					marginTop={4}
					marginBottom={5}
				>
					<Stack
						width={{ xs: "100%", lg: "30%" }}
						alignItems="center"
					>
						<PrincipleImageContainerTwo>
							<ImageContainer src={Logo} alt="" />
						</PrincipleImageContainerTwo>
						<Typography
							variant="body1"
							color="white"
							textAlign={{ xs: "center", lg: "left" }}
						>
							We take care about cleanness of your cloth
						</Typography>
					</Stack>

					<Stack>
						<Typography variant="h6" color="white">
							Our Services
						</Typography>
						<Typography variant="body1" color="white">
							- Dry Cleaning
						</Typography>
						<Typography variant="body1" color="white">
							- Ironing Services
						</Typography>
						<Typography variant="body1" color="white">
							- Laundry Service
						</Typography>
					</Stack>

					<Stack>
						<Typography variant="h6" color="white">
							Help & Support
						</Typography>
						<Typography variant="body1" color="white">
							FAQs
						</Typography>
						<Typography variant="body1" color="white">
							Contacts
						</Typography>
					</Stack>

					<Stack>
						<Typography variant="h6" color="white">
							Legal
						</Typography>
						<Typography variant="body1" color="white">
							Terms & Conditions
						</Typography>
						<Typography variant="body1" color="white">
							Privacy Policy
						</Typography>
					</Stack>
				</Stack>
			</Container>

			<Typography variant="body1" color="white" textAlign="center">
				All Rights Reserved | Copyright 2024 © Bright Bubbles
			</Typography>
		</PrincipleImageContainer>
	);
}

export default Footer;
