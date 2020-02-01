import React, { Component } from 'react';

import './Stylesheets/ItemHover.css';

class ItemHover extends Component {

  addToCart(){
    this.props.addToCart(this.props.id);
  }

  render() {
    return (
      <div className="ItemHover">
        <ul className="itemhover-ul">
          <li>♡</li>
          <li onClick={this.addToCart.bind(this)}>＋</li>
        </ul>
      </div>
    );
  }
}

export default ItemHover;
