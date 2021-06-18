import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchRelevantProductsSuccess = (relevantProducts) => ({
	type: "FETCH_RELEVANT_PRODUCTS_SUCCESS",
	payload: relevantProducts,
});

export const fetchRelevantProducts = (id) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(
				`${apiUrl}/products/relevantProducts/${id}`
			);
			console.log(`FetchRelevantProduct ${id}:`, response);
			dispatch(fetchRelevantProductsSuccess(response.data.relevantProducts));
		} catch (e) {
			console.log("Error: ", e);
		}
	};
};
