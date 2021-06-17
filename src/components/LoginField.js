import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../store/users/actions";
import { selectToken } from "../store/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

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
		console.log("hi");
		event.preventDefault();

		dispatch(login(email, password));

		setEmail("");
		setPassword("");
	}

	return (
		<Container>
			<Form>
				<h1>Login</h1>
				<Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Button variant="primary" type="submit" onClick={submitForm}>
						Log in
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
}
