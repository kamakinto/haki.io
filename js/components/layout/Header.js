import React from "react";
import CSSModules from 'react-css-modules';
import styles from './../../../css/styles.css';
import Jquery from 'jquery';
import Title from "./../Header/Title";

let Header;

Header = class extends React.Component {
    buttonClicked() {
        console.log('button was clicked!')
    }
    
    
    
    
    
    
    
    

  render() {
     



    return (
        <div>

            <div class="row">
                <div class="col-md-12 col-md-offset-5">
            <div id="bannerSection" styleName="banner-section">
                <img id="banner"  align="center" height= "400" src="./images/haki_banner_red.png" alt="banner image"/>
            </div>

            <div styleName="tag-line-section">

                <h1 styleName="tag-line">Technical Justice, in its purest form. </h1>
                <h3 styleName="subtext"> Learn how we are using technology to better this world.</h3>


                <div class="col-xs-4 col-xs-offset-4">
                    <a href="#Home">
                        <button onClick={this.buttonClicked} class="btn" type="button" styleName="button-custom">Learn More</button>
                    </a>

                </div>
            </div>
                    </div>
</div>


            </div>
    );
  }
}

export default CSSModules(Header, styles);