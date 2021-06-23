import React from "react";
import { Link } from "react-router-dom";
import "./styling/ProductCard.css";

export default function ProductCard(props) {
	return (
		<div id="productCard">
			<img src={props.imageURL} alt={props.title} />

			<h1>{props.title}</h1>

			<Link to={`/productDetails/${props.id}`}>
				<button>DNA</button>
			</Link>
		</div>
	);
}
