import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {
  selectCart,
  selectSubtotal,
  emptyCart
} from './cartSlice'

function ShoppingCart() {
  const dispatch = useDispatch()
  const items = useSelector(selectCart)
  const subtotal = useSelector(selectSubtotal)

  const clickHandler = () => {
    dispatch(emptyCart())
  }

  return (
    <div className="shopping-cart">
      <ListGroup variant="flush">
        {
          items.length > 0 ? 
          items.filter(item => item.quantity > 0).map(item => {
            return (
              <ListGroup.Item key={item.id} className="cart-item">
                <Card >
                  <Card.Body className="d-flex justify-content-around">
                    <Card.Title>{ item.item.title }</Card.Title>
                    <Card.Text>{ item.item.price }</Card.Text>
                    <Card.Text>{ item.quantity }</Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            )
            }) : <h1>Nothing in your shopping cart</h1>
        }
      </ListGroup>
      <div className="cart-action d-flex justify-content-between">
        <h2>Subtotal: ${ subtotal }</h2>
        <Button onClick={clickHandler}>Empty Cart</Button>
      </div>
    </div>
  )
}

export default ShoppingCart