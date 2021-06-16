import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<Link to="/">Home</Link>
			{" - "}
			<Link to="/dashBoard">Dashboard</Link>
			{" - "}
			<Link to="/product">Product</Link>
			{" - "}
			<Link to="/">Register</Link>
			{" - "}
			<Link to="/">Login</Link>
		</div>
	);
}
