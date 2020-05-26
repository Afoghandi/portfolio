import React, { Component } from "react";
import Title from "../components/Title";
import Body from "../images/body.png";

export default class About extends Component {
	render() {
		return (
			<section className="container">
				<Title title="about me" />
				<div className="about-container">
					<span className="model-body">
						<img src={Body} alt="model" />
					</span>

					<div className="about-text-container">
						<div className="about-text">
							<p className="about-header">Designer and developer</p>

							<p className="about-wording">
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos nemo adipisci amet delectus magni, cupiditate
								quibusdam aliquam placeat consectetur id sed molestias in aut
								ipsam numquam cum! Aperiam, veritatis dicta!
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
