import React, { Component } from 'react';

class CartTable extends Component {
  render() {
    let totalPrice;

    if(this.props.totalPrice > 0) totalPrice = this.props.totalPrice;    

    return (
      <table className="Cart-table">
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>indv. price</td>
          <td>quantity</td>
          <td> price </td>
        </tr>
      </thead>
      <tbody className="Cart-table-tbody">
        {this.props.listOfItems}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total: </td>
          <td>${totalPrice}</td>
        </tr>
      </tbody>
    </table>
    );
  }
}

export default CartTable;
