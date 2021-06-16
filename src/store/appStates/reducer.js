const initialState = {
	loginPopupState: false,
	registerPopupState: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_POPUP_ON":
			return { ...state, loginPopupState: true };
		case "REGISTER_POPUP_ON":
			return { ...state, registerPopupState: true };
		case "POPUP_OFF":
			return { ...state, registerPopupState: false, loginPopupState: false };
		default:
			return state;
	}
};
