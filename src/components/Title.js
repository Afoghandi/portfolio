import React from "react";

export default function Title({ title }) {
	return (
		<section className="container">
			<div className="section-title">
				<h4>{title}</h4>
			</div>
			<div className="seperator">
				<div className="line"></div>
			</div>
		</section>
	);
}
