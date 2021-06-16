import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchProductsSuccess = (products) => ({
	type: "FETCH_PRODUCTS_SUCCESS",
	payload: products,
});

export const fetchProducts = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(`${apiUrl}/products`);
			console.log(response);
			dispatch(fetchProductsSuccess(response.data.products));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};
