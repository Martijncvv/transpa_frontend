import React, { useEffect, useState, PureComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

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
	}
	const feedbackData = [];
	let dataPoint = {};
	products.map((product) => {
		product.questions.map((questionData) => {
			dataPoint = {};
			dataPoint = {
				question: questionData.question,
			};
			questionData.answers.map((answerData) => {
				dataPoint[answerData.answer] = answerData.voteCount;
			});
		});
		feedbackData.push(dataPoint);
	});
	console.log("feedbackData", feedbackData);

	const data = [
		{
			question: "Page A",
			a: 0,
			b: 3,
			c: 0,
			d: 2,
		},
		{
			question: "Page B",
			a: 0,
			b: 1,
			c: 2,
			d: 0,
		},
	];

	return (
		<div>
			<div>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="question" fill="#8884d8" />
					<Bar dataKey="a" fill="#FFca9d" />
					<Bar dataKey="b" fill="#82FF9d" />
					<Bar dataKey="c" fill="#82caFF" />
					<Bar dataKey="d" fill="#FFcaFF" />
				</BarChart>
			</div>

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
					<h2>Feedback</h2>

					<div id="dashboard-feedback">
						{products?.map((product) => (
							<div key={product.id} className="feedback-column">
								{product.questions?.length ? (
									<>
										<h2>{product.productName}</h2>
										{product.questions?.map((questionData) => (
											<div key={questionData.id}>
												<h3>{questionData.question}</h3>

												{questionData.answers?.map((answerData) => (
													<div key={answerData.id}>
														<p>
															{answerData.answer} Votes: {answerData.voteCount}
														</p>
													</div>
												))}
											</div>
										))}
									</>
								) : (
									""
								)}
							</div>
						))}
					</div>

					<div>
						<p>QR-Codes</p>
						{products.map((product) => (
							<div key={product.id}>
								<button onClick={() => setQrCodeLink(product.id)}>
									{product.productName}
								</button>
							</div>
						))}
						<br />
						<QRCode value={qrLink} />
					</div>
				</div>
			)}
		</div>
	);
}
