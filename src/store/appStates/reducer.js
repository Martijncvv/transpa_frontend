const initialState = {
	loginPopupState: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_POPUP_ON":
			return { ...state, loginPopupState: true };
		case "LOGIN_POPUP_OFF":
			return { ...state, loginPopupState: false };
		default:
			return state;
	}
};
