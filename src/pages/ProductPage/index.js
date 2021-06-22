import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchProductDetails, addVote } from "../../store/products/actions";
import { selectProductsDetails } from "../../store/products/selectors";

import ProductCard from "../../components/ProductCard";

import { fetchRelevantProducts } from "../../store/relevantProducts/actions";
import { selectRelevantProducts } from "../../store/relevantProducts/selectors";

import { selectFetchingState } from "../../store/appStates/selectors";

export default function ProductPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	const productDetails = useSelector(selectProductsDetails);
	console.log("PRODUCT DATA", productDetails);
	// const relevantProducts = productData.productDetails.relevantProduct;
	const questionsData = productDetails.questions;
	const locations = productDetails.locations;
	// const fetchingState = useSelector(selectFetchingState);
	// const relevantProducts = useSelector(selectRelevantProducts);

	// console.log("relevantProducts", relevantProducts);
	// console.log("questions", questionsData);
	// console.log("locations", locations);

	useEffect(() => {
		dispatch(fetchProductDetails(id));
		// dispatch(fetchRelevantProducts(id));
	}, [dispatch, useParams()]);

	function onVote(answerId) {
		dispatch(addVote(answerId));
		console.log(" answerId: ", answerId);
	}

	return (
		<div>
			{productDetails.company && (
				<div>
					<img
						src={productDetails.mainProductImageURL}
						alt={productDetails.productName}
						style={{ height: "300px" }}
					/>
					<h2>{productDetails.productName}</h2>
					<h3>{productDetails.company.companyName}</h3>
					<h1 style={{ color: productDetails.colour }}>Theme colour</h1>
					<h3>Product info</h3>
					<p>{productDetails.detailedProductInfo}</p>
					<h3>Company info</h3>
					<p>{productDetails.company.detailedCompanyInfo}</p>
					<p>{productDetails.videoURL}</p>

					<h3>Product feedback</h3>

					{questionsData.map((questionData) => (
						<div key={questionData.id}>
							<p>{questionData.question}</p>
							<form>
								{questionData.answers.map((answer) => (
									<div key={answer.id}>
										<p>{answer.answer}</p>
										<input
											type="radio"
											name={questionData.id}
											id={answer.id}
											value={answer.id}
											onChange={(event) => onVote(answer.id)}
										></input>
									</div>
								))}
							</form>
						</div>
					))}

					<h3>Sales locations</h3>
					{locations.map((location) => (
						<div key={location.id}>
							<p>
								- {location.zipcode} {location.streetNumber}
							</p>
						</div>
					))}
					<h3>Social media</h3>
					<p>{productDetails.socialMediaURL}</p>
					<h3>Relevant products</h3>
					{/* {relevantProducts.map((product) => (
						<div key={product.id}>
							<ProductCard
								imageHeight="200px"
								id={product.id}
								title={product.title}
								imageURL={product.mainProductImageURL}
							/>
						</div>
					))} */}
				</div>
			)}
		</div>
		// 	test
	);
}
