import React, { Component } from 'react';

import CartItemRow from '../MicroComponents/CartItemRow.Component';
import CartTable from '../MicroComponents/CartTable.Component';

import './Stylesheets/Cart.css';

class Cart extends Component {

  render() {
    let listOfItems = this.props.cart2.map( (object, i) => {
        if(object.quantity !== undefined && object.quantity > 0) return <CartItemRow obj={object} key={i} />;
      });

      if(this.props.count < 1){
        listOfItems = <tr><td> Your cart is empty! </td></tr>
      }
    

    return (
      <div className="Cart RoutesShared">
        <h3>Shopping Cart ({this.props.count} items)</h3>
        <CartTable listOfItems={listOfItems} totalPrice={this.props.totalPrice} />
      </div>
    );
  }
}

export default Cart;
