import "./styling/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginPopupOn, registerPopupOn } from "../store/appStates/actions";
import { logOut } from "../store/users/actions";

import { selectUser, selectToken } from "../store/users/selectors";

export default function NavBar() {
	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	const token = useSelector(selectToken);

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
		<div class="navbar">
			<Link to="/">
				{" "}
				<div class="nav-item">Home</div>
			</Link>

			{token && (
				<div id="loggedIn">
					<Link to="/dashBoard">
						{" "}
						<div class="nav-item">Dashboard </div>
					</Link>

					<Link to="/addProduct">
						{" "}
						<div class="nav-item">Add Product </div>
					</Link>
				</div>
			)}
			{!token && (
				<button onClick={logoutUser}>
					<div class="nav-item">Logout </div>
				</button>
			)}

			{token && (
				<div id="loggedOut">
					<button class="nav-button" onClick={loginPopupToggle}>
						<div class="nav-item">Login </div>
					</button>

					<button class="nav-button" onClick={registerPopupToggle}>
						<div class="nav-item">Register </div>
					</button>
				</div>
			)}

			{user.name && <p>Welcome {user.name}</p>}
		</div>
	);
}
