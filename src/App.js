import React from "react";
import { Route, Switch } from "react-router-dom";
import home from "./pages/HomePage";
import about from "./pages/About";
import Project from "./pages/Project";
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
				<Route exact path="/project/" component={Project} />
				<Route exact path="/about/" component={about} />{" "}
				<Route exact path="/contact/" component={contact} />{" "}
				<Route component={error} />{" "}
			</Switch>{" "}
			<Footer />
		</div>
	);
}

export default App;
