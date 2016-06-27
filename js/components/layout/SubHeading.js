import React from "react";


export default class SubHeading extends React.Component {
    render() {

        const subHeadStyle = {
            color: 'red',
            textAlign: 'center'
        }
        return (
            <div>
            <h2 style={subHeadStyle}> <b>Haki </b>[ <i>ha-ki, hak-i </i>] : The African-Swahili term for Justice</h2>
                </div>
        );
    }
}
