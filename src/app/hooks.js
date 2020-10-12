import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { selectReady, fetchAllProducts } from '../features/products/productsSlice'

export function useFetchDataIfNeeded() {
  const dispatch = useDispatch()
  const ready = useSelector(selectReady)
  useEffect(() => {
    if (!ready)
      dispatch(fetchAllProducts())
  }, [])
}
