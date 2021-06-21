import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

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
	const [productName, setProductName] = useState("");
	const [mainProductImageURL, setMainProductImageURL] = useState("");
	const [colour, setColour] = useState("");
	const [detailedProductInfo, setDetailedProductInfo] = useState("");
	const [videoURL, setVideoURL] = useState("");
	const [socialMediaURL, setSocialMediaURL] = useState("");
	const [location, setLocation] = useState("");
	// const [relevantProducts, setRelevantProducts] = useState("");

	const [productImage_1, setProductImage_1] = useState("");
	const [productImage_2, setProductImage_2] = useState("");
	const [productImage_3, setProductImage_3] = useState("");

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
	// console.log("companyProducts", companyProducts);

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

				location,

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
	}

	const test = () => {
		console.log("TEST");
	};

	const addLocationPopupToggle = () => {
		dispatch(addLocationPopupOn());
	};

	return (
		<div>
			<div>
				{addLocationPopup && <PopupField content={<AddLocationField />} />}
			</div>
			<h1>Add product</h1>

			<form>
				<label htmlFor="productName ">Product name:</label>
				<input
					type="text"
					id="productName"
					onChange={(event) => setProductName(event.target.value)}
				></input>
				<br />
				<label htmlFor="mainProductImage">Main product image URL:</label>
				<input
					type="url"
					id="mainProductImage"
					onChange={(event) => setMainProductImageURL(event.target.value)}
				></input>
				<br />

				<label htmlFor="productImage_1">Product image URL 1:</label>
				<input
					type="url"
					id="productImage_1"
					onChange={(event) => setProductImage_1(event.target.value)}
				></input>
				<br />
				<label htmlFor="productImage_2">Product image URL 2:</label>
				<input
					type="url"
					id="productImage_2"
					onChange={(event) => setProductImage_2(event.target.value)}
				></input>
				<br />
				<label htmlFor="productImage_3">Product image URL 3:</label>
				<input
					type="url"
					id="productImage_3"
					onChange={(event) => setProductImage_3(event.target.value)}
				></input>
				<br />

				<label htmlFor="colour">Colour: </label>
				<input
					type="color"
					id="colour"
					onChange={(event) => setColour(event.target.value)}
				></input>
				<br />
				<label htmlFor="detailedProductInfo ">Detailed product info:</label>
				<input
					type="text"
					id="detailedProductInfo"
					onChange={(event) => setDetailedProductInfo(event.target.value)}
				></input>
				<br />
				<label htmlFor="videoURL">Product video URL:</label>
				<input
					type="url"
					id="videoURL"
					onChange={(event) => setVideoURL(event.target.value)}
				></input>
				<br />
				<label htmlFor="socialMediaURL">Social media URL:</label>
				<input
					type="url"
					id="socialMediaURL"
					onChange={(event) => setSocialMediaURL(event.target.value)}
				></input>
				<br />
				<div>
					{locations.map((location) => (
						<div key={location.id}>
							<p>
								Zipcode: {location.zipcode} Nr: {location.streetNumber}
							</p>
							<input
								type="radio"
								name="locationId"
								id={location.id}
								value={location.id}
								onClick={() => setLocation(location.id)}
							></input>
						</div>
					))}
					<button type="button" onClick={addLocationPopupToggle}>
						Add location
					</button>
				</div>

				{/* <div>
					<h2>Relevant products</h2>
					{companyProducts.map((product) => (
						<div key={product.id}>
							<p>{product.productName}</p>
							<input
								type="checkbox"
								name={product.productName}
								id={product.id}
								value={product.productName}
							></input>
						</div>
					))}
				</div> */}

				<h2>Questions</h2>
				<div>
					<label htmlFor="question_1">Question 1</label>
					<input
						type="text"
						id="question_1"
						onChange={(event) => setQuestion_1(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_1a">Answer a </label>
					<input
						type="text"
						id="answer_1a"
						onChange={(event) => setAnswer_1a(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_1b">Answer b </label>
					<input
						type="text"
						id="answer_1b"
						onChange={(event) => setAnswer_1b(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_1c">Answer c </label>
					<input
						type="text"
						id="answer_1c"
						onChange={(event) => setAnswer_1c(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_1d">Answer d </label>
					<input
						type="text"
						id="answer_1d"
						onChange={(event) => setAnswer_1d(event.target.value)}
					></input>
				</div>
				<br />
				<div>
					<label htmlFor="question_2">Question 2</label>
					<input
						type="text"
						id="question_2"
						onChange={(event) => setQuestion_2(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_2a">Answer a </label>
					<input
						type="text"
						id="answer_2a"
						onChange={(event) => setAnswer_2a(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_2b">Answer b </label>
					<input
						type="text"
						id="answer_2b"
						onChange={(event) => setAnswer_2b(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_2c">Answer c </label>
					<input
						type="text"
						id="answer_2c"
						onChange={(event) => setAnswer_2c(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_2d">Answer d </label>
					<input
						type="text"
						id="answer_2d"
						onChange={(event) => setAnswer_2d(event.target.value)}
					></input>
				</div>
				<br />
				<div>
					<label htmlFor="question_3">Question 3</label>
					<input
						type="text"
						id="question_3"
						onChange={(event) => setQuestion_3(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_3a">Answer a </label>
					<input
						type="text"
						id="answer_3a"
						onChange={(event) => setAnswer_3a(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_3b">Answer b </label>
					<input
						type="text"
						id="answer_3b"
						onChange={(event) => setAnswer_3b(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_3c">Answer c </label>
					<input
						type="text"
						id="answer_3c"
						onChange={(event) => setAnswer_3c(event.target.value)}
					></input>
					<br />
					<label htmlFor="answer_3d">Answer d </label>
					<input
						type="text"
						id="answer_3"
						onChange={(event) => setAnswer_3d(event.target.value)}
					></input>
				</div>

				<button type="button" onClick={submitForm}>
					Submit
				</button>
			</form>
		</div>
	);
}
