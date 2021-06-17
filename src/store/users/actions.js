import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken) => {
	return {
		type: "LOGIN_SUCCESS",
		payload: userWithToken,
	};
};

const tokenStillValid = (userWithoutToken) => ({
	type: "TOKEN_STILL_VALID",
	payload: userWithoutToken,
});

export const logOut = () => ({ type: "LOG_OUT" });

export const register = (
	companyName,
	name,
	surname,
	email,
	password,
	companyImageUrl,
	detailedCompanyInfo
) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.post(`${apiUrl}/register`, {
				companyName,
				name,
				surname,
				email,
				password,
				companyImageUrl,
				detailedCompanyInfo,
			});
			console.log("register response", response);
			dispatch(loginSuccess(response.data));
		} catch (error) {
			if (error.response) {
				console.log(error.response.data.message);
			} else {
				console.log(error.message);
			}
		}
	};
};

export const login = (email, password) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.post(`${apiUrl}/login`, {
				email,
				password,
			});
			console.log("login response", response);
			dispatch(loginSuccess(response.data));
		} catch (error) {
			if (error.response) {
				console.log(error.response.data.message);
			} else {
				console.log(error.message);
			}
		}
	};
};

export const getUserWithStoredToken = () => {
	return async (dispatch, getState) => {
		// get token from the state
		const token = selectToken(getState());

		// if we have no token, stop
		if (token === null) return;

		try {
			// if we do have a token,
			// check wether it is still valid or if it is expired
			const response = await axios.get(`${apiUrl}/me`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			// token is still valid
			dispatch(tokenStillValid(response.data));
		} catch (error) {
			if (error.response) {
				console.log(error.response.message);
			} else {
				console.log(error);
			}
			// if we get a 4xx or 5xx response,
			// get rid of the token by logging out
			dispatch(logOut());
		}
	};
};
