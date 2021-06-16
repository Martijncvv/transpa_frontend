import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/product/:id" component={ProductPage} />
			</Switch>
		</div>
	);
}

export default App;
