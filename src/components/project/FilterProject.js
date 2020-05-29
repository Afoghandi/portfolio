import React from "react";
import { ProjectConsumer } from "../context";

export default function FilterProject() {
	return (
		<ProjectConsumer>
			{(value) => {
				const {
					allProjects,
					handleChange,
					type,

					payment,
					classComponent,
					functionComponent,
					hooks,
					api,
					redux,
					MongoDbi,
				} = value;
				let types = new Set();
				types.add("all");
				for (let type in allProjects) {
					types.add(allProjects[type]["type"]);
				}
				types = [...types];
				return (
					<div className="container">
						<div className="filter-container">
							<div>
								<label htmlFor="type"> Type </label>{" "}
								<select
									name="type"
									id="type"
									className="type-container"
									value={type}
									onChange={handleChange}
								>
									{types.map((type, id) => {
										return (
											<option key={id} value={type}>
												{type}
											</option>
										);
									})}
								</select>
							</div>{" "}
							<div className="checkbox">
								<label htmlFor="payment"> payment option </label>{" "}
								<input
									type="checkbox"
									name="payment"
									onChange={handleChange}
									checked={payment && true}
									id="payment"
								></input>{" "}
								<label htmlFor="classComponent"> class component </label>{" "}
								<input
									type="checkbox"
									name="classComponent"
									onChange={handleChange}
									checked={classComponent && true}
									id="classComponent"
								></input>{" "}
								<br />
								<label htmlFor="functionComponent">
									{" "}
									functional component{" "}
								</label>{" "}
								<input
									type="checkbox"
									name="functionComponent"
									onChange={handleChange}
									checked={functionComponent && true}
									id="functionComponent"
								></input>{" "}
								<label htmlFor="hooks"> hooks </label>{" "}
								<input
									type="checkbox"
									name="hooks"
									onChange={handleChange}
									checked={hooks && true}
									id="hooks"
								></input>{" "}
								<br />
								<label htmlFor="api"> api </label>{" "}
								<input
									type="checkbox"
									name="api"
									onChange={handleChange}
									checked={api && true}
									id="api"
								></input>{" "}
								<label htmlFor="redux"> redux </label>{" "}
								<input
									type="checkbox"
									name="redux"
									onChange={handleChange}
									checked={redux && true}
									id="redux"
								></input>{" "}
								<br />
								<label htmlFor="MongoDbi"> MongoDbi </label>{" "}
								<input
									type="checkbox"
									name="MongoDbi"
									onChange={handleChange}
									checked={MongoDbi && true}
									id="MongoDbi"
								></input>
							</div>
						</div>
					</div>
				);
			}}
		</ProjectConsumer>
	);
}
