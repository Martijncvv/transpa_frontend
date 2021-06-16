import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginPopupOn } from "../store/appStates/actions";

export default function NavBar() {
	const dispatch = useDispatch();

	const togglePopupOn = () => {
		dispatch(loginPopupOn());
	};

	return (
		<div>
			<Link to="/">Home</Link>
			{" - "}
			<Link to="/dashBoard">Dashboard</Link>
			{" - "}
			<Link to="/product">Product</Link>
			{" - "}
			<button onClick={togglePopupOn}>Login</button>
			{" - "}
			<Link to="/">Register</Link>
		</div>
	);
}
