import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { isCartVisible: false };
const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle (state) {
            state.isCartVisible = !state.isCartVisible;
        }
    }
     
});

export default uiSlice;
export const uiAction = uiSlice.actions;