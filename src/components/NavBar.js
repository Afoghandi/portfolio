import React, { Component } from "react";

import { FiAlignLeft } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";

class NavBar extends Component {
	//set initial state to false
	state = {
		isOpen: false,
	};

	//toggles  action to opposite of state
	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<nav>
				<div className="logo">
					<h4>Ralphael</h4>
				</div>
				<ul
					className={
						this.state.isOpen ? "nav-links open-link nav-active" : "nav-links"
					}
				>
					<li>
						<a className="open-link" href="#">
							{" "}
							Home
						</a>{" "}
					</li>
					<li>
						<a href="#">About</a>{" "}
					</li>
					<li>
						<a href="#">Project</a>{" "}
					</li>
					<li>
						<a href="#">Contact</a>{" "}
					</li>
					<li>
						<a href="#">Contact</a>{" "}
					</li>
					<li>
						<a href="#">Contacta></a>{" "}
					</li>
				</ul>
				<FiAlignCenter className="toggle" onClick={this.handleToggle} />
			</nav>
		);
	}
}

export default NavBar;
