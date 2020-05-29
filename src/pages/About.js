import React, { useEffect } from "react";
import Title from "../components/Title";
import Body from "../images/body.png";
import Aos from "aos";

import "aos/dist/aos.css";

function About() {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);
	return (
		<section className="container">
			<Title title="about me" />
			<div className="about-container">
				<span className="model-body" data-aos="fade-up">
					<img src={Body} alt="model" />
				</span>
				<div className="about-text-container">
					<div className="about-text">
						<p className="about-header"> Designer and developer </p>
						<p className="about-wording">
							{" "}
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.Dignissimos nemo adipisci amet delectus magni, cupiditate
							quibusdam aliquam placeat consectetur id sed molestias in aut
							ipsam numquam cum!Aperiam, veritatis dicta!
						</p>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</section>
	);
}
export default About;
