import React from "react";
import { ProjectConsumer } from "../context";

export default function FilterProject() {
	return (
		<ProjectConsumer>
			{(value) => {
				const { allProjects, handleChange, type, style, payment } = value;
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
								<label htmlFor="style">Search by component</label>
								<input
									type="text"
									name="style"
									value={style}
									className="search-field"
									onChange={handleChange}
								></input>
							</div>
							<div>
								<label htmlFor="type">Type</label>
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
												{type}{" "}
											</option>
										);
									})}
								</select>
							</div>
							<div className="checkbox">
								<label htmlFor="payment">has payment option</label>
								<input
									type="checkbox"
									name="payment"
									onChange={handleChange}
									checked={payment && true}
									id="payment"
								></input>
							</div>
						</div>
					</div>
				);
			}}
		</ProjectConsumer>
	);
}
