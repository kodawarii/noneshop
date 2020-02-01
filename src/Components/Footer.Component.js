import React, { Component } from 'react';

import './Stylesheets/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-outer-wrapper">
          <div className="footer-wrapper">
            <div className="footer-box footer-a">
              <h5>This website was created by Paul</h5>
            </div>
            <div className="footer-box footer-b">
              <ul className="footer-social-ul">
                <h5> Social Media </h5>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous"/>
                <li><i className="fab fa-facebook"></i></li>
                <li><i className="fab fa-github-square"></i></li>
                <li><i className="fab fa-linkedin"></i></li>
                <li><i className="fab fa-instagram"></i></li>
              </ul>
            </div>
            <div className="footer-box footer-c">
              <ul className="footer-service-ul">
                <h5>Help</h5>
                <li>FAQ</li>
                <li>Order | Shipping</li>
                <li>Payment | Pricing</li>
                <li>Returns | Refunds</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-box footer-d">
            <ul className="footer-service-ul">
                <h5>About none</h5>
                <li>About</li>
                <li>Partners</li>
                <li>Motivation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
