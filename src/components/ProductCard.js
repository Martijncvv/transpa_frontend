import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../store/products/actions";

export default function ProductCard(props) {
	const dispatch = useDispatch();

	return (
		<div>
			<img
				src={props.imageURL}
				alt={props.title}
				style={{ height: props.imageHeight || "400px" }}
			/>
			<h1>{props.title}</h1>

			<Link to={`/productDetails/${props.id}`}>
				<button>DNA</button>
			</Link>
		</div>
	);
}
