import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Footer extends Component {

  render() {
    return (
        <footer ClassName="bg-light text-center text-lg-start">
            <div ClassName="text-center p-3" style={{
                backgroundColor : '#343a40',
                position: 'absolute', 
                height : '0%', 
                margin : '0px', 
                'min-height' : '12%',
                'margin-top' : '399px',
                'width' : '100%'
            }}>

                <p style={{ 
                    color : 'white',
                    'margin-left': '800px',
                    'margin-top' : '46px',
                    'font-size' : '17px'
                }}>                      
                  © Orange 2020 Copyright
                </p>
                
            </div>
        </footer>
    );
  }
}

export default Footer;
