import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./card/card.jsx"
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	const information = [
		{
			imagen: "https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4",
			title: "Continúa comprando",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
		},
		{
			imagen: "https://fastly.picsum.photos/id/357/3888/2592.jpg?hmac=322FsZ93_k9v7NNFeCTlqk_gobPP_1mYJIQwk7GxjMc",
			title: "Más artículos deco",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
		},
		{
			imagen: "https://fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8",
			title: "Sígue comprando",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
		},
		{
			imagen: "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
			title: "SUPER REBAJAS!",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

		},
		{
			imagen: "https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs",
			title: "Producto Cinco",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

		},
		{
			imagen: "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
			title: "Producto Seis",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

		},
		{
			imagen: "https://fastly.picsum.photos/id/146/5000/3333.jpg?hmac=xdlFnzoavokA3U-bzo35Vk4jTBKx8C9fqH5IuCPXj2U",
			title: "Producto Siete",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

		},
		{
			imagen: "https://fastly.picsum.photos/id/252/5000/3281.jpg?hmac=43dQtOHPvmpknnjz0R6jenAi-V9OW6J8sVKUTVOpAaU",
			title: "Producto Ocho",
			text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

		},

	]
	return (
		<div className="text-center wrapper">
			<NavBar />
			<div className="container body_container">
				<Jumbotron />
				<div className="d-flex flex-wrap my-3 card_container gap-5 justify-content-center mx-auto">
					{information.map((item) => (<Card title={item.title} text={item.text} imagen={item.imagen} />))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;