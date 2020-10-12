import { createSlice } from '@reduxjs/toolkit';

const findId = id => item => item.id === id
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    subtotal: 0
  },
  reducers: {
    addProduct: (state, action) => {
      const { id, price } = action.payload
      const idx = state.list.findIndex(findId(id))
      if (idx < 0) {
        state.list.push({
          item: action.payload,
          quantity: 1
        })
      } else {
        const quant = state.list[idx].quantity
        state.list[idx] = {
          item: action.payload,
          quantity: quant + 1
        }
      }
      state.subtotal += price
    },
    removeProduct: (state, action) => {
      const { id, price } = action.payload
      const idx = state.list.findIndex(findId(id))
      if (idx >= 0) {
        const quant = state.list[idx].quantity
        state.subtotal -= price * quant
        state.list[idx] = {
          quantity: 0
        }
      }
    },
    emptyCart: state => {
      state.list = []
      state.subtotal = 0
    }
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions

export const selectCart = state => state.cart.list
export const selectSubtotal = state => state.cart.subtotal

export default cartSlice.reducer
