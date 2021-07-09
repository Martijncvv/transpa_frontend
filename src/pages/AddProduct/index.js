import "./AddProduct.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchLocations } from "../../store/products/actions";
import { selectLocations } from "../../store/products/selectors";

import { addLocationPopupOn } from "../../store/appStates/actions";
import { selectAddLocationPopupState } from "../../store/appStates/selectors";

import {
	fetchCompanyProducts,
	addProducts,
} from "../../store/products/actions";
import { selectProductsData } from "../../store/products/selectors";

import PopupField from "../../components/PopupField";
import AddLocationField from "../../components/AddLocationField";

export default function AddProduct() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [productName, setProductName] = useState("");
	const [mainProductImageURL, setMainProductImageURL] = useState(
		"https://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png"
	);
	const [colour, setColour] = useState("");
	const [detailedProductInfo, setDetailedProductInfo] = useState("");
	const [videoURL, setVideoURL] = useState("");
	const [socialMediaURL, setSocialMediaURL] = useState("");

	const [salesLocationIds, setSalesLocationIds] = useState([]);
	const [relevantProductIds, setRelevantProductIds] = useState([]);

	const [productImage_1, setProductImage_1] = useState(
		"https://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png"
	);
	const [productImage_2, setProductImage_2] = useState(
		"https://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png"
	);
	const [productImage_3, setProductImage_3] = useState(
		"https://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png"
	);

	const [question_1, setQuestion_1] = useState("");
	const [question_2, setQuestion_2] = useState("");
	const [question_3, setQuestion_3] = useState("");
	const [answer_1a, setAnswer_1a] = useState("");
	const [answer_1b, setAnswer_1b] = useState("");
	const [answer_1c, setAnswer_1c] = useState("");
	const [answer_1d, setAnswer_1d] = useState("");

	const [answer_2a, setAnswer_2a] = useState("");
	const [answer_2b, setAnswer_2b] = useState("");
	const [answer_2c, setAnswer_2c] = useState("");
	const [answer_2d, setAnswer_2d] = useState("");

	const [answer_3a, setAnswer_3a] = useState("");
	const [answer_3b, setAnswer_3b] = useState("");
	const [answer_3c, setAnswer_3c] = useState("");
	const [answer_3d, setAnswer_3d] = useState("");

	const locations = useSelector(selectLocations);
	const addLocationPopup = useSelector(selectAddLocationPopupState);
	const companyProducts = useSelector(selectProductsData);

	useEffect(() => {
		dispatch(fetchLocations());
		dispatch(fetchCompanyProducts());
	}, []);

	function submitForm(event) {
		event.preventDefault();

		dispatch(
			addProducts(
				productName,
				mainProductImageURL,
				colour,
				detailedProductInfo,
				videoURL,
				socialMediaURL,

				salesLocationIds,
				relevantProductIds,

				productImage_1,
				productImage_2,
				productImage_3,

				question_1,
				question_2,
				question_3,

				answer_1a,
				answer_1b,
				answer_1c,
				answer_1d,
				answer_2a,
				answer_2b,
				answer_2c,
				answer_2d,
				answer_3a,
				answer_3b,
				answer_3c,
				answer_3d
			)
		);

		history.push("/dashboard");
	}

	const addLocations = (locationId) => {
		if (salesLocationIds.includes(locationId)) {
			const newSalesLocationIds = salesLocationIds.filter(
				(item) => item !== locationId
			);

			setSalesLocationIds([...newSalesLocationIds]);
		} else {
			setSalesLocationIds((salesLocationIds) => [
				...salesLocationIds,
				locationId,
			]);
		}
		console.log("SalesLocationIds", salesLocationIds);
	};

	const addRelevantProduct = (productId) => {
		if (relevantProductIds.includes(productId)) {
			const newRelevantProductIds = relevantProductIds.filter(
				(item) => item !== productId
			);
			setRelevantProductIds([...newRelevantProductIds]);
		} else {
			setRelevantProductIds((relevantProductIds) => [
				...relevantProductIds,
				productId,
			]);
		}

		console.log("RelevantProducts", relevantProductIds);
	};

	const addLocationPopupToggle = () => {
		dispatch(addLocationPopupOn());
	};

	return (
		<div id="main-add-product">
			<div>
				{addLocationPopup && <PopupField content={<AddLocationField />} />}
			</div>
			<h1>Add Product</h1>

			<form>
				<div id="add-product-top">
					<div id="add-product-top-left">
						<div className="addProduct-form-item">
							<label htmlFor="productName ">Product name</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="mainProductImage">Main product image URL</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="productImage_1">Product image URL 1</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="productImage_2">Product image URL 2</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="productImage_3">Product image URL 3</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="colour">Colour</label>
						</div>

						<div className="addProduct-form-item">
							<label htmlFor="videoURL">Product video URL</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="socialMediaURL">Social media URL</label>
						</div>
						<div className="addProduct-form-item">
							<label htmlFor="detailedProductInfo ">
								Detailed product info
							</label>
						</div>
					</div>

					<div>
						<div className="addProduct-form-item">
							<input
								type="text"
								id="productName"
								onChange={(event) => setProductName(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<input
								type="url"
								id="mainProductImage"
								onChange={(event) => setMainProductImageURL(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<input
								type="url"
								id="productImage_1"
								onChange={(event) => setProductImage_1(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<input
								type="url"
								id="productImage_2"
								onChange={(event) => setProductImage_2(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<input
								type="url"
								id="productImage_3"
								onChange={(event) => setProductImage_3(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<input
								type="color"
								id="colour"
								onChange={(event) => setColour(event.target.value)}
							></input>
						</div>

						<div className="addProduct-form-item">
							<input
								type="url"
								id="videoURL"
								onChange={(event) => setVideoURL(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<input
								type="url"
								id="socialMediaURL"
								onChange={(event) => setSocialMediaURL(event.target.value)}
							></input>
						</div>
						<div className="addProduct-form-item">
							<textarea
								type="text"
								id="detailedProductInfo"
								onChange={(event) => setDetailedProductInfo(event.target.value)}
							/>
						</div>
					</div>

					<div id="add-product-top-right">
						<div className="imagepreview">
							<label className="imagepreview-label">Preview main image</label>
							<img alt="preview image" src={mainProductImageURL} />
						</div>
						<div className="imagepreview">
							<label className="imagepreview-label">Preview image 1</label>
							<img alt="preview image" src={productImage_1} />
						</div>
						<div className="imagepreview">
							<label className="imagepreview-label">Preview image 2</label>
							<img alt="preview image" src={productImage_2} />
						</div>
						<div className="imagepreview">
							<label className="imagepreview-label">Preview image 3</label>
							<img alt="preview image" src={productImage_3} />
						</div>
					</div>
				</div>

				<div id="add-product-middle">
					<div>
						<h2>Locations</h2>
						<div className="add-product-locations-relevants">
							{locations.map((location) => (
								<div key={location.id}>
									<label className="container">
										{location.city} {location.zipcode} {location.streetNumber}
										<input
											type="checkbox"
											name="locationId"
											id={location.id}
											value={location.id}
											onClick={() => addLocations(location.id)}
										></input>
										<span className="checkmark"></span>
									</label>
								</div>
							))}
						</div>

						<button
							className="addProductButton"
							type="button"
							onClick={addLocationPopupToggle}
						>
							Add location
						</button>
					</div>

					<div>
						<h2>Relevant products</h2>
						<div className="add-product-locations-relevants">
							{companyProducts.map((product) => (
								<div key={product.id}>
									<label className="container">
										{product.productName}
										<input
											type="checkbox"
											name="relevantProduct"
											id={product.id}
											value={product.productName}
											onClick={() => addRelevantProduct(product.id)}
										></input>
										<span className="checkmark"></span>
									</label>
								</div>
							))}
						</div>
					</div>
				</div>

				<div id="add-product-bottom">
					<h2>Questions</h2>
					<div id="questions">
						<div className="add-product-question">
							<div>
								<div className="addProduct-form-item">
									<label htmlFor="question_1">Question 1</label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_1a">Answer a </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_1b">Answer b </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_1c">Answer c </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_1d">Answer d </label>
								</div>
							</div>
							<div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="question_1"
										onChange={(event) => setQuestion_1(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_1a"
										onChange={(event) => setAnswer_1a(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_1b"
										onChange={(event) => setAnswer_1b(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_1c"
										onChange={(event) => setAnswer_1c(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_1d"
										onChange={(event) => setAnswer_1d(event.target.value)}
									></input>
								</div>
							</div>
						</div>

						<div className="add-product-question">
							<div>
								<div className="addProduct-form-item">
									<label htmlFor="question_2">Question 2</label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_2a">Answer a </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_2b">Answer b </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_2c">Answer c </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_2d">Answer d </label>
								</div>
							</div>
							<div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="question_2"
										onChange={(event) => setQuestion_2(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_2a"
										onChange={(event) => setAnswer_2a(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_2b"
										onChange={(event) => setAnswer_2b(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_2c"
										onChange={(event) => setAnswer_2c(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_2d"
										onChange={(event) => setAnswer_2d(event.target.value)}
									></input>
								</div>
							</div>
						</div>
						<div className="add-product-question">
							<div>
								<div className="addProduct-form-item">
									<label htmlFor="question_3">Question 3</label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_3a">Answer a </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_3b">Answer b </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_3c">Answer c </label>
								</div>
								<div className="addProduct-form-item">
									<label htmlFor="answer_3d">Answer d </label>
								</div>
							</div>
							<div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="question_3"
										onChange={(event) => setQuestion_3(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_3a"
										onChange={(event) => setAnswer_3a(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_3b"
										onChange={(event) => setAnswer_3b(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_3c"
										onChange={(event) => setAnswer_3c(event.target.value)}
									></input>
								</div>
								<div className="addProduct-form-item">
									<input
										type="text"
										id="answer_3d"
										onChange={(event) => setAnswer_3d(event.target.value)}
									></input>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button className="addProductButton" type="button" onClick={submitForm}>
					Add product
				</button>
			</form>
			<div id="footer"></div>
		</div>
	);
}
