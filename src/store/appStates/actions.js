export const loginPopupOn = () => ({ type: "LOGIN_POPUP_ON" });
export const registerPopupOn = () => ({ type: "REGISTER_POPUP_ON" });
export const addLocationPopupOn = () => ({ type: "ADD_LOCATION_POPUP_ON" });
export const popupOff = () => ({ type: "POPUP_OFF" });
export const fetchingDone = () => ({ type: "FETCHING_DONE" });
export const fetchingLoading = () => ({ type: "FETCHING_LOADING" });

export const clearMessage = () => ({ type: "CLEAR_MESSAGE" });

export const setMessage = (variant, text) => {
	return {
		type: "SET_MESSAGE",
		payload: {
			variant,
			text,
		},
	};
};

export const showMessageWithTimeout = (variant, text) => {
	return (dispatch) => {
		dispatch(setMessage(variant, text));

		const timeout = 3000;

		setTimeout(() => dispatch(clearMessage()), timeout);
	};
};
