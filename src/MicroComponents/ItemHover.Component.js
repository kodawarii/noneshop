import React, { Component } from 'react';

import './Stylesheets/ItemHover.css';

class ItemHover extends Component {
  render() {
    return (
      <div className="ItemHover">
        <ul className="itemhover-ul">
          <li>♡</li>
          <li onClick={this.props.addToCart}>＋</li>
        </ul>
      </div>
    );
  }
}

export default ItemHover;
