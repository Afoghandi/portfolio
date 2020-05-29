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
						<p className="about-header"> Hello there </p>
						<p className="about-wording">
							{" "}
							I am a software developer and designer living in England.
							currently, I work in the insurance industry. I work in the
							Learning and Development department, designing new ways to learn
							and helping the organisation to achieve their goals.
							<br />
							Have a look at my personality test result.
							<br />
							<a href="https://www.16personalities.com/profiles/126599aebf4b0">
								{" "}
								<button type="button" className="btnPrimaryDark">
									Go
								</button>{" "}
							</a>{" "}
						</p>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</section>
	);
}
export default About;
