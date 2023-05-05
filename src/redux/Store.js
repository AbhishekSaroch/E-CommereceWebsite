import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'
import likeSlice from './Slices/likeSlice'

const store = configureStore({
  reducer:{
  cart: cartSlice,
  like:likeSlice,
  }
})

export default store