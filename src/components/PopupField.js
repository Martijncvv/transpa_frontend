import "./styling/PopupField.css";
import React from "react";
import { useDispatch } from "react-redux";
import { popupOff } from "../store/appStates/actions";
import MessageBox from "./MessageBox";

export default function PopupField(props) {
	const dispatch = useDispatch();

	const togglePopupOff = () => {
		dispatch(popupOff());
	};

	return (
		<div className="popup-box">
			<div className="box">
				<MessageBox />
				<span className="close-icon" onClick={togglePopupOff}>
					x
				</span>
				{props.content}
			</div>
		</div>
	);
}
