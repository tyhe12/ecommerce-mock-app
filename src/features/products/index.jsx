import React from 'react'
import { useSelector } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  selectProducts,
  selectReady
} from './productsSlice';
import ProductItem from '../../components/ProductItem'
import { useFetchDataIfNeeded } from '../../app/hooks'

export default function Products() {
  const products = useSelector(selectProducts)
  const ready = useSelector(selectReady)
  useFetchDataIfNeeded()

  return (
    <div className="products">
      <h1>Products</h1>
      { ready && 
        <Row>
          {
            products.map(item => (
              <Col className="mb-4" xs="12" md="4" lg="3" key={item.id}>
                <ProductItem 
                  id={item.id} 
                  image={item.image} 
                  title={item.title}
                  price={item.price} />
              </Col>
            ))
          }
        </Row>
      }
    </div>
  );
}
