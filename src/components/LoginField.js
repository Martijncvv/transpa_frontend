import React, { useState, useEffect } from "react";
import { login } from "../store/users/actions";
import { selectToken } from "../store/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styling/Forms.css";

export default function LoginField() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const token = useSelector(selectToken);
	const history = useHistory();

	useEffect(() => {
		if (token !== null) {
			history.push("/");
		}
	}, [token, history]);

	function submitForm(event) {
		console.log("request sent");
		event.preventDefault();

		dispatch(login(email, password));

		setEmail("");
		setPassword("");
	}

	return (
		<div id="main">
			<h1>Login</h1>
			<form id="form">
				<div>
					<div class="form-item">
						<label class="form-label">Email address</label>
					</div>
					<div class="form-item">
						<label class="form-label">Password</label>
					</div>
				</div>

				<div>
					<div class="form-item">
						<input
							class="form-input"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							type="email"
							placeholder="Enter email"
							required
						/>
					</div>
					<div class="form-item">
						<input
							class="form-input"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							placeholder="Password"
							required
						/>
					</div>
				</div>
			</form>
			<button id="form-button" type="submit" onClick={submitForm}>
				Log in
			</button>
		</div>
	);
}
