import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../users/selectors";
import { fetchingDone } from "../../store/appStates/actions";

import { showMessageWithTimeout } from "../appStates/actions";

export const fetchingData = () => ({ type: "FETCHING_DATA" });

export const fetchProductsSuccess = (products) => ({
	type: "FETCH_PRODUCTS_SUCCESS",
	payload: products,
});
export const deleteProductsSuccess = (productId) => ({
	type: "DELETE_PRODUCTS_SUCCESS",
	payload: productId,
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
			const response = await axios.get(`${apiUrl}/products/companyProducts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			// console.log("Fetch company products", response);
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

export const addLocation = (city, zipcode, streetNumber) => {
	return async (dispatch, getState) => {
		try {
			dispatch(fetchingData());
			const response = await axios.post(`${apiUrl}/products/addLocation/`, {
				city,
				zipcode,
				streetNumber,
			});
			dispatch(AddLocationSuccess(response.data.location));
		} catch (e) {
			console.log(e);
		}
	};
};

export const addProducts = (
	productName,
	mainProductImageURL,
	colour,
	detailedProductInfo,
	videoURL,
	socialMediaURL,

	salesLocationIds,

	relevantProductIds,

	productImage_1,
	productImage_2,
	productImage_3,

	question_1,
	question_2,
	question_3,

	answer_1a,
	answer_1b,
	answer_1c,
	answer_1d,
	answer_2a,
	answer_2b,
	answer_2c,
	answer_2d,
	answer_3a,
	answer_3b,
	answer_3c,
	answer_3d
) => {
	return async (dispatch, getState) => {
		const { token } = selectUser(getState());
		try {
			dispatch(fetchingData());
			const response = await axios.post(
				`${apiUrl}/products/addProduct/`,
				{
					productName,
					mainProductImageURL,
					colour,
					detailedProductInfo,
					videoURL,
					socialMediaURL,

					salesLocationIds,

					relevantProductIds,

					productImage_1,
					productImage_2,
					productImage_3,

					question_1,
					question_2,
					question_3,

					answer_1a,
					answer_1b,
					answer_1c,
					answer_1d,
					answer_2a,
					answer_2b,
					answer_2c,
					answer_2d,
					answer_3a,
					answer_3b,
					answer_3c,
					answer_3d,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log("RESPONSE", response);
			dispatch(showMessageWithTimeout("success", "Product added"));
		} catch (e) {
			console.log(e);
		}
	};
};

export const deleteProduct = (productId) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.delete(
				`${apiUrl}/products/delete/${productId}`
			);
			console.log("response delete product:", response.data);
			dispatch(deleteProductsSuccess(productId));
			dispatch(showMessageWithTimeout("delete", "Product deleted"));
		} catch (e) {
			console.log(e);
		}
	};
};
