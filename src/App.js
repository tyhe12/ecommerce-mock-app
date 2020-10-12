import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import Cart from './pages/cart'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
