import React from "react";
import { Route, Switch } from "react-router-dom";
import home from "./pages/HomePage";
import about from "./pages/About";
import project from "./pages/Project";
import contact from "./pages/Contact";
import error from "./pages/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" component={home} />{" "}
				<Route exact path="/project/" component={project} />{" "}
				<Route exact path="/contact/" component={contact} />{" "}
				<Route component={error} />{" "}
			</Switch>{" "}
		</div>
	);
}

export default App;
