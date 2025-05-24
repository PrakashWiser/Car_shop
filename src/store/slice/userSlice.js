// src/store/slice/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: "",
  },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    clearCart(state) {
      state.cart = "";
    },
  },
});

export const { setCart, clearCart } = userSlice.actions;
export default userSlice.reducer;