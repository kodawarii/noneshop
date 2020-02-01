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
      itemCounter: 0,
      totalPrice: 0,
      cart: [] // mock backend API DB
    }
  }

  componentDidMount(){
    // Setting up dummy data

    // [id, img, descripton, quantity, price]
    let products = [
      ["0", "", "Eunbal t-shirt", 0, 800],
      ["1", "", "NONE t-shirt", 0, 500],
      ["2", "", "None hoodie", 0, 950],
      ["3", "", "None belt", 0, 200],
      ["4", "", "none t-shirt", 0, 1200],
      ["5", "", "noneDesign t-shirt", 0, 400],
      ["6", "", "ND t-shirt", 0, 350],
      ["7", "", "ENON t-shirt", 0, 799]
    ];

    this.setState({cart: products});
  }

  addToCart(id){
    // updating items in cart-dummy-data tracker
    let toUpdate = this.state.cart[id];
    toUpdate[3]++;

    let current = this.state.cart;
    current[id] = toUpdate;

    // updating total prices
    let currPrice = this.state.totalPrice;
    currPrice += this.state.cart[id][4];
    this.setState({totalPrice: currPrice});

    this.state.itemCounter++;
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
          <Nav cart={this.state.cart} count={this.state.itemCounter}></Nav>

          <div className="Content">
            <Switch>
              <Route exact path='/' component={() => <Welcome thisIsNotEfficient="so dont use inline functions" />}/>
              <Route exact path='/collections' render={(props) => <Collections {...props} 
              addToCart={this.addToCart.bind(this) } 
              cart={this.state.cart} 
              count={this.state.itemCounter}
              />}/>
              <Route exact path='/connect' component={Connect} />
              <Route exact path='/cart' render={(props) => <Cart {...props} cart={this.state.cart} count={this.state.itemCounter} totalPrice={this.state.totalPrice}/>}/>
            </Switch>
          </div>
          
          <Footer></Footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
