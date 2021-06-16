import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";

import { selectLoginPopupState } from "./store/appStates/selectors";
import PopupField from "./components/PopupField";

function App() {
	const loginPopupState = useSelector(selectLoginPopupState);

	return (
		<div className="App">
			<NavBar />
			<div>
				{loginPopupState && (
					<PopupField
						content={
							<>
								<b>Design your Popup</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<button>Test button</button>
							</>
						}
					/>
				)}
			</div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/product/:id" component={ProductPage} />
			</Switch>
		</div>
	);
}

export default App;
