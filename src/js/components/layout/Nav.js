import React from "react";
import { IndexLink, Link } from "react-router";


export default class Nav extends React.Component {
    render() {

        const navStyle = {
            marginTop: "0px"
        }
        ;
        return (
            <div style={navStyle}>
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container" >
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse" style={navStyle}>
                        <ul class="nav navbar-nav">
                            <li><a href="#Home" activeClassName="active"> Home</a></li>
                            <li><a href="#OurMission" activeClassName="active"> Our Mission </a></li>
                            <li><a href="#HakiProjects" activeClassName="active"> Haki Projects </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}