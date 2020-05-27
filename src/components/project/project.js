import React from "react";
import { ProjectConsumer } from "../context";
import ProjectDisplay from "./ProjectDisplay";
import Title from "../Title";

export default function () {
	return (
		<ProjectConsumer>
			{(value) => {
				const { filteredProjects } = value;

				return (
					<section className="container">
						<Title title="projects" />
						<div className="grid-container">
							{filteredProjects.map((item) => (
								<ProjectDisplay key={item.id} project={item} />
							))}
						</div>
					</section>
				);
			}}
		</ProjectConsumer>
	);
}
