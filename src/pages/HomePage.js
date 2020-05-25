import React, { Component } from "react";
import Model from "../images/hat1.jpg";
import Hero from "../components/Hero";

export default class HomePage extends Component {
	render() {
		return (
			<div>
				Hello from home page
				<Hero />
			</div>
		);
	}
}
