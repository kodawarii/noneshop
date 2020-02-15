import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';

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
      cart2:[]
    }
  }

  componentDidMount(){
    // Retrieve NoneShop Products from api server
    axios.get('http://localhost:52624/api/NoneApparels')
        .then(response => {
          this.setState({ cart2: response.data }); // [id, img, name, price]
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  addToCart(id){
    let toUpdate = this.state.cart2[id];
    if(toUpdate.quantity === undefined) toUpdate.quantity = 1; // risky when we want .quantity to be undefined on purpose
    else{
      toUpdate.quantity++;
    }

    let current = this.state.cart2;
    current[id] = toUpdate;

    // updating total prices
    let currPrice = this.state.totalPrice;
    currPrice += this.state.cart2[id].price;
    this.setState({totalPrice: currPrice});

    this.state.itemCounter++;
    this.setState({cart2: current});
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lexend+Giga&display=swap" rel="stylesheet"/>
          <Header></Header>
          <Nav cart={this.state.cart2} count={this.state.itemCounter}></Nav>

          <div className="Content">
            <Switch>
              <Route exact path='/' component={() => <Welcome thisIsNotEfficient="so dont use inline functions" />}/>
              <Route exact path='/collections' render={(props) => <Collections {...props} 
              addToCart={this.addToCart.bind(this) } 
              cart2={this.state.cart2}
              count={this.state.itemCounter}
              />}/>
              <Route exact path='/connect' component={Connect} />
              <Route exact path='/cart' render={(props) => 
                <Cart {...props} 
                cart2={this.state.cart2}
                count={this.state.itemCounter} 
                totalPrice={this.state.totalPrice}/>}/>
            </Switch>
          </div>
          
          <Footer></Footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
