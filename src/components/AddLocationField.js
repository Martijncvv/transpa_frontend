import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addLocation } from "../store/products/actions";
import { popupOff } from "../store/appStates/actions";

import "./styling/AddLocationField.css";

export default function AddLocationField() {
	const [city, setCity] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [streetNumber, setStreetNumber] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {}, []);

	function submitForm(event) {
		event.preventDefault();
		dispatch(addLocation(city, zipcode, streetNumber));
		dispatch(popupOff());

		setCity(" ");
		setZipcode(" ");
		setStreetNumber(" ");
	}

	return (
		<div>
			<h2>Add Location</h2>
			<form>
				<div id="add-location-form">
					<div>
						<div>
							<label htmlFor="city ">City</label>
						</div>
						<div>
							<label htmlFor="zipcode ">Zip code</label>
						</div>
						<div>
							<label htmlFor="streetNumber ">Street number</label>
						</div>
					</div>

					<div>
						<div>
							<input
								type="text"
								id="city"
								onChange={(event) => setCity(event.target.value)}
							></input>
						</div>
						<div>
							<input
								type="text"
								id="zipcode"
								onChange={(event) => setZipcode(event.target.value)}
							></input>
						</div>

						<div>
							<input
								type="number"
								id="streetNumber"
								onChange={(event) => setStreetNumber(event.target.value)}
							></input>
						</div>
					</div>
				</div>

				<button id="add-location-button" type="button" onClick={submitForm}>
					Submit
				</button>
			</form>
		</div>
	);
}
