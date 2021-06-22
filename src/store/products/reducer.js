const initialState = {
	products: [],
	productDetails: [],
	isFetching: false,
	locations: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCHING_DATA":
			return { ...state, isFetching: true };

		case "FETCH_PRODUCTS_SUCCESS":
			return { ...state, products: action.payload, isFetching: false };

		case "DELETE_PRODUCTS_SUCCESS":
			const filteredProducts = state.products.filter(
				(product) => product.id !== action.payload
			);
			return {
				...state,
				products: filteredProducts,
				isFetching: false,
			};

		case "FETCH_PRODUCTDETAILS_SUCCESS":
			return { ...state, productDetails: action.payload, isFetching: false };

		case "FETCH_LOCATIONS_SUCCESS":
			return { ...state, locations: action.payload, isFetching: false };

		case "ADD_LOCATION_SUCCESS":
			return {
				...state,
				locations: [...state.locations, action.payload],
				isFetching: false,
			};

		default:
			return state;
	}
};
