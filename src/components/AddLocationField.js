import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../store/products/actions";

export default function AddLocationField() {
	const [zipcode, setZipcode] = useState("");
	const [streetNumber, setStreetNumber] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {}, []);

	function submitForm(event) {
		event.preventDefault();
		dispatch(addLocation(zipcode, streetNumber));
		setStreetNumber(" ");
		setZipcode(" ");
	}

	return (
		<div>
			<h2>Add Location</h2>
			<form>
				<label htmlFor="zipcode ">Zip code:</label>
				<input
					type="text"
					id="zipcode"
					onChange={(event) => setZipcode(event.target.value)}
				></input>
				<label htmlFor="streetNumber ">Street number:</label>
				<input
					type="number"
					id="streetNumber"
					onChange={(event) => setStreetNumber(event.target.value)}
				></input>

				<button type="button" onClick={submitForm}>
					Submit
				</button>
			</form>
		</div>
	);
}
