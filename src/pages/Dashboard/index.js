import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanyProducts } from "../../store/products/actions";
import { selectProductsData } from "../../store/products/selectors";
import ProductCard from "../../components/ProductCard";

export default function Dashboard() {
	const dispatch = useDispatch();

	const productData = useSelector(selectProductsData);
	const products = productData;

	console.log("Company products", products);
	useEffect(() => {
		dispatch(fetchCompanyProducts());
	}, [dispatch]);

	return (
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
				</div>
			))}
		</div>
	);
}
