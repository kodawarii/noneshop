import React, { Component } from 'react';

import './Stylesheets/Collections.css';
import './Stylesheets/RoutesShared.css';
import ItemHover from '../MicroComponents/ItemHover.Component';

class Collections extends Component {

  addToCart(){
    console.log("adding...");
  }

  render() {
    return (
      <div className="Collections RoutesShared">
        <h2 className="Collections-Header">2020 FW Collections</h2>
        <div className="outer-wrapper">
          <div className="wrapper">
            <div className="box a">
              Product 1
              <ItemHover addToCart={this.addToCart.bind(this)} />
            </div>
            <div className="box b">
              Product 2
              <ItemHover/>
            </div>
            <div className="box c">
              Product 3
              <ItemHover/>
            </div>
            <div className="box d">
              Product 4
              <ItemHover/>
            </div>
            <div className="box e">
              Product 5
              <ItemHover/>
            </div>
            <div className="box f">
              Product 6
              <ItemHover/>
            </div>
            <div className="box g">
              Product 7
              <ItemHover/>
            </div>
            <div className="box h">
              Product 8
              <ItemHover/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
