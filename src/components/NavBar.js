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
		<div className="navbar">
			<Link to="/">
				{" "}
				<div className="nav-item">Home</div>
			</Link>

			{token && (
				<div id="loggedIn">
					<Link to="/dashBoard">
						{" "}
						<div className="nav-item">Dashboard </div>
					</Link>

					<Link to="/addProduct">
						{" "}
						<div className="nav-item">Add Product </div>
					</Link>
				</div>
			)}
			{!token && (
				<button onClick={logoutUser}>
					<div className="nav-item">Logout </div>
				</button>
			)}

			{token && (
				<div id="loggedOut">
					<button className="nav-button" onClick={loginPopupToggle}>
						<div className="nav-item">Login </div>
					</button>

					<button className="nav-button" onClick={registerPopupToggle}>
						<div className="nav-item">Register </div>
					</button>
				</div>
			)}

			{user.name && <p>Welcome {user.name}</p>}
		</div>
	);
}
