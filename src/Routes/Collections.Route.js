import React, { Component } from 'react';

import './Stylesheets/Collections.css';
import './Stylesheets/RoutesShared.css';
import ItemHover from '../MicroComponents/ItemHover.Component';

class Collections extends Component {

  render() {

    let collections = this.props.cart2.map((object, i) => {
      if(object) return <div className="box" key={i}> 
        <p>img {object.img}</p>
        <p>{object.name}</p>
        <p>${object.price}</p>
        <ItemHover addToCart={this.props.addToCart} id={i}/>
      </div>
    });

    return (
      <div className="Collections RoutesShared">
        <h2 className="Collections-Header">All 2020 FW Collections</h2>
        <div className="outer-wrapper">
          <div className="wrapper">
            {collections}
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
