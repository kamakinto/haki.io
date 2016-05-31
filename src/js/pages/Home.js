import React from "react";
import SubHeading from "./../components/layout/SubHeading";
import Stylesheet from 'react-inline';





export default class Home extends React.Component {
    render() {

        var homeStyle= {
          fontSize: "30px",
            textAlign: 'center',
            height: '800px'
        }
        return (
            <div style={homeStyle}>
                <a id="Home"></a>
            <SubHeading />
                <p>
                    Welcome to Haki.io ! We are really excited about our line of technologies we are offering.
                    We organize our products by color scheme (check out the color of the Giraffe's tail).


                </p>

                </div>
        );
    }
}
