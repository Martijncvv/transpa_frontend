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
			<div id="home-main-title">
				<p>Sometimes a product is more than just a product</p>
				<p>Inform, Educate, Inspire</p>
			</div>

			<div id="TranspaIntro">
				<div id="home-image">
					<img
						id="transpa-image"
						src="https://i.ibb.co/W0Jkpv8/Transpa-Sticker.jpg"
						alt="Transpa Logo"
					/>
				</div>
				<div id="home-introText">
					<h4>Transpa Product transparency platform</h4>
					<p>
						Connecting business and customer by communicating through the
						product.
					</p>

					<p>
						"Consumers are shifting their loyalty and trust from brands to
						products. Depending upon the strength of the brand, this shift could
						take place quickly or more slowly, but it seems inevitable,
						eventually."
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						aliquet eros vel neque tincidunt, in ullamcorper arcu pharetra. Cras
						at justo mattis lectus convallis elementum id id ante. Aenean
						pharetra nisl sapien, vitae viverra tortor elementum eu. Donec
						ullamcorper consectetur purus at commodo. Nunc nec dui tempus,
						auctor quam sit amet, sodales est. Suspendisse velit erat, dignissim
						vel molestie ut, maximus ac ex. elementum eu. Donec ullamcorper
						consectetur purus at commodo. Nunc nec dui tempus, auctor quam sit
						amet, sodales est. Suspendisse velit erat, dignissim vel molestie
						ut, maximus ac ex.
					</p>
					<p>
						Justo mattis lectus convallis elementum id id ante. Aenean pharetra
						nisl sapien, vitae viverra tortor elementum eu. Donec ullamcorper
						consectetur purus at commodo. Nunc nec dui tempus, auctor quam sit
						amet, sodales est. Suspendisse velit erat, dignissim vel molestie
						ut, maximus ac ex.
					</p>
				</div>
			</div>
			<div className="blockTitle">
				<h1>Transpa Advantages</h1>
			</div>
			<div id="transpa-advantages">
				<div id="transpa-advantages-left">
					<ul>
						<li>Detailed product information</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>Product improvements</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>Resale promotion</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a consectetur adipiscing elit
						</p>
						<li>External online cross-marketing</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>Blockchain technology</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>Certification</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a Mauris alesuada id lectus at luctus.
							Nulla lobortis nulla urna, id elementum sapien hendrerit a
						</p>
					</ul>
				</div>
				<div id="transpa-advantages-right">
					<ul>
						<li>Customer binding</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a Mauris malesuada id lectus at luctus.
							Nulla lobortis nulla urna, id elementum sapien hendrerit a
						</p>
						<li>Marketing</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>Internal cross-marketing</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>External offline cross-marketing</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
						<li>Anti-counterfeit</li>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							malesuada id lectus at luctus. Nulla lobortis nulla urna, id
							elementum sapien hendrerit a
						</p>
					</ul>
				</div>
			</div>

			<div className="blockTitle productCards">
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
			<div id="footer"></div>
		</div>
	);
}
