import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../users/selectors";

export const fetchProductsSuccess = (products) => ({
	type: "FETCH_PRODUCTS_SUCCESS",
	payload: products,
});

export const fetchProducts = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(`${apiUrl}/products`);
			console.log("FetchProducts", response);
			dispatch(fetchProductsSuccess(response.data.products));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};

export const fetchProduct = (id) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(
				`${apiUrl}/products/productDetails/${id}`
			);
			console.log(`FetchProduct ${id}:`, response);
			dispatch(fetchProductsSuccess(response.data.product));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};

export const fetchCompanyProducts = () => {
	return async (dispatch, getState) => {
		const { token } = selectUser(getState());
		try {
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
