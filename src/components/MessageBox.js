import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../store/appStates/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../store/appStates/actions";

import "./styling/MessageBox.css";

export default function MessageBox() {
	const message = useSelector(selectMessage);
	const dispatch = useDispatch();
	const showMessage = message !== null;
	if (!showMessage) return null;

	let colour = "rgb(230, 88, 88)";
	if (message.variant === "success") {
		colour = "rgb(96, 178, 230)";
	}

	return (
		<div
			id="message-box"
			style={{ backgroundColor: colour || "rgb(77, 77, 77)" }}
		>
			<label id="popup-message"> {message.text}</label>
		</div>
	);
}
