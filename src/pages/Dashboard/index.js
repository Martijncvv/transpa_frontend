import React, { useEffect, useState, PureComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bar } from "react-chartjs-2";

import {
	fetchCompanyProducts,
	deleteProduct,
} from "../../store/products/actions";
import {
	selectProductsData,
	selectIsFetching,
} from "../../store/products/selectors";
import ProductCard from "../../components/ProductCard";

import "./Dashboard.css";

const QRCode = require("qrcode.react");

export default function Dashboard() {
	const dispatch = useDispatch();
	const [qrLink, setQrLink] = useState("");

	const isFetching = useSelector(selectIsFetching);
	const products = useSelector(selectProductsData);

	console.log("Company product", products);

	useEffect(() => {
		dispatch(fetchCompanyProducts());
	}, [dispatch]);

	function deleteProductButton(id) {
		dispatch(deleteProduct(id));
	}

	function setQrCodeLink(productId) {
		console.log(productId);
		setQrLink(`http://localhost:3000/productDetails/${productId}`);
		// setQrLink(
		// 	`https://transpa-products.herokuapp.com/productDetails/${productId}`
		// );
	}

	const feedbackData = [];

	products.map((product) => {
		product.questions?.map((questionData) => {
			// feedbackData[questionData.id] = {
			feedbackData.push({
				question: questionData.question,
				product: product.productName,
				labels: [],
				datasets: [
					{
						label: "# of Votes",
						data: [],
						backgroundColor: [
							"rgba(255, 99, 132, 0.2)",
							"rgba(54, 162, 235, 0.2)",
							"rgba(255, 206, 86, 0.2)",
							"rgba(75, 192, 192, 0.2)",
							"rgba(153, 102, 255, 0.2)",
							"rgba(255, 159, 64, 0.2)",
						],
						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
						],
						borderWidth: 1,
					},
				],
			});
			questionData.answers.map((answerData) => {
				feedbackData[feedbackData.length - 1].labels.push(answerData.answer);
				feedbackData[feedbackData.length - 1].datasets[0].data.push(
					answerData.voteCount
				);
			});
		});
	});

	// <Bar data={data} options={options} />;
	console.log("feedbackData", feedbackData);
	const data = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "# of Votes",
				data: [1, 1, 4],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<div>
			{!isFetching && (
				<div id="main-dashboard">
					<h1>Dashboard</h1>
					<div id="dashboard-products">
						{products.map((product) => (
							<div key={product.id} className="dashboard-product-card">
								<button
									className="dashboard-product-card-button"
									onClick={() => deleteProductButton(product.id)}
								>
									X
								</button>
								<ProductCard
									imageHeight="200px"
									colour={product.colour}
									id={product.id}
									productName={product.productName}
									imageURL={product.mainProductImageURL}
								/>
							</div>
						))}
					</div>

					<h1>Product feedback</h1>
					<div id="dashboard-feedback">
						{feedbackData?.map((questionData, index) => (
							<div key={index} className="feedback-column">
								<h2>{questionData.product}</h2>
								<p>{questionData.question}</p>
								<Bar data={questionData} options={options} />
							</div>
						))}
					</div>

					<div id="dashboard-qrcodes">
						<h2>QR-Codes</h2>
						<div id="dashboard-qrcode-nav">
							{products.map((product) => (
								<div key={product.id}>
									<button
										className="dashboard-qrcode-nav-button"
										onClick={() => setQrCodeLink(product.id)}
									>
										{product.productName}
									</button>
								</div>
							))}{" "}
						</div>

						<div>
							<img
								id="dashboard-transpa-image"
								src="https://i.ibb.co/W0Jkpv8/Transpa-Sticker.jpg"
								alt="Transpa Logo"
							/>
							<div id="dashboard-product-qr-code">
								<QRCode value={qrLink} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
