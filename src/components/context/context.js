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
		classComponent: false,
		functionComponent: false,
		hooks: false,
		api: false,
		redux: false,
		MongoDbi: false,
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
		const {
			type,
			allProjects,

			payment,
			classComponent,
			functionComponent,
			hooks,
			api,
			redux,
			MongoDbi,
		} = this.state;
		let tempProject = [...allProjects];

		//check payment check box

		if (payment) {
			tempProject = tempProject.filter((item) => item.payment === true);
		}
		//check class component check box
		if (classComponent) {
			tempProject = tempProject.filter((item) => item.classComponent === true);
		}

		// check function component checkbox

		if (functionComponent) {
			tempProject = tempProject.filter(
				(item) => item.functionComponent === true
			);
		}
		//check hooks component checkbox
		if (hooks) {
			tempProject = tempProject.filter((item) => item.hooks === true);
		}
		//check api component checkbox
		if (api) {
			tempProject = tempProject.filter((item) => item.api === true);
		}
		//check mongo component checkbox
		if (MongoDbi) {
			tempProject = tempProject.filter((item) => item.MongoDbi === true);
		}
		//check redux component checkbox
		if (redux) {
			tempProject = tempProject.filter((item) => item.redux === true);
		}
		//check drop function
		if (type !== "all") {
			tempProject = tempProject.filter((item) => item.type === type);
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
