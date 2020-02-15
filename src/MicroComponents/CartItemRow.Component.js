import React, { Component } from 'react';

import './Stylesheets/CartItemRow.css'

class CartItemRow extends Component {
  render() {
    return (
      <tr>
        <td> <span className="X-btn">✕</span> </td>
        <td>{this.props.obj.img}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.price}</td>
        <td> 
          <span className="quant-minus quant-common">-</span> 
          <span className="quant-figure">{this.props.obj.quantity}</span> 
          <span className="quant-add quant-common">+</span> 
        </td>
        <td> ${this.props.obj.price * this.props.obj.quantity} </td>
      </tr>
    );
  }
}

export default CartItemRow;
