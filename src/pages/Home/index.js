import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";

import { fetchProducts } from "../../store/products/actions";
import {
	selectProductsData,
	selectIsFetching,
} from "../../store/products/selectors";

import "./home.css";

export default function Home() {
	const dispatch = useDispatch();
	const products = useSelector(selectProductsData);
	const isFetching = useSelector(selectIsFetching);
	console.log(products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div id="main">
			<div className="blockTitle">
				<h1>What is Transpa</h1>
			</div>

			<div id="TranspaIntro">
				<div id="home-image">
					<img
						src="https://cdn2.iconfinder.com/data/icons/social-media-agency-malibu-vol-2/128/Transparency-512.png"
						alt="testimage"
					/>
				</div>
				<div id="home-introText">
					<h4>Bacon ipsum </h4>
					<p>
						Bacon ipsum dolor amet bacon spare ribs bresaola, doner t-bone
						fatback boudin beef ribs jowl shank brisket sirloin tongue capicola
						pork. Pork belly landjaeger hamburger, leberkas turducken prosciutto
						spare ribs ham hock capicola beef meatball pig picanha ball tip
						rump.
					</p>
					<h4>Crypto ipsum </h4>
					<p>
						Basic Attention Token stuck lots of node behind some bug bounty!
						ERC721 token standard did many reinvested technical analysis in many
						fish, however, IPO allowed few genesis block during many custodial.
						Blockchain launched a volume at many ledger. IOTA thought lots of
						considerable bear trap because Waves thinking a peer-to-peer
						network, or Dogecoin based on some algo-traded permissioned ledger
						because Satoshi Nakamoto waited some dolphin!
					</p>
				</div>
			</div>
			<div className="blockTitle">
				<h1>Products</h1>
			</div>
			{!isFetching && (
				<div>
					<div id="productCards">
						{products.map((product) => (
							<div className="productCard" key={product.id}>
								<ProductCard
									id={product.id}
									colour={product.colour}
									company={product.company.companyName}
									productName={product.productName}
									imageURL={product.mainProductImageURL}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
