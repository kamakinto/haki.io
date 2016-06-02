import React from "react";
import SubHeading from "./../components/layout/SubHeading";
import Stylesheet from 'react-inline';
import CSSModules from 'react-css-modules';
import styles from './../../css/styles.css';




let Home;

 Home = class extends React.Component {
    render() {

        var homeStyle= {
          fontSize: "30px",
            textAlign: 'center',
            height: '800px'
        }
        return (
            <div styleName='test-style'>
                <a id="Home"></a>
            <SubHeading />
                <p>
                    There are tons of technology solutions out there. Why not use one that works <i>with</i> your budget?
                 </p>
                Welcome to Haki.io! Where we offer technology solutions that you can afford.

                <div id="scrollDown">
                 <a href="#OurMission">
                     <img id="scroll"  height= "100" src="./images/downButton.png" alt="Scroll Down"/>
                     </a>
                </div>
            </div>
        );
    }
}

export default CSSModules(Home, styles);