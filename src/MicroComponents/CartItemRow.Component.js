import React, { Component } from 'react';

class CartItemRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj}</td>
        <td> quantity </td>
      </tr>
    );
  }
}

export default CartItemRow;
