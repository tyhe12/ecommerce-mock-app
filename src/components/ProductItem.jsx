import React from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

import Card from 'react-bootstrap/Card'

import styles from './ProductItem.module.css'

function ProductItem({ image, title, price, id }) {
  return (
    <Link to={`/product/${id}`}>
      <Card className={`pa-2 product-item ${styles.productCard}`}>
        <Card.Img className={styles.cardImage} variant="top" src={ image } />
        <Card.Body>
          <Card.Title>
            <LinesEllipsis
              text={ title }
              maxLine='2'
            />
          </Card.Title>
          <Card.Text className="font-weight-bold">
            ${ price.toFixed(2) }
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ProductItem