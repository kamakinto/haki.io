import React from "react";
import SubHeading from "./../components/layout/SubHeading";
import CSSModules from 'react-css-modules';
import styles from './../../css/styles.css';




let Home;

 Home = class extends React.Component {
     
  
    render() {
        return (
            <div styleName="greySection">
                <a id="Home"></a>

                <div >
                    <h2 styleName="haki-def"> <b>Haki </b>[ <i>ha-ki, hak-i </i>] : The African-Swahili term for Justice</h2>
                </div>

                <p styleName='description-text'>
                    There are tons of technology solutions out there. Why not use one that works <i>with</i> your budget?
                Welcome to Haki.io! Where we offer technology solutions that you can afford.
                    </p>

                <div id="scrollDown" styleName='scroll-down-button'>
                 <a href="#OurMission">
                     <img id="scroll"  height= "100" src="./images/downButton.png" alt="Scroll Down"/>
                     </a>
                </div>
            </div>
        );
    }
}

export default CSSModules(Home, styles);