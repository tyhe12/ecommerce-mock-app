import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { selectProducts, selectReady } from '../features/products/productsSlice'
import { useFetchDataIfNeeded } from '../app/hooks'
import ProductDetails from '../components/ProductDetails'

function Product() {
  const { id: idStr } = useParams()
  const id = parseInt(idStr)
  const products = useSelector(selectProducts)
  const ready = useSelector(selectReady)
  useFetchDataIfNeeded()

  const product = useMemo(() => {
    if (!ready) return {}
    const result = products.filter(item => item.id === id)
    if (result.length === 0) return {}
    return result[0]
  }, [products, ready, id])
  
  return (
      <Container className="py-4">
          {
            ready && <ProductDetails product={ product } />
          }
      </Container>
  )
}

export default Product