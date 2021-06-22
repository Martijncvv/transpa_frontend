import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductDetails, addVote } from "../../store/products/actions";
import { selectProductsDetails } from "../../store/products/selectors";

import ProductCard from "../../components/ProductCard";

export default function ProductPage() {
	const dispatch = useDispatch();

	const { id } = useParams();
	const productDetails = useSelector(selectProductsDetails);
	console.log("PRODUCT DATA", productDetails);

	const questionsData = productDetails.questions;
	const locations = productDetails.locations;

	useEffect(() => {
		dispatch(fetchProductDetails(id));
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
					{productDetails.relevantProduct.map((product) => (
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
	);
}
