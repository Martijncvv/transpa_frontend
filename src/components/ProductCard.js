import React from "react";
import { Link } from "react-router-dom";
import "./styling/ProductCard.css";

export default function ProductCard(props) {
	return (
		<div id="productCard">
			<img src={props.imageURL} alt={props.productName} />

			<div className="productCardBottom">
				<h2>{props.productName}</h2>
				<span style={{ color: props.colour || "rgb(77, 77, 77);" }}>
					____________
				</span>
				<p>{props.company}</p>
				<Link to={`/productDetails/${props.id}`}>
					<button className="productCardButton">DNA</button>
				</Link>
			</div>
		</div>
	);
}
