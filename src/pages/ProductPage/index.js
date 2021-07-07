import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductDetails, addVote } from "../../store/products/actions";
import { selectProductsDetails } from "../../store/products/selectors";

import ProductCard from "../../components/ProductCard";

import "./productPage.css";

export default function ProductPage() {
	const dispatch = useDispatch();
	const [questionIdsAnswered, setQuestionIdsAnswered] = useState({});
	console.log("questionIdsAnswered", questionIdsAnswered);

	const { id } = useParams();
	const productDetails = useSelector(selectProductsDetails);
	console.log("PRODUCT DATA", productDetails);

	const questionsData = productDetails.questions;
	const locations = productDetails.locations;
	const videoURL = productDetails.videoURL?.replace("watch?v=", "embed/");

	useEffect(() => {
		dispatch(fetchProductDetails(id));
	}, [dispatch, useParams(), questionIdsAnswered]);

	function onVote(answerId, questionId) {
		setQuestionIdsAnswered({ ...questionIdsAnswered, [questionId]: true });

		dispatch(addVote(answerId));
		console.log(" answerId: ", answerId);

		console.log("questionIdsAnswered", questionIdsAnswered);
	}

	return (
		<div>
			{productDetails.company && (
				<div
					id="main-product-page"
					style={{ backgroundColor: productDetails.colour }}
				>
					<div id="product-page-product-card">
						{" "}
						<div id="product-page-top">
							<img
								id="product-page-main-image"
								src={productDetails.mainProductImageURL}
								alt={productDetails.productName}
							/>
							<h2>{productDetails.productName}</h2>
							<h3>{productDetails.company.companyName}</h3>
						</div>
						<div id="product-page-product-details">
							<h3>Product info</h3>
							<p>{productDetails.detailedProductInfo}</p>
							<h3>Company info</h3>
							<p>{productDetails.company.detailedCompanyInfo}</p>

							<h3>Company Images</h3>
							<div id="product-images">
								{productDetails.productImages.map((image) => (
									<div key={image.id} className="product-image">
										<img src={image.productImageURL} alt={image.id} />
									</div>
								))}
							</div>
							{videoURL && (
								<iframe width="420" height="315" src={videoURL}></iframe>
							)}
						</div>
						{productDetails.questions.length ? (
							<div id="product-page-feedback">
								<h3>Product feedback</h3>
								<div id="product-page-questions">
									{questionsData.map((questionData) => (
										<div key={questionData.id}>
											<p className="productPage-question">
												{questionData.question}
											</p>

											{questionIdsAnswered[questionData.id] ? (
												<div>
													<p>Thank you for your feedback</p>
												</div>
											) : (
												<form>
													{questionData.answers.map((answer) => (
														<div key={answer.id}>
															<label className="container">
																<p>{answer.answer}</p>
																<input
																	type="radio"
																	name={questionData.id}
																	id={answer.id}
																	value={answer.id}
																	onChange={(event) =>
																		onVote(answer.id, questionData.id)
																	}
																></input>
																<span
																	className="radioCheckmark"
																	style={{
																		backgroundColor: productDetails.colour,
																	}}
																></span>
															</label>
														</div>
													))}
												</form>
											)}
										</div>
									))}
								</div>
							</div>
						) : (
							""
						)}
						<h3>Sales locations</h3>
						{locations.map((location) => (
							<div key={location.id}>
								<p>
									- {location.zipcode} {location.streetNumber}
								</p>
							</div>
						))}
						<h3>Relevant products</h3>
						<div id="product-page-relevant-products">
							{productDetails.relevantProduct.map((product) => (
								<div key={product.id}>
									<ProductCard
										id={product.id}
										colour={product.colour}
										productName={product.productName}
										imageURL={product.mainProductImageURL}
									/>
								</div>
							))}
						</div>
						<div id="social-media-div">
							<h3>Social media</h3>
							<a href={productDetails.socialMediaURL} target="_blank">
								<img
									id="fb-logo"
									src="https://www.verfvanniveau.nl/wp-content/uploads/2019/08/logo-social-fb-facebook-icon.png"
								/>
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
