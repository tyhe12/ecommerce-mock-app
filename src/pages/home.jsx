import React from 'react';
import Container from 'react-bootstrap/Container'

import Products from '../features/products'

function Home(props) {
  return (
    <Container>
      <h1>This is home page</h1>
      <Products />
    </Container>
  )
}

export default Home