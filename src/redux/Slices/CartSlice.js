import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload); // إضافة المنتج إلى السلة
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // إزالة المنتج من السلة
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
