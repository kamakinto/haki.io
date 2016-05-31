import React from "react";

import Footer from "./../components/layout/Footer";
import Header from "./../components/layout/Header";
import Mission from "./OurMission";
import AboutUs from "./AboutUs";
import Home from "./Home";
import {Link} from "react-router";
import Nav from "./../components/layout/Nav";
import HakiPage from "./HakiProjects";
import SubHeading from "./../components/layout/SubHeading"

export default class Layout extends React.Component {

  render() {
    const { location } = this.props;
      const layoutStyle = {
        textAlign: 'center'
       };
      const navStyle = {
        backgroundColor: '#000000',
          borderColor: "#000000"
      };
    return (
      <div >
        <Nav location={location}/>
        <div class="container" style={layoutStyle}>
          <div class="row">
            <div class="col-lg-12">
        <Header />
            <Home />
            <Mission />
            <HakiPage />
            </div>
            </div>

      </div>
          <Footer />
      </div>
    );
  }
}
