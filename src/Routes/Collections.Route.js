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
              Product 1
              <ItemHover addToCart={this.props.addToCart} id={"id1"}/>
            </div>
            <div className="box b">
              Product 2
              <ItemHover addToCart={this.props.addToCart} id={"id2"}/>
            </div>
            <div className="box c">
              Product 3
              <ItemHover addToCart={this.props.addToCart} id={"id3"}/>
            </div>
            <div className="box d">
              Product 4
              <ItemHover addToCart={this.props.addToCart} id={"id4"}/>
            </div>
            <div className="box e">
              Product 5
              <ItemHover addToCart={this.props.addToCart} id={"id5"}/>
            </div>
            <div className="box f">
              Product 6
              <ItemHover addToCart={this.props.addToCart} id={"id6"}/>
            </div>
            <div className="box g">
              Product 7
              <ItemHover addToCart={this.props.addToCart} id={"id7"}/>
            </div>
            <div className="box h">
              Product 8
              <ItemHover addToCart={this.props.addToCart} id={"id8"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
