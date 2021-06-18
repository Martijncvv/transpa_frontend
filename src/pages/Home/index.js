import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";

import { fetchProducts } from "../../store/products/actions";
import { selectProductsData } from "../../store/products/selectors";

export default function Home() {
	const dispatch = useDispatch();
	const productData = useSelector(selectProductsData);
	const products = productData.products;

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div>
			<div>
				<h1>Home</h1>
				<h2>What is Transpa</h2>
				<img
					src="https://cdn2.iconfinder.com/data/icons/social-media-agency-malibu-vol-2/128/Transparency-512.png"
					alt="testimage"
				/>
				<p>
					Bacon ipsum dolor amet bacon spare ribs bresaola, doner t-bone fatback
					boudin beef ribs jowl shank brisket sirloin tongue capicola pork. Pork
					belly landjaeger hamburger, leberkas turducken prosciutto spare ribs
					ham hock capicola beef meatball pig picanha ball tip rump.
				</p>
			</div>

			<div>
				<h2>Products</h2>
				{products.map((product) => (
					<div key={product.id}>
						<ProductCard
							imageHeight="200px"
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
