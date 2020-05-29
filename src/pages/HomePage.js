import React, { Component } from "react";
import About from "./About";
import Model from "../images/face.png";
import Hero from "../components/Hero";
import Project from "../components/project/project";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Hero
					highlight="Full Stack Web Developer"
					name={`i'm Ralphael Oshun`}
					skills="HTML/CSS | Bootstrap| Javascript | REACT"
					img={Model}
				>
					<Link className="link-btn" children="view" to="/project/">
						projects{" "}
					</Link>{" "}
				</Hero>

				<About />
				<Project />
			</div>
		);
	}
}
