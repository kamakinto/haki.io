  import React from "react";
  
  
  export default class Footer extends React.Component {
    render() {
      const footerStyle={
          marginTop: '60px',
          paddingBottom: '100px',
          backgroundColor: '#555555'

      };
      return (
        <footer style={footerStyle}>footer section</footer>
      );
    }
  }
