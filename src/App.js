import "./styling/App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import AddProduct from "./pages/AddProduct";

import NavBar from "./components/NavBar";
import PopupField from "./components/PopupField";
import LoginField from "./components/LoginField";
import RegisterField from "./components/RegisterField";
import MessageBox from "./components/MessageBox";

import {
	selectLoginPopupState,
	selectRegisterPopupState,
} from "./store/appStates/selectors";
import { getUserWithStoredToken } from "./store/users/actions";

function App() {
	const dispatch = useDispatch();
	const loginPopupState = useSelector(selectLoginPopupState);
	const registerPopupState = useSelector(selectRegisterPopupState);

	useEffect(() => {
		dispatch(getUserWithStoredToken());
	}, [dispatch]);

	return (
		<div className="App">
			{window.screen.width > 1000 && <NavBar />}
			<MessageBox />
			<div>
				{loginPopupState && <PopupField content={<LoginField />} />}
				{registerPopupState && <PopupField content={<RegisterField />} />}
			</div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/productDetails/:id" component={ProductPage} />
				<Route path="/addProduct" component={AddProduct} />
			</Switch>
			{/* {window.screen.width > 1000 && <div id="footer"></div>} */}
		</div>
	);
}

export default App;
