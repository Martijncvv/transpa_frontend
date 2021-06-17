import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../store/products/selectors";
import { fetchProduct } from "../../store/products/actions";

export default function ProductPage() {
	const dispatch = useDispatch();

	const product = useSelector(selectProducts);

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	return (
		<div>
			<h1>ProductPage</h1>
		</div>
	);
}
