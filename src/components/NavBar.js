import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginPopupOn, registerPopupOn } from "../store/appStates/actions";
import { logOut } from "../store/users/actions";

export default function NavBar() {
	const dispatch = useDispatch();

	const loginPopupToggle = () => {
		dispatch(loginPopupOn());
	};

	const registerPopupToggle = () => {
		dispatch(registerPopupOn());
	};

	const logoutUser = () => {
		dispatch(logOut());
	};

	return (
		<div>
			<Link to="/">Home</Link>
			{" - "}
			<Link to="/dashBoard">Dashboard</Link>
			{" - "}
			<Link to="/product">Product</Link>
			{" - "}
			<button onClick={loginPopupToggle}>Login</button>
			{" - "}
			<button onClick={registerPopupToggle}>Register</button>
			{" - "}
			<button onClick={logoutUser}>Logout</button>
		</div>
	);
}
