import React from "react";
import { useDispatch } from "react-redux";
import { loginPopupOff } from "../store/appStates/actions";

import "./Components.css";

export default function PopupField(props) {
	const dispatch = useDispatch();

	const togglePopupOff = () => {
		dispatch(loginPopupOff());
	};

	return (
		<div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={togglePopupOff}>
					x
				</span>
				{props.content}
			</div>
		</div>
	);
}
