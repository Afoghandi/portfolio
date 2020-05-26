import React from "react";
import Model from "../images/face.png";

export default function Hero({ highlight, name, skills, img, children }) {
	return (
		<>
			<div className="container">
				<div className="hero-container">
					<div className="provider">
						<div className="text-container">
							<h2 className="highlights">{highlight}</h2>
							<h1 className="title-name">{name} </h1>
							<h5 className="skills ">
								{skills}
								<br /> | PhotoShop | MongoDB{" "}
							</h5>
							<button className="btnPrimaryLight">{children}</button>
						</div>
						<div className="img-container">
							<img src={img} alt="model" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
Hero.defaultProps = {
	hero: "defaultHero",
};
