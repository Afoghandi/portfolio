import React, { Component } from "react";
import About from "./About";
import Model from "../images/face.png";
import Hero from "../components/Hero";

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Hero
					highlight="Full Stack Web Developer"
					name={`i'm Ralphael Oshun`}
					skills="HTML/CSS | Bootstrap| Javascript | REACT"
					children="view projects"
					img={Model}
				/>

				<About />
			</div>
		);
	}
}
