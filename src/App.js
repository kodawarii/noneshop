import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './Components/Header.Component.js';
import Nav from './Components/Nav.Component.js';
import Footer from './Components/Footer.Component.js';

import Welcome from './Routes/Welcome.Route';
import Collections from './Routes/Collections.Route';
import Connect from './Routes/Connect.Route';
import Cart from './Routes/Cart.Route';

// Notes:
// react-router passing props: https://tylermcginnis.com/react-router-pass-props-to-components/

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      cart: []
    }
  }

  addToCart(id){
    let current = this.state.cart;
    current.push(id);
    this.setState({cart: current});
    console.log("> sucessfully added item to cart ... id: " + id);
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lexend+Giga&display=swap" rel="stylesheet"/>
          <Header></Header>
          <Nav cart={this.state.cart}></Nav>

          <div className="Content">
            <Switch>
              <Route exact path='/' component={() => <Welcome thisIsNotEfficient="so dont use inline functions" />}/>
              <Route exact path='/collections' render={(props) => <Collections {...props} addToCart={this.addToCart.bind(this) } cart={this.state.cart} />}/>
              <Route exact path='/connect' component={Connect} />
              <Route exact path='/cart' render={(props) => <Cart {...props} cart={this.state.cart}/>}/>
            </Switch>
          </div>
          
          <Footer></Footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
