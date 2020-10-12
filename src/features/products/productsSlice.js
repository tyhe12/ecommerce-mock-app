import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    ready: false
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      state.ready = true
    },
    resetProducts: state => {
      state.products = null
      state.ready = false
    }
  },
});

export const { setProducts, resetProducts } = productSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchAllProducts = () => async dispatch => {
  const { data } = await axios({
    method: 'get',
    url: 'https://fakestoreapi.com/products'
  })
  dispatch(setProducts(data))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = state => state.products.products;
// export const selectFilteredProduct = id => state => state.products.ready ? state.products.products.filter(item => id === item.id) : {}
// export const selectProductId = state => state.products.products;
export const selectReady = state => state.products.ready;

export default productSlice.reducer;
