import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";

import { fetchProducts } from "../../store/products/actions";
import { selectProductsData } from "../../store/products/selectors";

import "./home.css";

export default function Home() {
	const dispatch = useDispatch();
	const productData = useSelector(selectProductsData);
	const products = productData;

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div id="main">
			<h1>What is Transpa</h1>
			<div id="TranspaIntro">
				<div id="home-image">
					<img
						src="https://cdn2.iconfinder.com/data/icons/social-media-agency-malibu-vol-2/128/Transparency-512.png"
						alt="testimage"
					/>
				</div>
				<div id="home-introText">
					<p>
						Bacon ipsum dolor amet bacon spare ribs bresaola, doner t-bone
						fatback boudin beef ribs jowl shank brisket sirloin tongue capicola
						pork. Pork belly landjaeger hamburger, leberkas turducken prosciutto
						spare ribs ham hock capicola beef meatball pig picanha ball tip
						rump.
					</p>
				</div>
			</div>
			<h2>Products</h2>
			<div id="productCards">
				{products.map((product) => (
					<div class="productCard" key={product.id}>
						<ProductCard
							id={product.id}
							title={product.title}
							imageURL={product.mainProductImageURL}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
