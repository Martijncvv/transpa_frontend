const initialState = {
	products: [],
	productDetails: [],
	isFetching: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCHING_DATA":
			return { ...state, isFetching: true };

		case "FETCH_PRODUCTS_SUCCESS":
			return { ...state, products: action.payload, isFetching: false };

		case "FETCH_PRODUCTDETAILS_SUCCESS":
			return { ...state, productDetails: action.payload, isFetching: false };

		default:
			return state;
	}
};
