import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchProductDetails } from "../../store/products/actions";
import { selectProductsData } from "../../store/products/selectors";

import ProductCard from "../../components/ProductCard";

import { fetchRelevantProducts } from "../../store/relevantProducts/actions";
import { selectRelevantProducts } from "../../store/relevantProducts/selectors";

import { selectFetchingState } from "../../store/appStates/selectors";

export default function ProductPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	const productData = useSelector(selectProductsData);
	const productDetails = productData.productDetails;

	const relevantProducts = productData.productDetails.relevantProduct;
	const questionsData = productData.productDetails.questions;
	const locations = productData.productDetails.locations;
	// const fetchingState = useSelector(selectFetchingState);
	// const relevantProducts = useSelector(selectRelevantProducts);

	console.log("productData", productData);
	// console.log("relevantProducts", relevantProducts);
	console.log("questions", questionsData);
	// console.log("locations", locations);

	useEffect(() => {
		dispatch(fetchProductDetails(id));
		// dispatch(fetchRelevantProducts(id));
	}, [dispatch, useParams()]);

	return (
		<div>
			{!productData.isFetching && productDetails.company && (
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
						<div>
							<p>{questionData.question}</p>
							<form>
								{questionData.answers.map((answer) => (
									<>
										<p>{answer.answer}</p>
										<input
											type="radio"
											id={answer.id}
											value={answer.id}
										></input>
									</>
								))}
							</form>
						</div>
					))}

					{/* <input type="radio" id={answer.id} value={answer.id} > */}
					{/* <label for={answer.id}>{answer.answer}</label> */}

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
					{relevantProducts.map((product) => (
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
			)}
		</div>
		// 	test
	);
}
