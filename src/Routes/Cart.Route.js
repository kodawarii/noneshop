import React, { Component } from 'react';

import CartItemRow from '../MicroComponents/CartItemRow.Component';

class Cart extends Component {
  render() {
    let listOfItems = this.props.cart.map( (object, i) => {
        return <CartItemRow obj={object} key={i} />;
      });

    return (
      <div className="Connect RoutesShared">
        <h2>My Cart ({this.props.cart.length} items)</h2>
        <div>
          <table>
            <thead></thead>
            <tbody>
              {listOfItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
