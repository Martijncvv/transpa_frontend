import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../users/selectors";
import { fetchingDone, fetchingLoading } from "../../store/appStates/actions";

export const fetchingData = () => ({ type: "FETCHING_DATA" });

export const fetchProductsSuccess = (products) => ({
	type: "FETCH_PRODUCTS_SUCCESS",
	payload: products,
});
export const fetchProductDetailssSuccess = (productDetails) => ({
	type: "FETCH_PRODUCTDETAILS_SUCCESS",
	payload: productDetails,
});
export const fetchLocationsSuccess = (locations) => ({
	type: "FETCH_LOCATIONS_SUCCESS",
	payload: locations,
});

export const AddLocationSuccess = (location) => ({
	type: "ADD_LOCATION_SUCCESS",
	payload: location,
});

export const fetchProducts = () => {
	return async (dispatch, getState) => {
		try {
			dispatch(fetchingData());
			const response = await axios.get(`${apiUrl}/products`);
			console.log("FetchProducts", response);
			dispatch(fetchProductsSuccess(response.data.products));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};

export const fetchProductDetails = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch(fetchingData());
			const response = await axios.get(
				`${apiUrl}/products/productDetails/${id}`
			);
			console.log(`FetchProduct details: ${id}:`, response);
			dispatch(fetchProductDetailssSuccess(response.data.product));
			dispatch(fetchingDone());
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};

export const fetchCompanyProducts = () => {
	return async (dispatch, getState) => {
		const { token } = selectUser(getState());
		try {
			dispatch(fetchingData());
			const response = await axios.get(`${apiUrl}/products/company`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			console.log("Fetch company products", response);
			dispatch(fetchProductsSuccess(response.data.products));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};

export const addVote = (answerId) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.patch(`${apiUrl}/products/vote/`, {
				answerId,
			});
			console.log("response addVote:", response.data);
		} catch (e) {
			console.log(e);
		}
	};
};

export const fetchLocations = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(`${apiUrl}/products/locations`);
			dispatch(fetchLocationsSuccess(response.data.locations));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};

export const addLocation = (zipcode, streetNumber) => {
	return async (dispatch, getState) => {
		try {
			dispatch(fetchingData());
			const response = await axios.post(`${apiUrl}/products/addLocation/`, {
				zipcode,
				streetNumber,
			});
			dispatch(AddLocationSuccess(response.data.location));
		} catch (e) {
			console.log(e);
		}
	};
};
