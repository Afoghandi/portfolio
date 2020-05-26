import React, { Component } from "react";
import items from "../components/context/NavLinks";
import { Link } from "react-router-dom";
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
        return ( <
            nav className = 'container' >
            <
            div className = "logo" >
            <
            h4 > Ralphael < /h4>{" "} < /
            div > { " " } <
            ul className = {
                this.state.isOpen ? "nav-links open-link nav-active" : "nav-links"
            } > { " " } {
                items.map((item) => {
                    return ( <
                        li key = { item.id } >
                        <
                        Link className = "open-link"
                        to = { item.path } > { " " } { item.name } { " " } <
                        /Link>{" "} < /
                        li >
                    );
                })
            } { " " } <
            /ul>{" "} <
            FiAlignCenter className = "toggle"
            onClick = { this.handleToggle }
            />{" "} < /
            nav >
        );
    }
}

export default NavBar;