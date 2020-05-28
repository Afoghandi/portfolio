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

		this.setState({
			allProjects,

			filteredProjects: allProjects,
		});
	};

	handleChange = (e) => {
		const name = e.target.name;
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		this.setState(
			{
				[name]: value,
			},
			this.sortProjects
		);
	};
	sortProjects = () => {
		const { type, allProjects, search, payment } = this.state;
		let tempProject = [...allProjects];

		if (payment) {
			tempProject = tempProject.filter((item) => item.payment === true);
		}
		if (type !== "all") {
			tempProject = tempProject.filter((item) => item.type === type);
		}
		if (search.length > 0) {
			tempProject = tempProject.filter((item) => {
				//in case users uses caps lock
				let tempSearch = search.toLowerCase();
				//start search by first letter till the full length
				let tempTitle = item.style.toLowerCase().slice(0, search.length);
				if (tempSearch === tempTitle) {
					return item;
				}
			});
		}

		this.setState({
			filteredProjects: tempProject,
		});
	};

	render() {
		return (
			<ProjectContext.Provider
				value={{ ...this.state, handleChange: this.handleChange }}
			>
				{this.props.children}
			</ProjectContext.Provider>
		);
	}
}
const ProjectConsumer = ProjectContext.Consumer;
export { ProjectProvider, ProjectConsumer };
