import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../store/products/selectors";
import { fetchProduct } from "../../store/products/actions";

export default function ProductPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	const product = useSelector(selectProducts);

	useEffect(() => {
		dispatch(fetchProduct(id));
	}, []);

	console.log(product);

	return (
		<div>
			<div>
				<img src={product.mainProductImageURL} style={{ height: "300px" }} />
				<h2>{product.productName}</h2>
				<h3>{product.company.companyName}</h3>
				<h1 style={{ color: product.colour }}>Theme colour</h1>
				<h3>Product info</h3>
				<p>{product.detailedProductInfo}</p>
				<h3>Company info</h3>
				<p>{product.company.detailedCompanyInfo}</p>
				<iframe width="420" height="315" src={product.videoURL}></iframe>
				<h3>Relevant products</h3>
				<h3>Product feedback</h3>
				<h3>Sales locations</h3>
				<h3>Social media</h3>
				<p>{product.socialMediaURL}</p>
			</div>
			test
		</div>
	);
}
