  import React from "react";
  import FontAwesome from "react-fontawesome"
  
  
  export default class Footer extends React.Component {
    render() {
      const footerStyle={
          marginTop: '0px',
          paddingBottom: '100px',
          paddingTop: '50px',
          backgroundColor: 'white'

      };
      return (
          <div>
        <footer style={footerStyle}>
            <div class="row">
                <div class="col-md-12 col-md-offset-5">

                <a href="#">
                   <FontAwesome
                       className="fa fa-facebook-official"
                       name="facebook"
                       size="3x"
                       style={{paddingRight: '50px', color:'#F3152B'}}
                       />
                    </a>
                    <a href="#">
                        <FontAwesome
                            className="fa fa-twitter"
                            name="twitter"
                            size="3x"
                            style={{paddingRight: '50px', color:'#F3152B'}}
                        />
                    </a>
                    <a href="#">
                        <FontAwesome
                            className="fa fa-instagram"
                            name="instagram"
                            size="3x"
                            style={{paddingRight: '50px', color:'#F3152B'}}
                        />
                    </a>
                </div>
                <div class="col-md-12 col-md-offset-5">
                    <a href="#">Back To Top</a>
                    </div>

            </div>


        </footer>


              </div>
      );
    }
  }
