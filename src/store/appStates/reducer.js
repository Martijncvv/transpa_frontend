const initialState = {
	loginPopupState: false,
	registerPopupState: false,
	addLocationPopupState: false,
	fetchingDone: false,
	message: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_POPUP_ON":
			return { ...state, loginPopupState: true };
		case "REGISTER_POPUP_ON":
			return { ...state, registerPopupState: true };
		case "ADD_LOCATION_POPUP_ON":
			return { ...state, addLocationPopupState: true };
		case "POPUP_OFF":
			return {
				...state,
				registerPopupState: false,
				loginPopupState: false,
				addLocationPopupState: false,
			};
		case "FETCHING_DONE":
			return { ...state, fetchingDone: true };
		case "FETCHING_LOADING":
			return { ...state, fetchingDone: false };

		case "SET_MESSAGE":
			return { ...state, message: action.payload };
		case "CLEAR_MESSAGE":
			return { ...state, message: null };
		default:
			return state;
	}
};
