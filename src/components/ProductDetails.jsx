import React from 'react'
import { useDispatch } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { addProduct } from '../features/cart/cartSlice'

function ProductDetails({ product }) {
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(addProduct(product))
  }
  return (
    <div className="product-detail">
      <Row>
        <Col md="8">
          <Image fluid src={ product.image }/>
        </Col>
        <Col md="4">
          <Card>
            <Card.Body>
              <Card.Title>
                { product.title }
              </Card.Title>

              <Card.Subtitle>
                ${ product.price.toFixed(2) }
              </Card.Subtitle>

              <Card.Text className="mt-4">
                { product.description }
              </Card.Text>

              <Button onClick={clickHandler} variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails