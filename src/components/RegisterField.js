import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../store/users/actions";
import { selectToken } from "../store/users/selectors";
import { showMessageWithTimeout } from "../store/appStates/actions";
import "./styling/Forms.css";

export default function Register() {
	const [companyName, setCompanyName] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const [email, setEmail] = useState("");
	const [repeatEmail, setRepeatEmail] = useState("");

	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [companyImageUrl, setCompanyImageUrl] = useState("");
	const [detailedCompanyInfo, setDetailedCompanyInfo] = useState("");

	const dispatch = useDispatch();
	const token = useSelector(selectToken);
	const history = useHistory();

	useEffect(() => {
		if (token !== null) {
			history.push("/");
		}
	}, [token, history]);

	function submitForm(event) {
		event.preventDefault();
		if (password === repeatPassword && email === repeatEmail) {
			dispatch(
				register(
					companyName,
					name,
					surname,
					email,
					password,
					companyImageUrl,
					detailedCompanyInfo
				)
			);
		} else {
			console.log("Password or email not the same");
			dispatch(
				showMessageWithTimeout("error", "Password or email not the same")
			);
		}

		setCompanyName("");
		setName("");
		setSurname("");
		setEmail("");
		setRepeatEmail("");
		setPassword("");
		setRepeatPassword("");
		setCompanyImageUrl("");
		setDetailedCompanyInfo("");
	}

	return (
		<div id="main">
			<h1>Register</h1>
			<form id="form">
				<div>
					<div className="form-item">
						<label className="form-label">Company</label>
					</div>
					<div className="form-item">
						<label className="form-label">Name</label>
					</div>
					<div className="form-item">
						<label className="form-label">Surname</label>
					</div>
					<div className="form-item">
						<label className="form-label">Email</label>
					</div>
					<div className="form-item">
						<label className="form-label">Repeat email</label>
					</div>
					<div className="form-item">
						<label className="form-label">Password</label>
					</div>
					<div className="form-item">
						<label className="form-label">Repeat password</label>
					</div>
					<div className="form-item">
						<label className="form-label">Company image URL</label>
					</div>
					<div className="form-item">
						<label className="form-label">Detailed company info</label>
					</div>
				</div>

				<div>
					<div className="form-item">
						<input
							value={companyName}
							onChange={(event) => setCompanyName(event.target.value)}
							type="text"
							placeholder="Company name"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={name}
							onChange={(event) => setName(event.target.value)}
							type="text"
							placeholder="Name"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={surname}
							onChange={(event) => setSurname(event.target.value)}
							type="text"
							placeholder="Surname"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							type="email"
							placeholder="Email"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={repeatEmail}
							onChange={(event) => setRepeatEmail(event.target.value)}
							type="email"
							placeholder="Email"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={repeatPassword}
							onChange={(event) => setRepeatPassword(event.target.value)}
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<div className="form-item">
						<input
							value={companyImageUrl}
							onChange={(event) => setCompanyImageUrl(event.target.value)}
							type="text"
							placeholder="Company image URL"
							required
						/>
					</div>
					<div className="form-item">
						<textarea
							value={detailedCompanyInfo}
							onChange={(event) => setDetailedCompanyInfo(event.target.value)}
							type="text"
							placeholder="Detailed company info"
							required
						/>
					</div>
				</div>
			</form>
			<button id="form-button" type="submit" onClick={submitForm}>
				Register
			</button>
		</div>
	);
}
