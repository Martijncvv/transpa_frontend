import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import { signUp } from "../../store/user/actions";
// import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Register() {
	const [company, setCompany] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const [email, setEmail] = useState("");
	const [repeatEmail, setRepeatEmail] = useState("");

	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [companyImageURL, setCompanyImageURL] = useState("");
	const [detailedCompanyInfo, setDetailedCompanyInfo] = useState("");

	const dispatch = useDispatch();
	// const token = useSelector(selectToken);
	// const history = useHistory();

	// useEffect(() => {
	// 	if (token !== null) {
	// 		history.push("/");
	// 	}
	// }, [token, history]);

	function submitForm(event) {
		event.preventDefault();

		// dispatch(signUp(name, email, password));

		setCompany("");
		setName("");
		setSurname("");
		setEmail("");
		setRepeatEmail("");
		setPassword("");
		setRepeatPassword("");
		setCompanyImageURL("");
		setDetailedCompanyInfo("");
	}

	return (
		<Container>
			<Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
				<h1 className="mt-5 mb-5">Register</h1>

				<Form.Group>
					<Form.Label>Company </Form.Label>
					<Form.Control
						value={company}
						onChange={(event) => setCompany(event.target.value)}
						type="text"
						placeholder="Enter company name"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Name </Form.Label>
					<Form.Control
						value={name}
						onChange={(event) => setName(event.target.value)}
						type="text"
						placeholder="Enter name"
						required
					/>
					{/* <Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text> */}
				</Form.Group>

				<Form.Group>
					<Form.Label>Surname </Form.Label>
					<Form.Control
						value={surname}
						onChange={(event) => setSurname(event.target.value)}
						type="text"
						placeholder="Enter surname"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Email </Form.Label>
					<Form.Control
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Repeat email </Form.Label>
					<Form.Control
						value={repeatEmail}
						onChange={(event) => setRepeatEmail(event.target.value)}
						type="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password </Form.Label>
					<Form.Control
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
						placeholder="Password"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Repeat password </Form.Label>
					<Form.Control
						value={repeatPassword}
						onChange={(event) => setRepeatPassword(event.target.value)}
						type="password"
						placeholder="Password"
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Detailed company info </Form.Label>
					<Form.Control
						value={detailedCompanyInfo}
						onChange={(event) => setDetailedCompanyInfo(event.target.value)}
						type="text"
						placeholder="Enter detailed company info"
						required
					/>
				</Form.Group>

				<Form.Group className="mt-5">
					<Button variant="primary" type="submit" onClick={submitForm}>
						Register
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
}
