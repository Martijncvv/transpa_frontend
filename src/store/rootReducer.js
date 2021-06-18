import { combineReducers } from "redux";
import products from "./products/reducer";
import appStates from "./appStates/reducer";
import users from "./users/reducer";
import relevantProducts from "./relevantProducts/reducer";

export default combineReducers({
	products,
	appStates,
	users,
	relevantProducts,
});
