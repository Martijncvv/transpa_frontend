import "./styling/App.css";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

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

function App() {
	const loginPopupState = useSelector(selectLoginPopupState);
	const registerPopupState = useSelector(selectRegisterPopupState);

	return (
		<div className="App">
			<NavBar />
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
		</div>
	);
}

export default App;
