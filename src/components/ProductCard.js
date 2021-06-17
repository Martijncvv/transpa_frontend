import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
	return (
		<div>
			<img src={props.imageURL} alt={props.title} style={{ height: "400px" }} />
			<h1>{props.title}</h1>

			<Link to={`/productDetails/${props.id}`}>
				<button>DNA</button>
			</Link>
		</div>
	);
}
