import React from "react";

import Title from "./../Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    /** BASIC LOGIC STARTS HERE **/

    const name = "Robbie";

    /** BASIC LOGIC STOPS HERE **/
    return (
      <div id="bannerSection">
          <img id="banner"  height= "600" src="./images/haki_banner_red.png" alt="banner image"/>
      </div>
    );
  }
}
