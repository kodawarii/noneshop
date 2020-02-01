import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './Components/Header.Component.js';
import Nav from './Components/Nav.Component.js';
import Footer from './Components/Footer.Component.js';

import Welcome from './Routes/Welcome.Route';
import Collections from './Routes/Collections.Route';
import Connect from './Routes/Connect.Route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lexend+Giga&display=swap" rel="stylesheet"/>
          <Header></Header>
          <Nav></Nav>

          <div className="Content">
            <Switch>
              <Route exact path='/' component={Welcome}/>
              <Route exact path='/collections' component={Collections}/>
              <Route exact path='/connect' component={Connect}/>
            </Switch>
          </div>
          
          <Footer></Footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
