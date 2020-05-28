import React from "react";
import { ProjectConsumer } from "../context";
import ProjectDisplay from "./ProjectDisplay";
import FilterProjects from "./FilterProject";
import Title from "../Title";

export default function () {
	return (
		<ProjectConsumer>
			{(value) => {
				const { filteredProjects } = value;

				return (
					<section className="container">
						Total:{filteredProjects.length}
						<Title title="projects" />
						<FilterProjects />
						<div className="grid-container">
							{filteredProjects.length === 0 ? (
								<h1> Sorry no items match your search</h1>
							) : (
								filteredProjects.map((item) => (
									<ProjectDisplay key={item.id} project={item} />
								))
							)}
						</div>
					</section>
				);
			}}
		</ProjectConsumer>
	);
}
