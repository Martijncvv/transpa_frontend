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
