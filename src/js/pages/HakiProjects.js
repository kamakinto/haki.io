import React from "react";
import CSSModules from 'react-css-modules';
import styles from './../../css/styles.css';

let HakiProjects;

HakiProjects = class extends React.Component {
    render() {

        return (
            <div styleName="greySection">
                <a id="HakiProjects"></a>
            <h3 styleName='section-heading'>Haki Projects</h3>
                
                <div class="container-fluid">
                <div class='row'>
                    <div class="col-md-6">
                        <img id="redhaki"  height= "200" src="./images/haki_red.png" alt="Scroll Down"/>
                        <p styleName="description-text">
                            Red Haki projects contribute to humanitarian aid initiatives.
                            </p>
                        
                            <li>Haki Sonar: <b>Coming soon!</b></li>



                    </div>
                    <div class="col-md-6">
                        <img id="greenhaki"  height= "200" src="./images/haki_green.png" alt="Scroll Down"/>
                        <p styleName="description-text">
                            Green Haki projects contribute tools used in higher education.
                        </p>


                            <li>Assessment Dashboard: <b>Coming soon!</b></li>




                    </div>
                    </div>

                    </div>




                </div>
        );
    }
}


export default CSSModules(HakiProjects, styles);