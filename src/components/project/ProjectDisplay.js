import React from "react";

export default function ProjectDisplay({ project }) {
	const { title, description, type, image, liveDemo, gitHub, style } = project;
	return (
		<section className="container">
			<div className="grid-container">
				<div className="card">
					<div className="card-image">
						<img src={image} alt="project" />{" "}
					</div>
					<div className="card-text">
						<span className="date">{style}</span>
						<h2>{type}</h2>
						<p>{description}</p>
					</div>
					<div className="card-stats">
						<div className="stat">
							<div className="value">
								<a href={gitHub}>gitHub</a>{" "}
							</div>
							<div className="type"> code</div>
						</div>
						<div className="stat">
							<div className="5123"> -click-</div>
							<div className="views"></div>
						</div>
						<div className="stat">
							<div className="value">
								{" "}
								<a href={liveDemo}>live</a>
							</div>
							<div className="type"> demo</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
