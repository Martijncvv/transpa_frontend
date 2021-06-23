import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchCompanyProducts,
	deleteProduct,
} from "../../store/products/actions";
import {
	selectProductsData,
	selectIsFetching,
} from "../../store/products/selectors";
import ProductCard from "../../components/ProductCard";

const QRCode = require("qrcode.react");

export default function Dashboard() {
	const dispatch = useDispatch();
	const [qrLink, setQrLink] = useState("");

	const isFetching = useSelector(selectIsFetching);
	const products = useSelector(selectProductsData);
	// const product = products[0];

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

	return (
		<div>
			{!isFetching && (
				<div>
					<h1>Dashboard</h1>
					{products.map((product) => (
						<div key={product.id}>
							<ProductCard
								imageHeight="200px"
								id={product.id}
								title={product.title}
								imageURL={product.mainProductImageURL}
							/>
							<button onClick={() => deleteProductButton(product.id)}>
								Delete
							</button>
						</div>
					))}

					<h2>Feedback</h2>
					{products?.map((product) => (
						<div key={product.id}>
							<h2>{product.productName}</h2>
							{product.questions?.map((questionData) => (
								<div key={questionData.id}>
									<h3>{questionData.question}</h3>

									{questionData.answers?.map((answerData) => (
										<div key={answerData.id}>
											<p>
												Answer: {answerData.answer} Votes:{" "}
												{answerData.voteCount}
											</p>
										</div>
									))}
								</div>
							))}
						</div>
					))}
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
