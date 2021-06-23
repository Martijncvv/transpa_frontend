import "./styling/Forms.css";
import React from "react";
import { useDispatch } from "react-redux";
import { popupOff } from "../store/appStates/actions";

export default function PopupField(props) {
	const dispatch = useDispatch();

	const togglePopupOff = () => {
		dispatch(popupOff());
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
