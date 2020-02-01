import React, { Component } from 'react';

import './Stylesheets/Collections.css';
import './Stylesheets/RoutesShared.css';
import ItemHover from '../MicroComponents/ItemHover.Component';

class Collections extends Component {
  render() {
    return (
      <div className="Collections RoutesShared">
        <h2 className="Collections-Header">2020 FW Collections</h2>
        <div className="outer-wrapper">
          <div className="wrapper">
            <div className="box a">
              {this.props.cart[0]}
              <ItemHover addToCart={this.props.addToCart} id={"0"}/>
            </div>
            <div className="box b">
              Product 2
              <ItemHover addToCart={this.props.addToCart} id={"1"}/>
            </div>
            <div className="box c">
              Product 3
              <ItemHover addToCart={this.props.addToCart} id={"2"}/>
            </div>
            <div className="box d">
              Product 4
              <ItemHover addToCart={this.props.addToCart} id={"3"}/>
            </div>
            <div className="box e">
              Product 5
              <ItemHover addToCart={this.props.addToCart} id={"4"}/>
            </div>
            <div className="box f">
              Product 6
              <ItemHover addToCart={this.props.addToCart} id={"5"}/>
            </div>
            <div className="box g">
              Product 7
              <ItemHover addToCart={this.props.addToCart} id={"6"}/>
            </div>
            <div className="box h">
              Product 8
              <ItemHover addToCart={this.props.addToCart} id={"7"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
