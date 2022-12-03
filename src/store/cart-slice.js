import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      //console.log('addItemToCart => cart-slice');
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        //existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
