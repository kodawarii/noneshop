import React, { Component } from 'react';

import { HashRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Stylesheets/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <HashRouter>
          <ul className="Nav-ul">
            <Link to={'/'}><li> Welcome </li></Link>
            <Link to={'/collections'}><li> Collections </li></Link>
            <Link to={'/connect'}><li> Connect </li></Link>
            <li><input className="searchbar" type="text" placeholder="Search"/></li>
          </ul>
        </HashRouter>

        <ul className="Login-ul">
          <li><span className="login">Login </span></li>
          <li><span className="register">Register</span></li>
          <li><span className="cart">Cart ({this.props.cart.length})</span></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
