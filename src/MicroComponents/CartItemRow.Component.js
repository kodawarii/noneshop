import React, { Component } from 'react';

import './Stylesheets/CartItemRow.css'

class CartItemRow extends Component {
  render() {
    return (
      <tr>
        <td> <span className="X-btn" onCLick="">✕</span> </td>
        <td> img </td>
        <td>{this.props.obj[2]}</td>
        <td>{this.props.obj[4]}</td>
        <td> 
          <span className="quant-minus quant-common">-</span> 
          <span className="quant-figure">{this.props.obj[3]}</span> 
          <span className="quant-add quant-common">+</span> 
        </td>
        <td> ${this.props.obj[3] * this.props.obj[4]} </td>
      </tr>
    );
  }
}

export default CartItemRow;
