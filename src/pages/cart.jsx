import React from 'react';
import Container from 'react-bootstrap/Container'

import ShoppingCart from '../features/cart'

function Cart() {
  return (
    <Container>
      <h1>This is shopping cart</h1>
      <ShoppingCart />
    </Container>
  )
}

export default Cart