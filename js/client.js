import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";


import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import HakiProjects from "./pages/HakiProjects";
import OurMission from "./pages/OurMission";
import Home from "./pages/Home";



const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>

            <Route path="HakiProjects" component={HakiProjects}></Route>
            <Route path="AboutUs" component={AboutUs}></Route>
            <Route path="OurMission" component={OurMission}></Route>
        </Route>

    </Router>,

    app);
