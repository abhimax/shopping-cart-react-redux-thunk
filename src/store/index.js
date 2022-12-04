import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart:cartSlice.reducer }
});

export default store;
