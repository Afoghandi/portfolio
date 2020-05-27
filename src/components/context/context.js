import React, { Component } from "react";
import { SocialLinks } from "./SocialLinks";
import { NavLink } from "./NavLinks";
import { items } from "./Data";

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
	state = {
		links: NavLink,
		social: SocialLinks,
		allProjects: [],
		filteredProjects: [],
		featuredProject: [],
		type: "all",
		search: "",
		payment: false,
	};

	componentDidMount() {
		this.setProjects(items);
	}
	setProjects = (projects) => {
		//store all products in variable
		let allProjects = projects.map((item) => {
			let { id } = item.sys;
			let image = item.fields.image.fields.file.url;
			let project = { id, ...item.fields, image };
			return project;
		});
		// filter through product and find featured
		let featuredProject = allProjects.filter((item) => item.featured === true);

		this.setState({
			allProjects,

			featuredProject,

			filteredProjects: allProjects,
		});
	};
	render() {
		return (
			<ProjectContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</ProjectContext.Provider>
		);
	}
}
const ProjectConsumer = ProjectContext.Consumer;
export { ProjectProvider, ProjectConsumer };
