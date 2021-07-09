import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductDetails, addVote } from "../../store/products/actions";
import { selectProductsDetails } from "../../store/products/selectors";

import ProductCard from "../../components/ProductCard";

import "./productPage.css";
import "./productPageMobile.css";

export default function ProductPage() {
	const dispatch = useDispatch();
	const [questionIdsAnswered, setQuestionIdsAnswered] = useState({});

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
		if (answerId) {
			dispatch(addVote(answerId));
			setQuestionIdsAnswered({ ...questionIdsAnswered, [questionId]: true });
			console.log("answerId", answerId);
		}
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
							<h3>Product Info</h3>
							<p>{productDetails.detailedProductInfo}</p>
							<h3>Company Info</h3>
							<p>{productDetails.company.detailedCompanyInfo}</p>

							<div id="product-images">
								{productDetails.productImages.map((image) => (
									<div key={image.id} className="product-image-div">
										<img
											className="product-image"
											src={image.productImageURL}
											alt={image.id}
										/>
									</div>
								))}
							</div>
							{videoURL && (
								<iframe className="product-page-video" src={videoURL}></iframe>
							)}
						</div>
						{productDetails.questions.length ? (
							<div id="product-page-feedback">
								<h3>Product Feedback</h3>
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
											) : questionData.answers.some((answerData) =>
													isNaN(answerData.answer)
											  ) ? (
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
											) : (
												<div>
													<div id="product-page-feedback-stars">
														<div>⭐</div>
														<div>⭐⭐⭐</div>
													</div>

													<input
														type="range"
														id="product-page-slider"
														min={Math.min(
															...questionData.answers.map(
																(answerData) => answerData.id
															)
														)}
														max={Math.max(
															...questionData.answers.map(
																(answerData) => answerData.id
															)
														)}
														onTouchEnd={({ target: { value } }) => {
															onVote(value, questionData.id);
														}}
														onMouseUp={({ target: { value } }) => {
															onVote(value, questionData.id);
														}}
														style={{
															backgroundColor: productDetails.colour,
														}}
													/>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						) : (
							""
						)}
						<div id="product-page-company-contact">
							<div>
								{" "}
								<h3>Shops</h3>
								<div id="product-page-sales-locations">
									{locations.map((location) => (
										<div
											key={location.id}
											className="product-page-locations-row"
										>
											<a
												className="location-link"
												href={
													"https://www.google.com/maps/search/" +
													location.zipcode
												}
												target="_blank"
											>
												{location.city} {location.zipcode}{" "}
												{location.streetNumber}
												<img
													className="location-maps-logo"
													src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/1200px-Google_Maps_icon_%282015-2020%29.svg.png"
												/>
											</a>
										</div>
									))}
								</div>
							</div>
							<div>
								{" "}
								<h3>Social Media</h3>
								<div id="social-media-div">
									<a
										id="social-media-link"
										href={productDetails.socialMediaURL}
										target="_blank"
									>
										<img
											className="social-media-logo"
											src="https://www.verfvanniveau.nl/wp-content/uploads/2019/08/logo-social-fb-facebook-icon.png"
										/>
									</a>
									<a
										id="social-media-link"
										href={productDetails.socialMediaURL}
										target="_blank"
									>
										<img
											className="social-media-logo"
											src="https://www.jaspersomsen.com/wp-spullies/uploads/2017/03/instagram-Logo-PNG-Transparent-Background-download.png"
										/>
									</a>
								</div>
							</div>
						</div>
						{productDetails.relevantProduct[0] && <h3>Relevant Products</h3>}
						<div id="product-page-relevant-products">
							{productDetails.relevantProduct.map((product) => (
								<div key={product.id} className="product-page-productCard">
									<ProductCard
										id={product.id}
										colour={product.colour}
										productName={product.productName}
										imageURL={product.mainProductImageURL}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
