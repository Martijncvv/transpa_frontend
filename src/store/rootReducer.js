import { combineReducers } from "redux";
import products from "./products/reducer";
import appStates from "./appStates/reducer";
import companies from "./companies/reducer";

export default combineReducers({
	products,
	appStates,
	companies,
});
