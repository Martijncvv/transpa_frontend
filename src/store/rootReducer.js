import { combineReducers } from "redux";
import products from "./products/reducer";
import appStates from "./appStates/reducer";

export default combineReducers({
	products,
	appStates,
});
