import React, { Component } from "react";

import Model from "../images/face.png";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
    render() {
        return ( <
            div >
            <
            Hero highlight = "Seems like you've gone to a wrong page"
            name = { `oops ` }
            children = "Home"
            img = { Model } > { " " } <
            Link className = "link-btn"
            children = "view"
            to = "/project/" >
            home { " " } <
            /Link>{" "} < /
            Hero > <
            /div>
        );
    }
}