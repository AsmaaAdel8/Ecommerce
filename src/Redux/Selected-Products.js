import { createSlice } from "@reduxjs/toolkit";

const SelectedProduct = createSlice({
  name: "SelectedProd",
  initialState: {
    items: [],
    num: 0,
  },
  reducers: {
    Selected: (state, action) => {
      state.items.push(action.payload);
      state.num++;
    },
    clearCart: (state) => {
      state.items = [];
      state.num = 0;
    },
    Shopping: (state) => {
        state.num++;
    },
    removeItem: (state, action) => {
        state.items.splice(action.payload, 1); // Remove item at the specified index
        state.num--;
    }
  },
});
export const { Selected, clearCart , Shopping , removeItem} = SelectedProduct.actions;
export default SelectedProduct.reducer;
