import React from "react";
import { IndexLink, Link } from "react-router";
import CSSModules from 'react-css-modules';
import styles from './../../../css/styles.css';
//import "./Bannervid";
let Nav;

Nav = class extends React.Component {
    render() {


        return (
            <div>
            <nav class="navbar navbar-inverse navbar-fixed-top" styleName="navbar-custom">
                <div class="container-fluid">
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li ><a href="#Home" activeClassName="active" styleName="a-custom"> Home</a></li>
                            <li><a href="#OurMission" activeClassName="active" styleName="a-custom"> Our Mission </a></li>
                            <li><a href="#HakiProjects" activeClassName="active" styleName="a-custom"> Haki Projects </a></li>
                            <li><a href="https://medium.com/@haki.io" activeClassName="active" styleName="a-custom"> Blog </a></li>
                        </ul>
                    </div>
                </div>
            </nav>

                
               
            </div>
        );
    }
}

export default CSSModules(Nav, styles);