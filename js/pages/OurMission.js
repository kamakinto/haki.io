import React from "react";
import CSSModules from 'react-css-modules';
import styles from './../../css/styles.css';

let OurMission;
OurMission = class extends React.Component {
    render() {


        return (
            <div styleName="whiteSection">
                <div>
                    <a id="OurMission"></a>
                </div>


                <div class="container-fluid">
                    <h3 styleName='section-heading'>Our Mission</h3>
                    <div class="row">
                         <div class="col-md-6">
                             <img id="redhaki"  height= "200" src="./images/codepic.jpg" alt="..." class="img-circle" />
                         </div>
                        <div class="col-md-6">
                            <p styleName='description-text'> Our Mission at Haki.io is to deliver quality, and affordable products to our constituents.
                                We create the solutions that this world needs.
                            </p>


                </div>



                    </div>
                </div>

                <div id="scrollDown" styleName='scroll-down-button'>
                    <a href="#HakiProjects">
                        <img id="scroll"  height= "100" src="./images/downButton.png" alt="Scroll Down"/>
                    </a>
                </div>

                </div>


        );
    }
}


export default CSSModules(OurMission, styles);