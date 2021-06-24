export const selectLoginPopupState = (state) => state.appStates.loginPopupState;
export const selectRegisterPopupState = (state) =>
	state.appStates.registerPopupState;
export const selectAddLocationPopupState = (state) =>
	state.appStates.addLocationPopupState;
export const selectFetchingState = (state) => state.appStates.fetchingDone;

export const selectMessage = (state) => state.appStates.message;
